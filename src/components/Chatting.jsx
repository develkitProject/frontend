import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
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
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const id = useParams().id;
  const { data, isLoading, refetch, error } = useGetChatMessageQuery(id);
  console.log(chatMessages);

  const sockJS = new SockJS('https://hosung.shop/stomp/chat');
  const stompClient = Stomp.over(sockJS);

  // let stompClient = Stomp.over(function () {
  //   return new SockJS('http://hosung.shop/stomp/chat');
  // });

  stompClient.debug = () => {};

  const headers = {
    token: getCookieToken(),
  };

  useEffect(() => {
    onConnected();
    return () => {
      disConnect();
    };
  }, []);

  function onConnected() {
    try {
      stompClient.connect(headers, () => {
        stompClient.subscribe(
          `/sub/chat/room/${id}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            setChatMessages((chatMessages) => [...chatMessages, newMessage]);
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
  const disConnect = () => {
    if (stompClient != null) {
      if (stompClient.connected) stompClient.disconnect();
    }
  };

  // const handelEnter = () => {
  //   const newMessage = { username, chatMessages };
  //   stompClient.send(
  //     '/pub/chat/enter',
  //     headers,
  //     JSON.stringify({ roomId: id, newMessage })
  //   );
  //   setMessage('');
  // };

  // const addMessage = () => {
  //   setChatMessages((prev) => [...prev, message]);
  // };

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

  const onChange = useCallback(
    (e) => {
      setMessage(e.target.value);
    },
    [message]
  );

  return (
    <>
      <Draggable>
        <StChatBox>
          <StChatHeader>{title}</StChatHeader>
          <StChatBody>
            {chatMessages?.map((a, i) => {
              return <div>{a.message}</div>;
            })}
          </StChatBody>
          <StChatFooter>
            <StInput
              name='message'
              value={message}
              onChange={onChange}
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
      </Draggable>
    </>
  );
}

const StChatBox = styled.div`
  width: 350px;
  height: 500px;
  background-color: #f6daa2;
  position: relative;
  left: 50%;
  top: 50px;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
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
  position: absolute;
  /* z-index: -999; */
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
