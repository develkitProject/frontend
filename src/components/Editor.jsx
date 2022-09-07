import styled from 'styled-components';
import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions =[
          [{ 'header': [1, 2, false] }],
          ['bold','underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
          ['clean'],
        ]

export const formats = [
        'header',
        'bold', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
      ];

const modules = {
    toolbar:{
        container: toolbarOptions,
    }
};

const Editor = ({placeholder, value, ...rest})=>{
        return(
        <StEditorContainer>
            <StInputTitle placeholder='제목'/>
            <ReactQuill style={{height: "500px", width: "96%"}}
                    {...rest}
                    value={value || ''} 
                    theme="snow"
                    modules={modules}
                    formats={formats}>
            </ReactQuill>

            <div style={{marginTop: "50px"}}/>

            <StButton>게시하기</StButton>
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
  /* background-color: red; */
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