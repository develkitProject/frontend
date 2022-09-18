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

import * as S from './style';

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
        <S.Wrapper>
            <Sidebar onClickMenu={onClickMenu} />
            <S.Projects>
                <SelectWorkspaceMenu />
            </S.Projects>
        </S.Wrapper>
    )
}