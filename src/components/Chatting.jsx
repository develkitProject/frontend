import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import Draggable from 'react-draggable';

export default function Chatting({ title }) {
  const client = useRef({});
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   connect();

  //   return () => disconnect();
  // }, []);

  // const connect = () => {
  //   client.current = new Stomp.Client({
  //     // brokerURL: "ws://localhost:8080/ws-stomp/websocket", // 웹소켓 서버로 직접 접속
  //     webSocketFactory: () => new SockJS('/ws-stomp'), // proxy를 통한 접속
  //     connectHeaders: {
  //       'auth-token': 'spring-chat-auth-token',
  //     },
  //     debug: function (str) {
  //       console.log(str);
  //     },
  //     reconnectDelay: 5000,
  //     heartbeatIncoming: 4000,
  //     heartbeatOutgoing: 4000,
  //     onConnect: () => {
  //       subscribe();
  //     },
  //     onStompError: (frame) => {
  //       console.error(frame);
  //     },
  //   });

  //   client.current.activate();
  // };

  // const disconnect = () => {
  //   client.current.deactivate();
  // };

  // const subscribe = () => {
  //   client.current.subscribe(`/sub/chat/`, ({ body }) => {
  //     setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
  //   });
  // };

  // const publish = (message) => {
  //   if (!client.current.connected) {
  //     return;
  //   }

  //   client.current.publish({
  //     destination: '/pub/chat',
  //     body: JSON.stringify({ roomSeq: ROOM_SEQ, message }),
  //   });

  //   setMessage('');
  // };
  return (
    <>
      <StChatBox>
        <StChatHeader>{title}</StChatHeader>
        <StChatBody></StChatBody>
        <StChatFooter>
          <StInput onChange={(e) => setMessage(e.target.value)}></StInput>
          <StButton message={message} disabled={message.length === 0}>
            전송
          </StButton>
        </StChatFooter>
      </StChatBox>
    </>
  );
}

const StChatBox = styled.div`
  width: 350px;
  height: 500px;
  background-color: #f6daa2;
  position: absolute;
  left: 50%;
  top: 50px;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  /* position: relative; */
`;

const StChatHeader = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f5d28c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #776540;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.8px;
`;

const StChatFooter = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  bottom: 0;
  pointer-events: visible;
`;

const StInput = styled.textarea`
  width: 70%;
  height: 50%;
  border: 1px solid black;
  margin-top: 5px;
  padding: 10px;
  resize: none;
  font-size: 15px;
  font-weight: 500;
  overflow-y: hidden;
  border: none;
  &:focus {
    outline: none;
  }
`;

const StButton = styled.button`
  width: 60px;
  height: 36px;
  font-size: 15px;
  font-weight: 500;
  background-color: ${({ message }) =>
    message !== '' ? '#f5d28c' : '#d8d8d8'};
  border-radius: 8px;
  margin-top: 15px;
  margin-left: 14px;
  border: none;
  color: ${({ message }) => (message !== '' ? '#262012' : '#a1a1a1')};
  cursor: ${({ message }) => (message !== '' ? 'pointer' : null)};
`;

const StChatBody = styled.div`
  height: 390px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
