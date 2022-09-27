import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {
  useGetMainWorkSpacesQuery,
  useGetDocQuery,
  useGetNoticeQuery,
} from '../../redux/modules/workspaces';
import BlackButton from '../../common/elements/BlackButton';
import InvitationCodeModal from '../../common/Modal/InvitationCodeModal';

export default function Home({ id, data, onDocumentHandle }) {
  const [invitationCodeOpen, setInvitationCodeOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const { data: docdata } = useGetDocQuery(id);
  const { data: noticedata } = useGetNoticeQuery(id);
  const firstNotice = noticedata?.data[0];
  const fourDocuments = docdata?.data?.slice(0, 4);

  const title = data?.data?.workspaces?.title;
  const content = data?.data.workspaces.content;

  const handleClose = () => {
    setInvitationCodeOpen(false);
  };
  const handleClick = () => {
    setInvitationCodeOpen(!invitationCodeOpen);
  };
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StIntroContainer>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <StTitle fc="#333333" fs="1.5rem">
            {title}
          </StTitle>
          <StContent>{content}</StContent>
        </div>
        <BlackButton text="초대코드 확인" onClick={handleClick} />
      </StIntroContainer>
      {invitationCodeOpen ? (
        <InvitationCodeModal onClose={handleClose} />
      ) : null}
      <div>
        <StNoticeWrapper>
          <StTitle style={{ marginBottom: '15px' }} fc="#333333" fs="20px">
            필독
          </StTitle>
          <StNoticeContainer>
            <StTitle style={{ marginBottom: '15px' }} fc="#00a99d" fs="20px">
              공지사항
            </StTitle>
            <StNoticeBox>
              <StTitle style={{ marginBottom: '15px' }} fc="#333333" fs="20px">
                {firstNotice !== undefined ? (
                  firstNotice?.title
                ) : (
                  <div>전달할 공지사항이 없습니다! 입력해보세요</div>
                )}
              </StTitle>
              <StNoticeContent>
                <div
                  dangerouslySetInnerHTML={{
                    __html: firstNotice && firstNotice.content,
                  }}
                />
              </StNoticeContent>
              <StInfoDiv>
                <span>
                  {firstNotice && firstNotice.nickname} &nbsp; &nbsp; &nbsp;
                  &nbsp;{' '}
                </span>
                <span>
                  {firstNotice && firstNotice.createdAt.slice(0, -13)}{' '}
                </span>
              </StInfoDiv>
            </StNoticeBox>
          </StNoticeContainer>
        </StNoticeWrapper>
      </div>
      <div>
        <StScheduleWrapper>
          <StScheduleTitle onClick={clickHandler} fc="#333333">
            문서 및 계획
          </StScheduleTitle>

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
                      // onClick={() => {
                      //   onDocumentHandle('detail', data.id);
                      // }}
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
        </StScheduleWrapper>
      </div>
    </>
  );
}

// 예시

const StIntroContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #c6c6c6;
`;

const StTitle = styled.span`
  color: ${(props) => props.fc};
  text-align: left;
  font-size: ${(props) => props.fs};
  font-weight: bold;
  letter-spacing: -1.5px;
`;

const StContent = styled.span`
  margin-top: 10px;
  color: #333333;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -1px;
`;

const StNoticeWrapper = styled.div`
  width: 94%;
  margin-left: 30px;
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

const StScheduleWrapper = styled.div`
  width: 94%;
  /* min-height: 100px; */
  margin-left: 30px;
  margin-top: 35px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

const StScheduleTitle = styled.span`
  color: ${(props) => props.fc};
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
>>>>>>> dev_1
`;
