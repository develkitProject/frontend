import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetMainWorkSpacesQuery } from '../redux/modules/workspaces';
import SideMenu from '../components/SideMenu';
import Board from './Board';
import BlackButton from '../common/elements/BlackButton';

function Docs() {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);

  const handleClick = () => {
    navigate(`/workspace/main/${id}/docs/write`);
  };

  return (
    <StWrapper>
      <SideMenu />
      <Projects>
        <StIntroContainer>
          <div>
            <StTitle>문서</StTitle>
            <StContent>프로젝트 관련 일일보고 및 계획 등</StContent>
          </div>
          <BlackButton text="글쓰기" onClick={handleClick} />
        </StIntroContainer>
        <div>
          <Board />
        </div>
      </Projects>
    </StWrapper>
  );
}

export default Docs;

const StWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const Projects = styled.div`
  width: 65%;
  min-height: 50vh;
  margin-left: 50px;
  margin-top: 4%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 40px;
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
  font-size: 1.5rem;
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
