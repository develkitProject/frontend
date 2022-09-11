import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import Notice from '../notice/Notice';
import Schedule from '../components/Schedule';
import { useLocation, useParams } from 'react-router-dom';
import Chatting from '../components/Chatting';
import {
  useGetMainWorkSpacesQuery,
  useGetWorkspacesQuery,
} from '../redux/modules/workspaces';
import { useEffect } from 'react';

function WorkSpaceDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { data, error, isLoading, refetch } = useGetMainWorkSpacesQuery(id);
  console.log(data?.data?.notices);
  const title = data?.data?.workspaces?.title;
  const content = data?.data.workspaces.content;
  const noticeTitle = data?.data.notices.title;
  const noticeContent = data?.data.notices.content;
  const noticeNickname = data?.data.notices.nickname;
  const noticeDate = data?.data.notices.createdAt;

  console.log(data);

  return (
    <StWrapper>
      <SideMenu />
      <Projects>
        <StIntroContainer>
          <div>
            <StTitle fc='#333333' fs='1.5rem'>
              {title}
            </StTitle>
            <StContent>{content}</StContent>
          </div>
          <StButton>팀원 초대하기</StButton>
        </StIntroContainer>
        <div>
          <StNoticeWrapper>
            <StTitle style={{ marginBottom: '15px' }} fc='#333333' fs='20px'>
              필독
            </StTitle>
            <StNoticeContainer>
              <StTitle style={{ marginBottom: '15px' }} fc='#00a99d' fs='20px'>
                공지사항
              </StTitle>
              <StNoticeBox>
                <StTitle
                  style={{ marginBottom: '15px' }}
                  fc='#333333'
                  fs='20px'
                >
                  {noticeTitle}
                </StTitle>
                <StNoticeContent> {noticeContent}</StNoticeContent>
                <StInfoDiv>
                  <p>{noticeNickname} ｜</p>
                  <p>{noticeDate} ｜</p>
                  <p>읽음 7 </p>
                </StInfoDiv>
              </StNoticeBox>
            </StNoticeContainer>
          </StNoticeWrapper>
        </div>
        <div>
          <Schedule />
        </div>
      </Projects>
      <Chatting title={title}></Chatting>
    </StWrapper>
  );
}

export default WorkSpaceDetail;

const StWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const Projects = styled.div`
  width: 65%;
  margin-left: 2%;
  margin-top: 4%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

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

const StTitle = styled.p`
  color: ${(props) => props.fc};
  text-align: left;
  font-size: ${(props) => props.fs};
  font-weight: bold;
  letter-spacing: -1.5px;
`;

const StContent = styled.p`
  margin-top: 10px;
  color: #333333;
  text-align: left;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: -1px;
`;

const StNoticeWrapper = styled.div`
  width: 96%;
  margin-left: 2%;
  margin-top: 3%;
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
  min-height: 5vh;
  max-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 18px;
  line-height: 1.5rem;
  font-weight: 500;
  white-space: pre-wrap;
`;

const StInfoDiv = styled.div`
  margin-top: 1%;
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
