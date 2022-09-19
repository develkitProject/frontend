import React, { useState } from 'react';
import { useGetMainWorkSpacesQuery } from '../redux/modules/workspaces';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import useChangeMenu from './hooks/useChangeMenu';
import Home from './workspaces/Home';
import Notice from './workspaces/Notice';
import Document from './workspaces/Document';
import Schedule from './workspaces/Schedule';
import Contacts from './workspaces/Contacts';
import ProjectInfo from './workspaces/ProjectInfo';
import Chatting from '../components/Chatting';
import * as S from './style';

export default function WorkspaceDetailPage() {
  const { onClickMenu, menu } = useChangeMenu();
  const id = Number(useParams().id);

  const SelectWorkspaceMenu = {
    home: Home,
    notice: Notice,
    document: Document,
    schedule: Schedule,
    contacts: Contacts,
    projectInfo: ProjectInfo,
  }[menu];

  return (
    <S.Wrapper>
      <Sidebar onClickMenu={onClickMenu} />
      <S.Projects>
        <SelectWorkspaceMenu id={id} />
      </S.Projects>
      <Chatting id={id}></Chatting>
    </S.Wrapper>
  );
}
