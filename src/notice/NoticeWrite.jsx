import styled from 'styled-components';
import React, { useState, useReducer } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAddNoticeMutation } from '../redux/modules/workspaces';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';


const NoticeWrite = ()=>{
 const navigate = useNavigate();
 const params = useParams();
 const id = Number(params.id);

 const [addNotice] = useAddNoticeMutation();
 const [title, setTitle] = useState('')
 const [content, setContent] = useState('')
    
 const onTitleChange = (e) => {
      setTitle(e.target.value);
 };

 const handleSubmit = () => {
      
 if (title !== '' && content !== '') {
    const notice = {
          id,
          title,
          content,
    };
      addNotice(notice);
      window.alert('공지사항이 등록되었습니다');

      //바로 업데이트가 되는 줄 알았는데 안되고 있습니다! 이유가 뭘까요?
      
      navigate(`/workspace/main/${id}/notice`);

      } else {
        window.alert('제목과 내용을 모두 채워주세요!');
      }
    };
    
return(
      <StEditorContainer>
       <StInputTitle onChange={onTitleChange} name='title' placeholder='제목' value={title}/>
            <Editor setCon={setContent}/>
            {/* <StInputContent onChange={onChange} name='content' placeholder='내용'/> */}
            <EditorBlock>
              <StButton onClick={handleSubmit}>게시하기</StButton>
            </EditorBlock>
        </StEditorContainer>
    )}
export default NoticeWrite


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
  border: 1px solid #c6c6c6;
  :focus {
    outline: 1px solid #00a99d;
  }
`;

const StInputContent = styled.textarea`
 margin-bottom: 2%;
 width: 94%;
 height: 450px;
 padding: 5px;
 padding-left: 15px;
 font-size: 20px;
 border-radius: 4px;
 border: 1px solid #C6C6C6;
 :focus{outline: 1px solid #00A99D}
 margin-bottom: 3rem;
 white-space:pre-wrap;
`;

const EditorBlock = styled.div`
 padding-bottom: 1rem;
 align-items: center;
 text-align: center;
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

