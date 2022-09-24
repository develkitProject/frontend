import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useLayoutEffect,
} from 'react';
import { useGetMainWorkSpacesQuery } from '../redux/modules/workspaces';
import { useGetMemberListQuery } from '../redux/modules/workspaces';
import useGetUser from '../common/hooks/useGetUser';
import { useParams, useNavigate } from 'react-router-dom';
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
import axios from 'axios';

export default function WorkspaceDetailPage() {
  const [auth, setAuth] = useState(false);
  const { onClickMenu, menu } = useChangeMenu();
  const navigate = useNavigate();
  const id = Number(useParams().id);
  const { data, isLoading } = useGetMainWorkSpacesQuery(id);
  const {
    data: data_1,
    isLoading: isLoading_1,
    error: error_1,
  } = useGetMemberListQuery(id);
  const title = data?.data?.workspaces?.title;
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useGetUser();
  const cookie = getCookieToken();
  // const spaceMembers = data_1?.data;
  // const loginUserName = user?.username;

  useEffect(() => {
    if (!cookie) {
      alert('로그인 해주세요!');
      navigate('/');
    }
  }, [cookie]);

  // useEffect(() => {
  //   if (spaceMembers && user) {
  //     const checkMember = spaceMembers?.some(
  //       (x) => x?.user?.username === loginUserName
  //     );
  //     setAuth(checkMember);
  //   }
  // }, [loginUserName, spaceMembers, user]);

  //---------------------------------------------------------------

  const sockJS = new SockJS('https://hosung.shop/stomp/chat');
  const stompClient = Stomp.over(sockJS);
  const messageBoxRef = useRef();

  const headers = {
    token: getCookieToken(),
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
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
      <Sidebar
        onClickMenu={onClickMenu}
        handleClick={handleClick}
        menu={menu}
      />
      <S.Projects>
        <SelectWorkspaceMenu
          id={id}
          data={data}
          user={user}
          data_1={data_1}
          error_1={error_1}
          isLoading_1={isLoading_1}
          // refetch={refetch}
        />
      </S.Projects>

      {isOpen && (
        <Chatting
          id={id}
          title={title}
          stompClient={stompClient}
          headers={headers}
          messageBoxRef={messageBoxRef}
          user={user}
        ></Chatting>
      )}
    </S.Wrapper>
  );
}
