import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import Editor from '../../../components/Editor';
import {
  useGetDocDetailQuery,
  useUpdateDocMutation,
} from '../../../redux/modules/docs';

function DocsEdit({ stateId, onDocumentHandle, id }) {
  const docid = stateId;
  const nameInput = useRef();
  const { data } = useGetDocDetailQuery({
    workspaces: id,
    docid,
  });
  const document = data?.data;
  const [title, setTitle] = useState(document?.title);
  const [content, setContent] = useState(document?.content);
  const [editDoc] = useUpdateDocMutation();
  const [newFile, setNewFile] = useState([]);
  const files = document.fileNames;
  const urls = document.fileUrls;

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setNewFile([...newFile, file]);
  };

  const onDeleteFile = (name) => {
    setNewFile(newFile?.filter((file) => file.name !== name));
  };

  const onClickInput = () => {
    nameInput.current.click();
  };

  const nameUrl = files?.map((elem, idx) => {
    return { key_1: elem, key_2: urls[idx] };
  });
  const [prevFile, setPrevFile] = useState(nameUrl);
  const onDeleteName = (name) => {
    setPrevFile(prevFile?.filter((file) => file.key_1 !== name));
  };

  const handleSubmit = () => {
    if (title !== '' && content !== '') {
      const formData = new FormData();

      for (let i = 0; i < newFile.length; i++) {
        formData.append('files', newFile[i]);
      }
      formData.append('id', id);
      formData.append('docid', docid);
      const preFileUrls = prevFile?.map((a) => a.key_2);

      const data = {
        title,
        content,
        preFileUrls,
      };
      formData.append(
        'data',
        new Blob([JSON.stringify(data)], { type: 'application/json' }),
      );
      editDoc(formData);
      // eslint-disable-next-line no-alert
      window.alert('문서가 수정되었습니다');
      onDocumentHandle('list');
    } else {
      // eslint-disable-next-line no-alert
      window.alert('제목과 내용을 모두 채워주세요!');
    }
  };

  return (
    <StEditorContainer>
      <StInputTitle
        onChange={onTitleChange}
        name="title"
        placeholder="제목"
        value={title}
        maxLength={50}
      />
      <Editor value={content} setContent={setContent} />
      <EditorBlock>
        <div
          style={{
            // width: '50%',
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '30px 0px 0px 50px',
            }}
          >
            <button
              type="button"
              style={{
                width: '150px',
                height: '50px',
                fontWeight: '500',
              }}
              onClick={onClickInput}
            >
              파일업로드하기!
            </button>
            <span style={{ width: '150px', marginTop: '10px' }}>
              {' '}
              파일용량은 총 <br /> 30MB로 제한됩니다
            </span>
          </div>
          <input
            style={{ display: 'none' }}
            type="file"
            name="files"
            multiple="multiple"
            accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword,application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf, .hwp"
            onChange={onFileChange}
            ref={nameInput}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#00a99d',
            }}
          >
            {prevFile?.map((data, i) => {
              return (
                <div
                  key={i}
                  style={{
                    marginLeft: '20px',
                  }}
                >
                  {data.key_1}{' '}
                  <DeleteButton
                    onClick={() => {
                      onDeleteName(data?.key_1);
                    }}
                  >
                    x
                  </DeleteButton>
                </div>
              );
            })}
            {newFile?.map((data, i) => {
              return (
                <div
                  key={i}
                  style={{
                    marginLeft: '20px',
                    fontWeight: '500',
                  }}
                >
                  {data?.name}
                  <DeleteButton
                    onClick={() => {
                      onDeleteFile(data?.name);
                    }}
                  >
                    x
                  </DeleteButton>
                </div>
              );
            })}
          </div>
        </div>

        <StButton onClick={handleSubmit}>수정하기</StButton>
      </EditorBlock>
    </StEditorContainer>
  );
}
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

const DeleteButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 15px;
`;
