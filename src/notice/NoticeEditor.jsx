import { useEffect } from "react";
import { useRef, useState, useMemo } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { getCookieToken } from "../Cookie";

const NoticeEditor = ({setCon}) =>{
  const QuillRef = useRef();
  const [content, setContent] = useState("");
  setCon(content)
  // const [imgurl, setImgurl] =useState("")
  // const [addImage,{data, isSuccess, isFail, refetch}] = useAddImageMutation();

    const toolbarOptions =[
      [{ 'header': [1, 2, false] }],
      ['bold','underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
      ['clean'],
    ]

    const modules = useMemo(()=>{
      return{
      toolbar:{
          container: toolbarOptions,
          handlers: {
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

export default NoticeEditor

const StEditorContainer = styled.div`
  width: 100%;
  min-height: 0%;
  display: flex;
  flex-direction: column;
`;
