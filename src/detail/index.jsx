import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useGetMainWorkSpacesQuery } from '../redux/modules/workspaces';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
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

export default function WorkspaceDetailPage() {
  const { onClickMenu, menu } = useChangeMenu();
  const id = Number(useParams().id);
  const { data, isLoading, error } = useGetMainWorkSpacesQuery(id);
  const title = data?.data?.workspaces?.title;
  const [isOpen, setIsOpen] = useState(true);

  //---------------------------------------------------------------
  const [chatMessages, setChatMessages] = useState([]);
  const [users, setUsers] = useState(null);
  const sockJS = new SockJS('https://hosung.shop/stomp/chat');
  const stompClient = Stomp.over(sockJS);
  const messageBoxRef = useRef();

  const headers = {
    token: getCookieToken(),
  };

  useEffect(() => {
    messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
  }, [chatMessages]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  function onConnected() {
    try {
      stompClient.connect(headers, () => {
        stompClient.subscribe(
          `/sub/chat/room/${id}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            setChatMessages((chatMessages) => [...chatMessages, newMessage]);
            if (newMessage.type !== 'TALK') {
              setUsers(newMessage.userList);
            }
          },
          headers
        );
      });
    } catch (error) {
      console.log(error);
    }
  }
  const disConnect = () => {
    if (stompClient != null) {
      if (stompClient.connected) stompClient.disconnect();
    }
  };

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
      <Sidebar onClickMenu={onClickMenu} handleClick={handleClick} />
      <S.Projects>
        <SelectWorkspaceMenu id={id} data={data} />
      </S.Projects>

      {isOpen && (
        <Chatting
          id={id}
          title={title}
          stompClient={stompClient}
          chatMessages={chatMessages}
          headers={headers}
          users={users}
          onConnected={onConnected}
          disConnect={disConnect}
          messageBoxRef={messageBoxRef}
        ></Chatting>
      )}
    </S.Wrapper>
  );
}
