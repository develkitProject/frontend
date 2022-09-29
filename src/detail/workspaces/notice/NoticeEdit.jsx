import styled from 'styled-components';
import React, { useState, useReducer } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import NoticeEditor from './NoticeEditor';
import {
  useGetNoticeQuery,
  useUpdateNoticeMutation,
} from '../../../redux/modules/workspaces';

function NoticeEdit({ stateId, onNoticeHandle }) {
  const params = useParams();
  const id = Number(params.id);
  const { data, error, isLoading } = useGetNoticeQuery(id);
  const noticeData = data?.data.filter((x) => x.id === stateId);

  const [title, setTitle] = useState(noticeData[0].title);
  const [content, setContent] = useState(noticeData[0].content);
  const [editNotice] = useUpdateNoticeMutation();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (title !== '' && content !== '') {
      const notice = {
        id,
        stateId,
        title,
        content,
      };
      editNotice(notice);
      window.alert('공지사항이 수정되었습니다');
      onNoticeHandle('list');
    } else {
      window.alert('제목과 내용을 모두 채워주세요!');
    }
  };

  return (
    <StEditorContainer>
      <StInputTitle
        onChange={onTitleChange}
        name="title"
        value={title}
        maxLength={50}
      />
      <NoticeEditor value={content} setContent={setContent} />
      <EditorBlock>
        <StButton onClick={handleSubmit}>수정하기</StButton>
      </EditorBlock>
    </StEditorContainer>
  );
}
export default NoticeEdit;

const StEditorContainer = styled.div`
  margin: 2%;
  width: 100%;
  min-height: 60%;
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

const EditorBlock = styled.div`
  margin-top: 60px;
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
  margin-top: 20px;
`;
