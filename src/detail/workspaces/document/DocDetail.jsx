/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import { useState } from 'react';
import {
  useDeleteDocMutation,
  useGetDocDetailQuery,
} from '../../../redux/modules/docs';
import { useGetUserInfoQuery } from '../../../redux/modules/user';
import BlackButton from '../../../common/elements/BlackButton';
import { SweetAlertHook } from '../../../common/elements/SweetAlert';
import { SweetAlertConfirmHook } from '../../../common/elements/SweetAlertConfirm';
import DocsEdit from './DocsEdit';

function DocDetail({ stateId, onDocumentHandle, id }) {
  const docid = stateId;
  const { data } = useGetDocDetailQuery({
    workspaces: id,
    docid,
  });
  const { data: userData } = useGetUserInfoQuery();
  const document = data?.data;
  const readMember = data?.data.readMember;
  const files = data?.data.fileNames;
  const urls = data?.data.fileUrls;
  const userNickname = userData?.data.nickname;
  const createUsername = document?.nickname;

  const [deleteDocument] = useDeleteDocMutation();

  const onDeleteDoc = () => {
    deleteDocument({ workspaces: id, docid });
    onDocumentHandle('list');
    SweetAlertHook(2000, 'success', '문서가 삭제되었습니다!');
  };

  const deleteDoc = () => {
    // eslint-disable-next-line no-empty
    if (SweetAlertConfirmHook('정말 문서를 삭제하시겠습니까?', onDeleteDoc)) {
    }
  };

  const nameUrl = files?.map((elem, idx) => {
    return { key_1: elem, key_2: urls[idx] };
  });

  const [tab, setTab] = useState(1);

  const onDetailHandle = () => {
    setTab(1);
  };

  return (
    <StWrapper>
      <DocContainer>
        {tab === 1 ? (
          <>
            <Projects>
              <StIntroContainer>
                <StTitle>{document?.title}</StTitle>
                <StInfoContainer>
                  <StNickname>{document?.nickname} </StNickname>
                  <StVerticalBar>|</StVerticalBar>
                  <StDetail>{document?.createdAt.slice(0, -7)}</StDetail>
                  <StVerticalBar>|</StVerticalBar>
                  <StDetail
                    onClick={() => {
                      onDocumentHandle('edit', docid);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    수정
                  </StDetail>
                  {userNickname === createUsername ? (
                    <>
                      <StVerticalBar>|</StVerticalBar>
                      <StDetail
                        onClick={deleteDoc}
                        style={{ cursor: 'pointer' }}
                      >
                        삭제
                      </StDetail>
                    </>
                  ) : null}
                </StInfoContainer>
                <FileDiv>
                  <StDetail
                    style={{
                      color: 'black',
                      marginLeft: '-5px',
                    }}
                  >
                    첨부파일:{' '}
                  </StDetail>

                  {files?.length === 0 ? (
                    <FileName
                      style={{
                        color: 'black',
                        cursor: 'auto',
                        marginLeft: '10px',
                      }}
                    >
                      첨부파일이 없습니다.
                    </FileName>
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {nameUrl?.map((file, i) => {
                        return (
                          <div
                            key={i}
                            style={{
                              overflow: 'hidden',
                              width: '240px',
                              textOverflow: 'ellipsis',
                              wordWrap: 'break-word',
                            }}
                          >
                            <FileName
                              href={file.key_2}
                              target="_blank"
                              download={file.key_1}
                              style={{ marginLeft: '10px' }}
                            >
                              {file.key_1}
                            </FileName>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </FileDiv>
              </StIntroContainer>
              <StContentContainer>
                <StContent>
                  <div
                    dangerouslySetInnerHTML={{ __html: document?.content }}
                  />
                </StContent>
              </StContentContainer>
              <StFooterContainer>
                <StInfoContainer style={{ justifyContent: 'space-between' }}>
                  <StDetail
                    style={{
                      width: '85%',
                      marginTop: '10px',
                    }}
                  >
                    <span>읽음 &nbsp;:</span>
                    {readMember?.map((members, i) => {
                      return <span key={i}>&nbsp;{members}&nbsp;</span>;
                    })}
                  </StDetail>

                  <StSideMent>
                    <StDetail
                      onClick={() => {
                        onDocumentHandle('edit', docid);
                      }}
                      style={{ color: '#00A99D', fontWeight: '500' }}
                    >
                      수정
                    </StDetail>
                    {userNickname === createUsername ? (
                      <>
                        <StVerticalBar>|</StVerticalBar>
                        <StDetail
                          onClick={deleteDoc}
                          style={{ cursor: 'pointer' }}
                        >
                          삭제
                        </StDetail>
                      </>
                    ) : null}
                  </StSideMent>
                </StInfoContainer>

                <div style={{ height: '20px' }} />
                <div style={{ width: '100%' }}>
                  <StDetail>
                    {document?.modifyMember == null ? null : (
                      <>
                        최종 수정일 &nbsp;:&nbsp; &nbsp;
                        {document?.modifiedAt.slice(0, -7)}
                        &nbsp;&nbsp;(수정자: {document?.modifyMember})
                      </>
                    )}
                  </StDetail>
                </div>
              </StFooterContainer>
            </Projects>
          </>
        ) : tab === 2 ? (
          <div>
            <Projects>
              <StEditIntroContainer>
                <div>
                  <StTitle>문서 수정</StTitle>
                  <StContent>게시글 및 파일 수정</StContent>
                </div>
                <BlackButton
                  text="게시글로 돌아가기"
                  onClick={onDetailHandle}
                />
              </StEditIntroContainer>
              <DocsEdit />
            </Projects>
          </div>
        ) : null}
      </DocContainer>
    </StWrapper>
  );
}

export default DocDetail;

const StWrapper = styled.div`
  width: 96%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const DocContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Projects = styled.div`
  width: 100%;
  min-height: 60vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StIntroContainer = styled.div`
  margin: 60px 40px;
  min-height: 12vh;
  display: flex;
  flex-direction: column;
`;

const StTitle = styled.span`
  margin: 20px;
  color: #000000;
  align-self: left;
  font-size: 30px;
  text-align: center;
  font-weight: 500;
  letter-spacing: -0.05em;
`;

const StInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
`;

const StNickname = styled.div`
  margin-left: 2px;
  font-size: 18px;
  color: #000000;
  letter-spacing: -0.05em;
  font-weight: 500;
`;

const StVerticalBar = styled.div`
  margin-left: 10px;
  font-size: 12px;
  color: #c6c6c6;
  letter-spacing: -0.05em;
  font-weight: 200;
`;

const StDetail = styled.div`
  margin-left: 10px;
  font-size: 18px;
  color: #b4b4b4;
  letter-spacing: -0.05em;
  font-weight: 400;
`;

const StContentContainer = styled.div`
  margin-left: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StContent = styled.span`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #000000;
  text-align: left;
  font-weight: 400;
  letter-spacing: -0.05em;
  overflow: hidden;
  min-height: 400px;
`;

const StFooterContainer = styled.div`
  margin: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid 1px #c6c6c6;
`;

const StSideMent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: flex-end;
  font-weight: 600;
  cursor: pointer;
`;

const StEditIntroContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FileName = styled.a`
  color: #00a99d;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
`;

const FileDiv = styled.div`
  display: flex;
  background-color: #eef8f8;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  overflow: hidden;
  text-overflow: break-word;
  white-space: nowrap;
`;
