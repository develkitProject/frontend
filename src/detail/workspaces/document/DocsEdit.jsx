import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import Editor from '../../../components/Editor';
import { Overlay } from './DocsWrite';
import Circle from '../../../common/elements/Circle';
import {
  useGetDocDetailQuery,
  useUpdateDocMutation,
} from '../../../redux/modules/docs';
import { SweetAlertHook } from '../../../common/elements/SweetAlert';
import { SweetAlertOk } from '../../../common/elements/SweetAlertOk';

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
  const [editDoc, { isLoading }] = useUpdateDocMutation();
  const [newFile, setNewFile] = useState([]);
  const files = document.fileNames;
  const urls = document.fileUrls;

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
      editDoc(formData).then((res) => {
        if (res.data) {
          SweetAlertHook(2000, 'success', '????????? ?????????????????????');
          onDocumentHandle('list');
        } else {
          window.alert('??????????????? ??? 30MB??? ?????? ??? ????????????!');
        }
      });
    } else {
      SweetAlertOk('error', '????????? ????????? ?????? ???????????????!');
    }
  };
  if (isLoading)
    return (
      <Overlay>
        <Circle />
        <span style={{ color: 'white', fontSize: '20px', marginTop: '10px' }}>
          ?????? ?????????????????????!
        </span>
      </Overlay>
    );
  return (
    <StEditorContainer>
      <StInputTitle
        onChange={onTitleChange}
        name="title"
        placeholder="??????"
        value={title}
        maxLength={50}
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
              ???????????????
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
              ?????? ????????? ????????? ????????? ?????? ?????? ????????? ??? 30MB??? ???????????????. (
              xls, doc, ppt, pdf, hwp)
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
              ???
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

        <StButton onClick={handleSubmit}>????????????</StButton>
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
