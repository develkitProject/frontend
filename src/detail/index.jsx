import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import useChangeMenu from './hooks/useChangeMenu';
import Home from './workspaces/Home';
import Notice from './workspaces/Notice';
import Document from './workspaces/Document';
import Schedule from './workspaces/Schedule';
import Contacts from './workspaces/Contacts';
import ProjectInfo from './workspaces/ProjectInfo';

export default function WorkspaceDetailPage() {
    const { onClickMenu, menu } = useChangeMenu();

    const SelectWorkspaceMenu = {
        home: Home,
        notice: Notice,
        document: Document,
        schedule: Schedule,
        contacts: Contacts,
        projectInfo: ProjectInfo,
    }[menu]

    return (
        <StWrapper>
            <Sidebar onClickMenu={onClickMenu} />
            <Projects>
                <SelectWorkspaceMenu />
            </Projects>
        </StWrapper>
    )
}

const StWrapper = styled.section`
  width: 100%;
  height: 100vh;
  /* min-height: 100%; */
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const Projects = styled.div`
  width: 65%;
  min-height: 90%;
  margin-left: 50px;
  margin-top: 60px;
  margin-bottom: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
`;