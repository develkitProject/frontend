import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import Draggable from 'react-draggable';
import useGetUser from '../common/hooks/useGetUser';
import ModalContainer from '../common/Modal/ModalContainer';
import noteBook from '../asset/img/notebook.png';

export default function Chatting({
  title,
  id,
  stompClient,
  chatMessages,
  headers,
  users,
}) {
  const textRef = useRef(null);
  const messageBoxRef = useRef();
  const { user } = useGetUser();
  const [isOpen, setIsOpen] = useState(false);
  const [Opacity, setOpacity] = useState(false);
  const userArray = [...new Set(users)];

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  useEffect(() => {
    messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
  }, [chatMessages]);

  const sendMessage = () => {
    if (textRef.current.value !== '') {
      stompClient.send(
        `/pub/chat/message`,
        headers,
        JSON.stringify({
          roomId: id,
          message: textRef.current.value,
        }),
      );
      textRef.current.value = null;
    }
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // eslint-disable-next-line array-callback-return
  const chatdata = chatMessages?.map((data, i) => {
    if (data.type === 'TALK') {
      return (
        <>
          <Stdiv
            key={i}
            style={
              data.writer === user.username
                ? { alignItems: 'flex-end' }
                : { alignItems: 'flex-start' }
            }
          >
            <span
              style={{
                color: 'grey',
              }}
            >
              {data.writer.split('@')[0]}
            </span>
            <MessageBox key={i}>
              <span style={{ color: 'black' }}>{data.message}</span>
            </MessageBox>
          </Stdiv>
        </>
      );
    }
  });

  return (
    <>
      <ModalContainer>
        <Draggable
          cancel="input, button, span"
          onStart={handleStart}
          onStop={handleEnd}
        >
          <StChatBox style={{ opacity: Opacity ? '0.85' : '1' }}>
            {/* <UserList>
            {userlist?.map((list, i) => {
              return <>{list}</>;
            })}
          </UserList> */}
            <StChatHeader>
              <span style={{ marginLeft: '15px', fontSize: '15px' }}>
                {title}
              </span>
              <span
                style={{
                  marginRight: '13px',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                +
              </span>
            </StChatHeader>
            <StChatBody ref={messageBoxRef}>{chatdata}</StChatBody>
            <StChatFooter>
              <StInput
                rows="0"
                cols="0"
                name="message"
                // value={textRef.current.value}
                // onChange={onChange}
                onKeyPress={onKeyDown}
                ref={textRef}
                // autoComplete='off'
                placeholder="메세지를 입력하세요 (100자 이내)"
                maxLength={100}
              />
              <StButton
                onClick={sendMessage}
                // message={message}
                textRef={textRef}
                // disabled={textRef.current.value.length === 0}
              >
                전송
              </StButton>
            </StChatFooter>
            {isOpen && (
              <StListDiv>
                <GreySpan fontWeight="500">디벨킷</GreySpan>
                <NoteBook />
                <GreySpan fontWeight="400">현재 접속 인원</GreySpan>
                <UserListDiv>
                  {userArray?.map((user, i) => {
                    return (
                      <GreySpan padding="10px">{user.split('@')[0]}</GreySpan>
                    );
                  })}
                </UserListDiv>
              </StListDiv>
            )}
          </StChatBox>
        </Draggable>
      </ModalContainer>
    </>
  );
}

const StChatBox = styled.div`
  width: 350px;
  height: 560px;
  background-color: #f6daa2;
  /* position: relative; */
  left: 50%;
  top: 50px;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
`;

const StChatHeader = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f5d28c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #776540;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: -0.8px;
`;

const StChatFooter = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  bottom: 0;
  pointer-events: visible;
  position: absolute;
  align-items: center;
  /* z-index: -999; */
  /* pointer-events: none; */
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
  background-color: ${props =>
    props.textRef?.current?.value !== null ? '#f5d28c' : '#d8d8d8'};
  border-radius: 8px;
  margin-left: 14px;
  border: none;
  color: ${({ textRef }) => (textRef !== '' ? '#262012' : '#a1a1a1')};
  cursor: ${({ textRef }) => (textRef !== '' ? 'pointer' : null)};
`;

const StChatBody = styled.div`
  height: 460px;
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: right;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MessageBox = styled.div`
  min-height: 30px;
  min-width: 100px;
  max-width: 200px;
  border-radius: 8px;
  margin-top: 10px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0px 5px 0px 5px;
  /* margin-left: 10px; */
  /* float: right; */
`;

const Stdiv = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

const StListDiv = styled.div`
  width: 250px;
  height: 350px;
  background-color: white;
  position: absolute;
  left: 100%;
  top: 0;
  border: 1px solid #999999;
  margin-left: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #f7f7f7;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const GreySpan = styled.span`
  color: grey;
  font-size: 17px;
  padding: ${props => (props.padding ? props.padding : '20px')};
  font-weight: ${props => props.fontWeight};
  letter-spacing: -0.7px;
`;

const NoteBook = styled.div`
  width: 80%;
  height: 60px;
  background-image: url(${noteBook});
  background-size: 100% 100%;
  border-radius: 8px;
  margin: 0 auto;
`;

const UserListDiv = styled.div`
  width: 90%;
  height: 50%;
  margin: 0 auto;
  border-top: 1px solid #999999;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: auto;
`;
