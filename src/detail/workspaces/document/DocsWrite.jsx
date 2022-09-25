import styled from 'styled-components';
import React, { useState, useReducer, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../../../components/Editor';
import { useAddDocMutation } from '../../../redux/modules/workspaces';

const DocsWrite = ({ onDocumentHandle }) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  const nameInput = useRef();

  const [addDoc] = useAddDocMutation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [newFile, setNewFile] = useState([]);

  const onClickInput = () => {
    nameInput.current.click();
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setNewFile([...newFile, file]);
  };

  const handleSubmit = () => {
    if (title !== '' && content !== '') {
      const formData = new FormData();
      const data = {
        title,
        content,
      };
      for (let i = 0; i < newFile.length; i++) {
        formData.append('files', newFile[i]);
      }
      formData.append('id', id);
      formData.append(
        'data',
        new Blob([JSON.stringify(data)], { type: 'application/json' })
      );
      addDoc(formData, id);
      window.alert('문서가 등록되었습니다');
      onDocumentHandle('list');
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
      <Editor value={content} setContent={setContent} />
      <EditorBlock>
        <div
          style={{
            // width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              width: '100px',
              height: '50px',
              // border: '1px solid black',
              fontWeight: '500',
              marginRight: '50px',
            }}
            onClick={onClickInput}
          >
            파일업로드
          </button>
          <input
            style={{ display: 'none' }}
            type='file'
            name='files'
            multiple='multiple'
            accept='application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword,application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf, .hwp'
            onChange={onFileChange}
            ref={nameInput}
          ></input>
          <div style={{ display: 'flex' }}>
            파일 :
            {newFile.map((a, i) => {
              return <div key={i}>{a?.name} &nbsp; &nbsp; &nbsp;</div>;
            })}
          </div>
        </div>
        <StButton onClick={handleSubmit}>게시하기</StButton>
      </EditorBlock>
    </StEditorContainer>
  );
};
export default DocsWrite;

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
