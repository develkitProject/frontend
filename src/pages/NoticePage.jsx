import styled from 'styled-components';
import SideMenu from '../components/SideMenu'
import Notice from '../components/Notice';
import { useParams } from 'react-router-dom';
import { useGetMainWorkSpacesQuery } from '../redux/modules/workspaces';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NoticePage() {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  
  // const workspaces = data?.data?.workSpaces;
  // useEffect(() => {
  //   refetch();
  // }, [data]);

  return (
    <StWrapper>
      <SideMenu />
      <Projects>
        <StIntroContainer>
          <div>
            <StTitle>공지사항</StTitle>
            <StContent>공지사항 필독 부탁드립니다.</StContent>
          </div>
          <StButton onClick={()=>{navigate(`/workspace/main/${id}/notice/write`)}}>글쓰기</StButton>
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
  /* letter-spacing: -1px; */
  cursor: pointer;
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
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: -1px;
`;
