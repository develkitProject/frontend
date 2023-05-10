import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {
  useGetMainWorkSpacesQuery,
  useGetMemberListQuery,
} from '../redux/modules/workspaces';
import useModalOverlay from '../account/signup/hooks/useModalOverlay';
import { useGetUserInfoQuery } from '../redux/modules/user';
import Sidebar from './components/Sidebar';
import useChangeMenu from './hooks/useChangeMenu';
import Home from './workspaces/Home';
import Notice from './workspaces/Notice';
import Document from './workspaces/Document';
import Schedule from './workspaces/Schedule';
import Contacts from './workspaces/Contacts';
import ProjectInfo from './workspaces/ProjectInfo';
import Chatting from '../components/Chatting';
import { getCookieToken } from '../Cookie';
import * as S from './style';

const headers = {
  token: getCookieToken(),
};

const sockJS = new SockJS(`${process.env.REACT_APP_BASE_URL}/stomp/chat`);
const stompClient = Stomp.over(sockJS);
stompClient.heartbeat.outgoing = 20000;
stompClient.heartbeat.incoming = 20000;
stompClient.connect(headers, () => {});

stompClient.debug = () => {};

export default function WorkspaceDetailPage() {
  const { onClickMenu, menu, tab, onDocumentHandle, setTab, stateId } =
    useChangeMenu();
  const navigate = useNavigate();
  const id = Number(useParams().id);
  const { data } = useGetMainWorkSpacesQuery(id);
  const {
    data: data_1,
    isLoading: isLoading_1,
    error: error_1,
  } = useGetMemberListQuery(id);
  const { isOpen, toggle } = useModalOverlay();
  const { data: userData } = useGetUserInfoQuery();
  const title = data?.data.workspaces.title;
  const cookie = getCookieToken();
  const user = userData?.data;

  useEffect(() => {
    if (!cookie) {
      alert('로그인 해주세요!');
      navigate('/');
    }
  }, [cookie, navigate]);

  const messageBoxRef = useRef();

  //---------------------------------------------------------------

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
      <Sidebar onClickMenu={onClickMenu} toggle={toggle} menu={menu} />
      <S.Projects>
        <SelectWorkspaceMenu
          id={id}
          user={user}
          data_1={data_1}
          error_1={error_1}
          isLoading_1={isLoading_1}
          tab={tab}
          setTab={setTab}
          stateId={stateId}
          onClickMenu={onClickMenu}
          onDocumentHandle={onDocumentHandle}
        />
      </S.Projects>

      {!isOpen && (
        <Chatting
          id={id}
          title={title}
          stompClient={stompClient}
          headers={headers}
          messageBoxRef={messageBoxRef}
          user={user}
        />
      )}
    </S.Wrapper>
  );
}
