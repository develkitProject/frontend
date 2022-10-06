import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import Editor from '../../../components/Editor';
import Circle from '../../../common/elements/Circle';
import { useAddDocMutation } from '../../../redux/modules/docs';
import { SweetAlertHook } from '../../../common/elements/SweetAlert';

function DocsWrite({ onDocumentHandle, id }) {
  const nameInput = useRef();

  const [addDoc, { isLoading }] = useAddDocMutation();
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
    if (file !== undefined) {
      setNewFile((newFile) => [...newFile, file]);
    }
  };

  const onDeleteFile = (name) => {
    setNewFile(newFile?.filter((file) => file.name !== name));
  };

  const handleSubmit = async () => {
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
        new Blob([JSON.stringify(data)], { type: 'application/json' }),
      );
      await addDoc(formData, id).then((res) => {
        if (res.data) {
          SweetAlertHook(2000, 'success', '문서가 등록되었습니다');
          onDocumentHandle('list');
        } else {
          window.alert('파일용량은 총 30MB를 넘을 수 없습니다!');
        }
      });
    } else {
      window.alert('제목과 내용을 모두 채워주세요!');
    }
  };

  if (isLoading)
    return (
      <Overlay>
        <Circle />
        <span style={{ color: 'white', fontSize: '20px', marginTop: '10px' }}>
          문서 업로드중입니다!
        </span>
      </Overlay>
    );
  return (
    <StEditorContainer>
      <StInputTitle
        type="text"
        onChange={onTitleChange}
        name="title"
        placeholder="제목 (50글자내로 작성해주세요)"
        maxLength={50}
        value={title}
      />
      <Editor value={content} setContent={setContent} />
      <EditorBlock>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '30px 0px 0px 0px',
              width: '93%',
              marginBottom: '10px',
            }}
          >
            <button
              type="button"
              style={{
                width: '17%',
                height: '40px',
                fontWeight: '500',
                background: '#D9D9D9',
                cursor: 'pointer',
                border: '1px solid #424242',
              }}
              onClick={onClickInput}
            >
              파일업로드
            </button>
            <button
              type="button"
              style={{
                color: '#424242',
                width: '68%',
                height: '40px',
                fontWeight: '500',
                background: 'white',
                border: '1px solid #424242',
                textAlign: 'left',
                paddingLeft: '20px',
              }}
            >
              파일 개수의 제한은 없으나 전체 파일 용량은 총 30MB로 제한됩니다.
            </button>
            <button
              type="button"
              style={{
                width: '7%',
                height: '40px',
                fontWeight: '500',
                background: '#00A99D',
                cursor: 'pointer',
                border: '1px solid #424242',
              }}
              onClick={onClickInput}
            >
              ➕
            </button>
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
              width: '88%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              color: '#00a99d',
              textAlign: 'left',
            }}
          >
            {newFile?.map((a, i) => {
              return (
                <div
                  key={i}
                  style={{
                    marginLeft: '20px',
                    fontWeight: '500',
                  }}
                >
                  {a?.name}
                  <DeleteButton
                    onClick={() => {
                      onDeleteFile(a?.name);
                    }}
                  >
                    x
                  </DeleteButton>
                </div>
              );
            })}
          </div>
        </div>
        <StButton onClick={handleSubmit}>게시하기</StButton>
      </EditorBlock>
    </StEditorContainer>
  );
}
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
  margin-top: 40px;
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

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
