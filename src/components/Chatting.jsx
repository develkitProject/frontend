import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SockJS from 'sockjs-client';
// import { Stomp } from '@stomp/stompjs';
import Stomp from 'stompjs';
import { useParams } from 'react-router-dom';
import { useGetChatMessageQuery } from '../redux/modules/chat';
import { getCookieToken } from '../Cookie';
import Draggable from 'react-draggable';

export default function Chatting({ title }) {
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');
  const id = useParams().id;
  const { data, isLoading, refetch, error } = useGetChatMessageQuery(id);
  console.log(data?.data);

  const headers = {
    token: getCookieToken(),
  };
  const sockJS = new SockJS('http://hosung.shop/stomp/chat');
  const stompClient = Stomp.over(sockJS);
  // let stompClient = Stomp.over(function () {
  //   return new SockJS('http://hosung.shop/stomp/chat');
  // });

  // stompClient.debug = () => {};

  useEffect(() => {
    onConnected();
    return () => onConnected();
  }, []);

  function onConnected() {
    try {
      stompClient.connect(headers, () => {
        stompClient.subscribe(
          `/sub/chat/room/${id}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            console.log(newMessage);
          },
          headers
        );
        publish_1();
      });
    } catch (error) {
      console.log(error);
    }
  }

  const disconnect = () => {
    stompClient.deactivate();
  };

  const publish_1 = (message) => {
    if (!stompClient.connected) {
      return;
    }
    stompClient.send(
      `/pub/chat/enter`,
      headers,
      JSON.stringify({ roomId: id, message })
    );
    setMessage('');
  };

  const sendMessage = () => {
    stompClient.send(
      `/pub/chat/message`,
      headers,
      JSON.stringify({
        roomId: id,
        message: message,
      })
    );
    setMessage('');
  };

  return (
    <>
      {/* <Draggable> */}
      <StChatBox>
        <StChatHeader>{title}</StChatHeader>
        <StChatBody></StChatBody>
        <StChatFooter>
          <StInput
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></StInput>
          <StButton
            onClick={sendMessage}
            message={message}
            disabled={message.length === 0}
          >
            전송
          </StButton>
        </StChatFooter>
      </StChatBox>
      {/* </Draggable> */}
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
