import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import Notice from './Notice';
import { useParams } from 'react-router-dom';
import { useGetMainWorkSpacesQuery } from '../redux/modules/workspaces';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackButton from '../common/elements/BlackButton';

function NoticePage() {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);

  const handleClick = () => {
    navigate(`/workspace/main/${id}/notice/write`);
  };

  return (
    <StWrapper>
      <SideMenu />
      <Projects>
        <StIntroContainer>
          <div>
            <StTitle>공지사항</StTitle>
            <StContent>프로젝트 관련 주요 공지사항입니다</StContent>
          </div>
          <BlackButton text='글쓰기' onClick={handleClick}></BlackButton>
        </StIntroContainer>
        <div>
          <Notice />
        </div>
      </Projects>
    </StWrapper>
  );
}

export default NoticePage;

const StWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const Projects = styled.div`
  width: 65%;
  min-height: 90vh;
  margin-left: 50px;
  margin-top: 60px;
  margin-bottom: 40px;
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

const StTitle = styled.p`
  color: #333333;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.5px;
`;

const StContent = styled.p`
  margin-top: 10px;
  color: #333333;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -1px;
`;
