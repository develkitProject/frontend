import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useGetDocQuery } from '../../redux/modules/docs';
import { useGetMainWorkSpacesQuery } from '../../redux/modules/workspaces';
import BlackButton from '../../common/elements/BlackButton';
import InvitationCodeModal from '../../common/modal/InvitationCodeModal';
import { StContent, StIntroContainer, StTitle } from '../style';

export default function Home({ id, onClickMenu }) {
  const [invitationCodeOpen, setInvitationCodeOpen] = useState(false);
  const { data, isLoading, refetch } = useGetMainWorkSpacesQuery(id);
  const { data: docdata } = useGetDocQuery(id);
  const [prevNotice, setPrevNotice] = useState(null);
  const firstNotice = data?.data.notices;
  const fourDocuments = docdata?.data?.slice(0, 4);
  const title = data?.data?.workspaces?.title;
  const content = data?.data.workspaces.content;

  // console.log(data);
  useEffect(() => {
    refetch();
  }, [data]);

  const handleClose = () => {
    setInvitationCodeOpen(false);
  };
  const handleClick = () => {
    setInvitationCodeOpen(!invitationCodeOpen);
  };

  return (
    <>
      <StIntroContainer>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <StTitle style={{ color: '#333333', fontSize: '1.5rem' }}>
            {title}
          </StTitle>
          <StContent>{content}</StContent>
        </div>
        <BlackButton text="초대코드 확인" onClick={handleClick} />
      </StIntroContainer>
      {invitationCodeOpen ? (
        <InvitationCodeModal onClose={handleClose} />
      ) : null}
      <StWrapper>
        <StNoticeWrapper>
          <StTitle
            style={{ marginBottom: '15px', color: '#333333', fontSize: '20px' }}
          >
            필독
          </StTitle>
          <StNoticeContainer>
            <StTitle
              style={{
                marginBottom: '15px',
                color: '#00a99d',
                fontSize: '20px',
              }}
            >
              공지사항
            </StTitle>
            <StNoticeBox>
              <StTitle
                style={{
                  marginBottom: '15px',
                  color: '#333333',
                  fontSize: '20px',
                }}
              >
                {firstNotice !== null ? (
                  firstNotice?.title
                ) : (
                  <div>전달할 공지사항이 없습니다! 입력해보세요</div>
                )}
              </StTitle>
              <StNoticeContent>
                <div
                  dangerouslySetInnerHTML={{
                    __html: firstNotice && firstNotice?.content,
                  }}
                />
              </StNoticeContent>
              <StInfoDiv>
                <span>
                  {firstNotice && firstNotice.createdAt.slice(0, -13)}{' '}
                </span>
                <span>
                  {firstNotice && firstNotice.nickname} &nbsp; &nbsp; &nbsp;
                  &nbsp;{' '}
                </span>
              </StInfoDiv>
            </StNoticeBox>
          </StNoticeContainer>
        </StNoticeWrapper>

        <StDocumentWrapper>
          <StDocumentTitle fontColor="#333333">문서 및 계획</StDocumentTitle>
          <StTableContainer>
            <StThead>
              <StTable style={{ height: '50px', borderBottom: 'none' }}>
                <div>담당자</div>
                <div>문서제목</div>
                <div>작성자</div>
                <div>등록일</div>
                <div>수정일</div>
              </StTable>
            </StThead>
            <StTbody>
              {fourDocuments?.length !== 0 ? (
                fourDocuments?.map((data) => {
                  return (
                    <StTable
                      key={data.id}
                      onClick={onClickMenu({
                        key: 'document',
                        tab: 'detail',
                        docsId: data.id,
                      })}
                    >
                      <StDataDiv>{data.nickname}</StDataDiv>
                      <StDataDiv>{data.title}</StDataDiv>
                      <StDataDiv>{data.nickname}</StDataDiv>
                      <StDataDiv>{data.createdAt.split(' ')[0]}</StDataDiv>
                      <StDataDiv>{data.modifiedAt.split(' ')[0]}</StDataDiv>
                    </StTable>
                  );
                })
              ) : (
                <span style={{ fontSize: '20px' }}>문서를 입력해보세요</span>
              )}
            </StTbody>
          </StTableContainer>
        </StDocumentWrapper>
      </StWrapper>
    </>
  );
}

const StWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StNoticeWrapper = styled.div`
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

const StNoticeContainer = styled.div`
  padding: 5%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #eef8f8;
  margin-top: 10px;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.1);
`;

const StNoticeBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StNoticeContent = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 18px;
  line-height: 1.5rem;
  font-weight: 500;
  white-space: pre-wrap;
`;

const StInfoDiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: left;
  color: #999999;
  font-size: 16px;
  letter-spacing: -0.8px;
  font-weight: 500;
  font-size: 0.9rem;
  margin-top: 15px;
`;

const StDocumentWrapper = styled.div`
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 35px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

const StDocumentTitle = styled.span`
  color: ${(props) => props.fontColor};
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -1.2px;
`;

const StTableContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  min-height: 50px;
  align-items: left;
`;

const StTable = styled.div`
  grid-template-columns: 1fr 4fr 1fr 2fr 2fr;
  display: grid;
  border-bottom: 1px solid #c6c6c6;
`;

const StDataDiv = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StThead = styled.div`
  background-color: #00a99d;
  border-radius: 8px;
  color: white;
  align-items: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const StTbody = styled.div`
  color: #333333;
  align-items: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  text-align: center;
  margin-bottom: 10px;
`;
