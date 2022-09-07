import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import Notice from '../components/Notice';
import { useParams } from 'react-router-dom';
import { useGetMainWorkSpacesQuery } from '../redux/modules/workspaces';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../components/Editor';

function NoticeWrite() {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  
  // let { workspaceId } = useParams();
  // console.log(workspaceId);

  const { data, error, isLoading, refetch } = useGetMainWorkSpacesQuery(id);

  // const workspaces = data?.data?.workSpaces;
  // useEffect(() => {
  //   refetch();
  // }, [data]);

  return (
    <StWrapper>
      <SideMenu />
      <Projects>
        <Editor/>
      </Projects>
    </StWrapper>
  );
}

export default NoticeWrite;

const StWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const Projects = styled.div`
  width: 65%;
  min-height: 100%;
  margin-left: 2%;
  margin-top: 4%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

