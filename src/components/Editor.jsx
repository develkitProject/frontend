import { useEffect, useRef, useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import axios from 'axios';
import { getCookieToken } from '../Cookie';

function Editor({ setCon }) {
  const QuillRef = useRef();
  const [content, setContent] = useState('');
  setCon(content);
  // const [imgurl, setImgurl] =useState("")
  // const [addImage,{data, isSuccess, isFail, refetch}] = useAddImageMutation();

  const Headers = {
    Authorization: getCookieToken(),
  };

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    // eslint-disable-next-line consistent-return
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      if (file) {
        formData.append('image', file);
        try {
          const result = await axios.post(
            'https://hosung.shop/api/images',
            formData,
            { headers: Headers },
          );
          const IMG_URL = result?.data?.data?.images[0];
          const range = QuillRef.current?.getEditor().getSelection()?.index;
          if (range !== null && range !== undefined) {
            const quill = QuillRef.current?.getEditor();
            quill?.setSelection(range, 1);
            quill?.clipboard.dangerouslyPasteHTML(
              range,
              `<img src=${IMG_URL} alt="이미지 태그가 삽입됩니다." />`,
            );
          }
          return { ...result, success: true };
        } catch (error) {
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
        ref={element => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        style={{ height: '500px', width: '96%' }}
        value={content}
        theme="snow"
        name="content"
        modules={modules}
        formats={formats}
        onChange={setContent}
        content={content}
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
