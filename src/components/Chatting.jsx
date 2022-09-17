import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { getCookieToken } from '../Cookie';
import { useGetChatMessageQuery } from '../redux/modules/chat';
import useGetUser from '../common/hooks/useGetUser';
import Draggable from 'react-draggable';
import ModalContainer from '../common/Modal/ModalContainer';

export default function Chatting({
  title,
  id,
  stompClient,
  chatMessages,
  headers,
  message,
}) {
  const textRef = useRef(null);

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
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const chatdata = chatMessages?.map((data, i) => {
    if (data.type === 'TALK') {
      // if ()
      return (
        <>
          <div style={{ marginTop: '5px' }}>
            <span
              style={{
                color: 'grey',
                marginRight: '20px',
                marginTop: '5px',
                marginLeft: '10px',
              }}
            >
              {data.writer.split('@')[0]}
            </span>
            <MessageBox key={i}>
              <span style={{ color: 'black' }}>{data.message}</span>
            </MessageBox>
          </div>
        </>
      );
    }
  });

  return (
    <>
      {/* <ModalContainer> */}
      <Draggable>
        <StChatBox>
          {/* <UserList>
            {userlist?.map((list, i) => {
              return <>{list}</>;
            })}
          </UserList> */}
          <StChatHeader>{title}</StChatHeader>
          <StChatBody>{chatdata}</StChatBody>
          <StChatFooter>
            <StInput
              rows='0'
              cols='0'
              name='message'
              // value={textRef.current.value}
              // onChange={onChange}
              onKeyPress={onKeyDown}
              ref={textRef}
              // autoComplete='off'
              placeholder='메세지를 입력하세요 (100자 이내)'
              maxLength={100}
            ></StInput>
            <StButton
              onClick={sendMessage}
              message={message}
              textRef={textRef}
              // disabled={textRef.current.value.length === 0}
            >
              전송
            </StButton>
          </StChatFooter>
        </StChatBox>
      </Draggable>
      {/* </ModalContainer> */}
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

const StInput = styled.input`
  width: 70%;
  height: 50%;
  border: 1px solid black;
  margin-top: 0px;
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
  min-width: 30px;
  border-radius: 8px;
  width: 40%;
  margin-top: 5px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-left: 10px;
`;

const UserList = styled.div`
  width: 100px;
  height: 100px;
  background-color: #e9dcc1;
  position: absolute;
  left: 100%;
`;
