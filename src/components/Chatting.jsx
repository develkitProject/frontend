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
import { getCookieToken } from '../Cookie';
import Draggable from 'react-draggable';

export default function Chatting({ title }) {
  const [chatMessages, setChatMessages] = useState([]);
  const textRef = useRef(null);
  const scrollRef = useRef();
  const [message, setMessage] = useState('');
  // const [userlist, setUserlist] = useState([]);
  const id = useParams().id;
  // const { data, isLoading, refetch, error } = useGetChatMessageQuery(id);
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
    // scrollToBottom();
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
            // setUserlist((userlist) => [...userlist, newMessage?.userList]);
            console.log(newMessage);
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

  const sendMessage = () => {
    if (textRef.current.value !== '') {
      stompClient.send(
        `/pub/chat/message`,
        headers,
        JSON.stringify({
          roomId: id,
          message: textRef.current.value,
        })
      );
      textRef.current.value = null;
    } else {
      console.log('d');
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        sendMessage();
      }
    }
  };

  const scrollToBottom = () => {
    if (scrollRef.current.value) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const chatdata = chatMessages?.map((data, i) => {
    if (data.type === 'TALK') {
      return (
        <>
          <MessageBox key={i}>
            <span style={{ color: 'grey', marginRight: '20px' }}>
              {data.writer.split('@')[0]}
            </span>
            :
            <span style={{ color: 'black', marginLeft: '20px' }}>
              {data.message}
            </span>
          </MessageBox>
        </>
      );
    }
  });

  return (
    <>
      <Draggable>
        <StChatBox>
          {/* <UserList>
            {userlist?.map((list, i) => {
              return <>{list}</>;
            })}
          </UserList> */}
          <StChatHeader>{title}</StChatHeader>
          <StChatBody ref={scrollRef}>{chatdata}</StChatBody>
          <StChatFooter>
            <StInput
              rows='0'
              cols='0'
              name='message'
              // value={textRef.current.value}
              // onChange={onChange}
              onKeyDown={onKeyDown}
              ref={textRef}
              // autoComplete='off'
              placeholder='메세지를 입력하세요 (100자 이내)'
              maxLength={100}
            ></StInput>
            <StButton
              onClick={sendMessage}
              message={message}
              textRef={textRef.current}
              // disabled={textRef.current.value.length === 0}
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
  /* position: relative; */
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
  background-color: ${({ textRef }) =>
    textRef !== '' ? '#f5d28c' : '#d8d8d8'};
  border-radius: 8px;
  margin-top: 15px;
  margin-left: 14px;
  border: none;
  color: ${({ textRef }) => (textRef !== '' ? '#262012' : '#a1a1a1')};
  cursor: ${({ textRef }) => (textRef !== '' ? 'pointer' : null)};
`;

const StChatBody = styled.div`
  height: 390px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MessageBox = styled.div`
  min-height: 30px;
  border-radius: 8px;
  width: auto;
  background-color: #f9f9f9;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const UserList = styled.div`
  width: 100px;
  height: 100px;
  background-color: #e9dcc1;
  position: absolute;
  left: 100%;
`;
