import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import { useParams } from 'react-router-dom';
import { useGetMainWorkSpacesQuery } from '../redux/modules/workspaces';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoticeWrite from '../notice/NoticeWrite';

function DocsWritePage() {

  return (
    <StWrapper>
      <SideMenu />
      <Projects>
        <NoticeWrite/>
      </Projects>
    </StWrapper>
  );
}

export default DocsWritePage;

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

