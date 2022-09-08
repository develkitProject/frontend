import styled from 'styled-components';
import React, { useState, useReducer } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAddNoticeMutation } from '../redux/modules/workspaces';


// const toolbarOptions =[
//           [{ 'header': [1, 2, false] }],
//           ['bold','underline','strike', 'blockquote'],
//           [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
//           ['link', 'image'],
//           [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
//           ['clean'],
//         ]

// export const formats = [
//         'header',
//         'bold', 'underline', 'strike', 'blockquote',
//         'list', 'bullet', 'indent',
//         'link', 'image',
//         'align', 'color', 'background',        
//       ];

// const modules = {
//     toolbar:{
//         container: toolbarOptions,
//     }
// };
// const Editor = ({placeholder, value, ...rest})=>{

  const reducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };
  
  const Editor = ()=>{
    const [addNotice] = useAddNoticeMutation();

    const [state, setState] = useReducer(reducer, {
      title: '',
      content: '',
    });

    const { title, content } = state;
    const onChange = (e) => {
      setState(e.target);
    };

    const handleSubmit = () => {
      if (title !== '' && content !== '') {
        const obj = {
          title,
          content,
        };
        addNotice(obj);
        window.alert('공지사항이 등록되었습니다');
      } else {
        window.alert('제목과 내용을 모두 채워주세요!');
      }
    };
    
        return(
        <StEditorContainer>
            <StInputTitle onChange={onChange} name='title' placeholder='제목'/>
            <StInputTitle onChange={onChange} name='content' placeholder='내용'/>
            <EditorBlock>
            {/* <ReactQuill style={{height: "500px", width: "96%"}}
                    {...rest}
                    value={value || ''} 
                    theme="snow"
                    modules={modules}
                    formats={formats}>
            </ReactQuill> */}
            </EditorBlock>
            {/* <div style={{marginTop: "50px"}}/> */}
            <StButton onClick={handleSubmit}>게시하기</StButton>
        </StEditorContainer>
        )
    }

export default Editor

const StEditorContainer = styled.div`
  margin: 2%;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const StInputTitle = styled.input`
 margin-bottom: 2%;
 width: 94%;
 height: 30px;
 padding: 5px;
 padding-left: 15px;
 font-size: 20px;
 border-radius: 4px;
 border: 1px solid #C6C6C6;
 :focus{outline: 1px solid #00A99D}
`;

const EditorBlock = styled.div`
  padding-bottom: 4rem;
`;

const StButton = styled.button`
  background-color: #000000;
  margin-left: 3%;
  width: 20%;
  height: 35px;
  border-radius: 8px;
  border: 0px;
  color: #fff;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
`;