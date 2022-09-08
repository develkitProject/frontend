import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import Notice from '../components/Notice';
import Schedule from '../components/Schedule';
import { useLocation, useParams } from 'react-router-dom';
import Chatting from '../components/Chatting';
import {
  useGetMainWorkSpacesQuery,
  useGetWorkspacesQuery,
} from '../redux/modules/workspaces';

function WorkSpaceDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { data, error, isLoading, refetch } = useGetMainWorkSpacesQuery(id);
  const title = data?.data.workspaces.title;
  const content = data?.data.workspaces.content;

  return (
    <StWrapper>
      <SideMenu />
      <Projects>
        <StIntroContainer>
          <div>
            <StTitle>{title}</StTitle>
            <StContent>{content}</StContent>
          </div>
          <StButton>팀원초대하기</StButton>
        </StIntroContainer>

        <div>
          <Notice />
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
  min-height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  position: fixed;
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
