import { useRef, useState, useCallback, useMemo } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

export const formats = [
  'header',
  'bold', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image',
  'align', 'color', 'background',        
];

const toolbarOptions =[
  [{ 'header': [1, 2, false] }],
  ['bold','underline','strike', 'blockquote'],
  [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  ['link', 'image'],
  [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
  ['clean'],
]

const Editor = ({setCon}) =>{

  const QuillRef = useRef();
  const [content, setContent] = useState("");
  setCon(content)

  const imageHandler = () =>{
    const input = document.createElement("input");
    const FormData = new FormData();
    let url ="";

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        FormData.append("image", file[0])
        try{
          const res = res.data.url;
          url = res.data.url;

          const range = QuillRef.current?.getEditor().getSelection()?.index;
          if (range !== null && range !== undefined) {
            let quill = QuillRef.current?.getEditor();

            quill?.setSelection(range, 1);
            quill?.clipboard.dangerouslyPasteHTML(
              range,
              `<img src=${url} alt="이미지 태그가 삽입됩니다." />`
              );
            }
  
            return { ...res, success: true };
          } catch (error) {
            const err = ("error")
            return { ...err.response, success: false };
          }
        }
      };
    };

    const modules = useMemo(()=>{
      return{
      toolbar:{
          container: toolbarOptions,
          handlers: {
            image: imageHandler,
          },
      },
    }},[]);

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












