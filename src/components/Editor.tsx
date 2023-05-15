import { useEffect, useRef, useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { getCookieToken } from '../Cookie';
import { useAddDocImageMutation } from '../redux/modules/docs';

function Editor({ value, setContent }: {value: string, setContent: () => void}) {
  const QuillRef = useRef<ReactQuill>();
  const [editContent, setEditContent] = useState(value);
  useEffect(() => {
    setEditContent(value);
  }, [setContent, value]);
  const [addDocImage] = useAddDocImageMutation();

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    // eslint-disable-next-line consistent-return
    input.onchange = async () => {
      const file = input.files && input.files[0];
      const formData = new FormData();
      if (file) {
        formData.append('image', file);
        try {
          await addDocImage(formData).then((result: any) => {
            console.log(result)
            const IMG_URL =  result?.data?.data?.images[0];
            const range = QuillRef.current?.getEditor().getSelection()?.index;            if (range !== null && range !== undefined) {
              const quill = QuillRef.current?.getEditor();
              quill?.setSelection(range, 1);
              quill?.clipboard.dangerouslyPasteHTML(
                range,
                `<img src=${IMG_URL} alt="이미지 태그가 삽입됩니다." />`,
              );
            }
            return { ...result, success: true };
          });
        } catch (error: any) {
          const err = error;
          return { ...err.response, success: false };
        }
      }
    };
  };

  const toolbarOptions = [
    [{ header: [1, 2, false] }],
    ['bold', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    [{ align: [] }, { color: [] }, { background: [] }],
    ['clean'],
  ];

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = [
    'header',
    'bold',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  return (
    <StEditorContainer>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        style={{ height: '500px', width: '96%' }}
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={setContent}
        defaultValue={editContent}
      />
    </StEditorContainer>
  );
}

export default Editor;

const StEditorContainer = styled.div`
  width: 100%;
  min-height: 0%;
  display: flex;
  flex-direction: column;
`;
