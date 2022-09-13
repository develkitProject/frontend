import { useRef, useState, useMemo } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { useAddImageMutation } from "../redux/modules/workspaces";

const Editor = ({setCon}) =>{

  const QuillRef = useRef();
  const [content, setContent] = useState("");
  setCon(content)

  const [addImage,{data, isSuccess, isFail}] = useAddImageMutation();
  // const imgUrl: data?.data?.images
  console.log(data?.data?.images)

  const imageHandler = () => { 
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click(); 

    input.addEventListener('change', async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file); 

      try {
        const result = addImage(formData)
        console.log(data?.data?.images)

        console.log('성공 시, 백엔드가 보내주는 데이터', data);
        const IMG_URL = data.images;
  
        const editor = QuillRef.current.getEditor();
        // 1. 에디터 root의 innerHTML을 수정해주기
        // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
        // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
        // 
        editor.root.innerHTML =
        
        editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.
  
        const range = editor.getSelection();
        editor.insertEmbed(range.index, 'image', IMG_URL);
        
      } catch (error) {
        console.log('실패했어요ㅠ');
        console.log(error)
      }
    });
  };

    const toolbarOptions =[
      [{ 'header': [1, 2, false] }],
      ['bold','underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
      ['clean'],
    ]

    const modules = useMemo(()=>{
      return{
      toolbar:{
          container: toolbarOptions,
          handlers: {
            image: imageHandler,
          },
      },
    }},[]);

    const formats = [
      'header',
      'bold', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image',
      'align', 'color', 'background',        
    ];

    return(
        <StEditorContainer>
              <ReactQuill 
                ref={(element)=>{
                  if (element!==null){
                    QuillRef.current = element;
                }
              }} 
              style={{height: "500px", width: "96%"}}
                  value={content} 
                  theme="snow"
                  name="content"
                  modules={modules}
                  formats={formats}
                  onChange={setContent}
                  content={content}
                  >
              </ReactQuill>
              
        </StEditorContainer>
        )
    }

export default Editor

const StEditorContainer = styled.div`
  width: 100%;
  min-height: 0%;
  display: flex;
  flex-direction: column;
`;
