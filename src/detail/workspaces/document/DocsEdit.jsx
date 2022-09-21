import styled from 'styled-components';
import React, { useState, useReducer } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../../../components/Editor';
import {
  useGetDocDetailQuery,
  useUpdateDocMutation,
} from '../../../redux/modules/workspaces';

const DocsEdit = ({ stateId, onListHandle }) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  const docid = stateId;

  const [editInfo, setEditInfo] = useState({
    title: '',
    content: '',
  });

  const { data, error, isLoading, refetch } = useGetDocDetailQuery({
    workspaces: id,
    docid,
  });
  const document = data?.data;

  const [title, setTitle] = useState(document?.title);
  const [content, setContent] = useState(document?.content);

  const [editDoc] = useUpdateDocMutation();
  const [newFile, setNewFile] = useState([]);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setNewFile(file);
    console.log(newFile);
  };

  const handleSubmit = () => {
    if (title !== '' && content !== '') {
      const formData = new FormData();
      formData.append('fileKey', newFile[0]);

      const document = {
        id,
        docid,
        title,
        content,
        formData,
      };
      editDoc(document);
      window.alert('문서가 수정되었습니다');
      onListHandle();
    } else {
      window.alert('제목과 내용을 모두 채워주세요!');
    }
  };

  return (
    <StEditorContainer>
      <StInputTitle
        onChange={onTitleChange}
        name='title'
        placeholder='제목'
        value={title}
      />
      <Editor value={content} setCon={setContent} />
      <EditorBlock>
        <div>
          <input
            type='file'
            name='file'
            accept='application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword,application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf, .hwp'
            onChange={onFileChange}
          ></input>
        </div>
        <StButton onClick={handleSubmit}>수정하기</StButton>
      </EditorBlock>
    </StEditorContainer>
  );
};
export default DocsEdit;

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
