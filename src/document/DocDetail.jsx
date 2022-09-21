import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SideMenu from '../components/SideMenu';
import { useGetDocDetailQuery } from '../redux/modules/workspaces';
import Board from './Board';

function DocDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const workspaces = Number(params.id);
  const docid = Number(params.docid);
  const { data, error, isLoading, refetch } = useGetDocDetailQuery({
    workspaces,
    docid,
  });
  const document = data?.data;
  console.log(data);

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  return (
    <StWrapper>
      <SideMenu />
      <DocContainer>
        <Projects>
          <StIntroContainer>
            <StIntroMent>프로젝트 관련 주요 문서 및 파일</StIntroMent>
            <StTitle>{document?.title}</StTitle>
            <StInfoContainer>
              <StProfileImg>{document?.profileImg}</StProfileImg>
              <StNickname>{document?.nickname} </StNickname>
              <StVerticalBar>|</StVerticalBar>
              <StDetail>{document?.createdAt.slice(0, -7)}</StDetail>
              <StVerticalBar>|</StVerticalBar>
              <StDetail>수정</StDetail>
              <StVerticalBar>|</StVerticalBar>
              <StDetail>삭제</StDetail>
            </StInfoContainer>
          </StIntroContainer>
          <StContentContainer>
            <StContent>
              <div dangerouslySetInnerHTML={{ __html: document?.content }} />
            </StContent>
          </StContentContainer>
          <StFooterContainer />
        </Projects>
        <BoardContainer>
          <Board />
        </BoardContainer>
      </DocContainer>
    </StWrapper>
  );
}

export default DocDetail;

const StWrapper = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const DocContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
`;

const Projects = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-left: 50px;
  margin-top: 45px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 30px;
`;

const StIntroContainer = styled.div`
  margin: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #c6c6c6;
`;

const StIntroMent = styled.div`
  margin: 10px;
  font-size: 16px;
  color: #c6c6c6;
  letter-spacing: -0.05em;
  align-self: center;
`;

const StTitle = styled.p`
  margin: 20px;
  color: #000000;
  align-self: left;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: -0.05em;
`;

const StInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
`;

const StProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 70%;
  margin: 0 10px 0px 20px;
  background-color: black;
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

const BoardContainer = styled.div`
  margin-left: 50px;
`;

const StFooterContainer = styled.div`
  margin: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid 1px #c6c6c6;
`;
