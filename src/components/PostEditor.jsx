import { useRef, useState, useMemo } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { useAddNoticeMutation } from '../redux/modules/workspaces';
import Editor from "./Editor";

const PostEditor = () =>{

    return(
        <StPostEditorContainer>
            <StInputTitle name='title' placeholder='제목'/>
            <Editor/>
        </StPostEditorContainer>
        )
    }

export default PostEditor;

const StPostEditorContainer = styled.div`
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










