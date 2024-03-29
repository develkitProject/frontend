/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Draggable from 'react-draggable';
import useModalOverlay from '../account/signup/hooks/useModalOverlay';
import velkit from '../common/img/velkit.png';
import {
  useGetChatMessagesQuery,
  useNextChatMessagesMutation,
} from '../redux/modules/chat';
import useObserver from '../common/hooks/useObserver';
import noteBook from '../common/img/notebook.png';

function Chatting({ title, id, stompClient, headers, user }) {
  const [users, setUsers] = useState(null);
  const textRef = useRef(null);
  const messageBoxRef = useRef(null);
  const { isOpen, toggle } = useModalOverlay();
  const { data, isLoading, refetch } = useGetChatMessagesQuery(id);
  const [nextgetChat] = useNextChatMessagesMutation();
  const [Opacity, setOpacity] = useState(false);
  const [minimum, setMinimum] = useState(false);
  const [prevHeight, setPrevHeight] = useState(0);
  const messageList = data?.data;
  const [chatMessages, setChatMessages] = useState([]);

  // -----------------------------무한 스크롤----------------------------------------

  const onFetchMessage = () => {
    const last = chatMessages[chatMessages.length - 1];
    const obj = {
      message: last.message,
      writer: last.writer,
      cursor: last.createdAt,
      id,
    };
    if (prevHeight !== messageBoxRef.current.scrollHeight) {
      // console.log(prevHeight, messageBoxRef.current.scrollHeight);
      nextgetChat(obj).then((res) =>
        setChatMessages((chatMessages) => [...chatMessages, ...res.data.data]),
      );
      setPrevHeight(messageBoxRef.current.scrollHeight);
    }
  };

  const { target } = useObserver({
    fetcher: onFetchMessage,
    dependency: chatMessages,
    isLoading,
  });

  function onMiniMode() {
    setMinimum(!minimum);
  }

  useEffect(() => {
    onConnected();
    return () => {
      disConnect();
    };
  }, []);

  useEffect(() => {
    setChatMessages(messageList);
    refetch();
  }, [messageList]);

  useEffect(() => {
    if (prevHeight) {
      const currentHeight = messageBoxRef.current.scrollHeight - prevHeight;
      messageBoxRef.current.scrollTo(0, currentHeight);
      setPrevHeight(0);
      // return setPrevHeight(0);
    }
    messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
  }, [chatMessages]);
  // -----------------------------무한 스크롤----------------------------------------

  const userArray = [...new Set(users)];

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  function onConnected() {
    if (stompClient.connected) {
      onSubscribe();
    } else {
      stompClient.connect(headers, () => {
        onSubscribe();
      });
    }
  }

  const disConnect = () => {
    if (stompClient != null) {
      if (stompClient.connected) stompClient.unsubscribe('sub-0');
    }
  };

  const onSubscribe = () => {
    stompClient.subscribe(
      `/sub/chat/room/${id}`,
      (data) => {
        const newMessage = JSON.parse(data.body);
        if (newMessage.type !== 'TALK') {
          setUsers(newMessage.userList);
        } else {
          setChatMessages((chatMessages) => [newMessage, ...chatMessages]);
        }
      },
      headers,
    );
  };

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

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const chatData = chatMessages
    ?.slice(0)
    .reverse()
    .map((data, i) => {
      return (
        <Stdiv
          key={i}
          style={
            data.writer === user?.username
              ? {
                  flexDirection: 'row-reverse',
                  marginTop: '-2px',
                }
              : { justifyContent: 'flex-start' }
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NameSpan
              style={
                data.writer === user?.username
                  ? {
                      display: 'none',
                    }
                  : null
              }
            >
              {data.nickname}
            </NameSpan>
            <MessageBox key={i}>
              <span style={{ color: 'black' }}>{data.message}</span>
            </MessageBox>
          </div>
          <div>
            <TimeSpan
              style={{
                marginBottom: '5px',
                fontSize: '12px',
                color: '#a1a1a1',
                letterSpacing: '-0.5px',
              }}
            >
              {data.createdAt.split(' ')[0].substr(5, 9)}
            </TimeSpan>
            <TimeSpan>{data.createdAt.split(' ')[1].slice(0, -7)}</TimeSpan>
          </div>
        </Stdiv>
      );
    });

  return (
    <>
      <Draggable
        cancel="input, button, span"
        onStart={handleStart}
        onStop={handleEnd}
        bounds="parent"
      >
        <StChatBox
          style={{ opacity: Opacity ? '0.85' : '1' }}
          minimum={minimum}
        >
          <StChatHeader>
            <span style={{ marginLeft: '15px', fontSize: '15px' }}>
              {title}
            </span>
            <PlusToggle
              role="presentation"
              // eslint-disable-next-line react/jsx-no-bind
              onClick={onMiniMode}
              minimum={minimum}
              style={
                minimum
                  ? { alignItems: 'center' }
                  : { alignItems: 'flex-start' }
              }
            >
              {minimum ? '+' : '_'}
            </PlusToggle>
            <PlusToggle
              role="presentation"
              onClick={toggle}
              right="10px"
              fontSize="18px"
            >
              {!isOpen ? '>' : '<'}
            </PlusToggle>
          </StChatHeader>
          <StChatBody ref={messageBoxRef} minimum={minimum}>
            {chatData?.length !== 0 ? (
              <>
                <div>
                  <TargetDiv ref={target} />
                </div>
                {chatData}
              </>
            ) : (
              <>
                <StVelkit />
                <span
                  style={{
                    textAlign: 'center',
                    marginTop: '150px',
                    letterSpacing: '-0.5px',
                    color: '#636363',
                    width: '100%',
                  }}
                >
                  스페이스 내 멤버들과 채팅해보세요
                </span>
              </>
            )}
          </StChatBody>
          <StChatFooter minimum={minimum}>
            <StInput
              rows="0"
              cols="0"
              name="message"
              onKeyPress={onKeyDown}
              ref={textRef}
              placeholder="메세지를 입력하세요 (100자 이내)"
              maxLength={100}
            />
            <StButton onClick={sendMessage} textRef={textRef}>
              전송
            </StButton>
          </StChatFooter>
          {isOpen && (
            <StListDiv>
              <GreySpan fontWeight="500">디벨킷</GreySpan>
              <NoteBook />
              <GreySpan fontWeight="400">
                현재 접속 인원 : {userArray.length}명
              </GreySpan>
              <UserListDiv>
                {userArray?.map((user, i) => {
                  return (
                    <GreySpan padding="10px" key={i}>
                      {user.split('@')[0]}
                    </GreySpan>
                  );
                })}
              </UserListDiv>
            </StListDiv>
          )}
        </StChatBox>
      </Draggable>
    </>
  );
}

export default React.memo(Chatting);

const StChatBox = styled.div`
  width: 350px;
  height: ${(props) => (props.minimum ? '40px' : '560px')};
  background-color: #f6daa2;
  right: 20%;
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
  position: relative;
`;

const StChatBody = styled.div`
  height: 460px;
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: right;
  display: ${(props) => (props.minimum ? 'none' : null)};
  &::-webkit-scrollbar {
    width: 5px;
    display: none;
  }
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
  display: ${(props) => (props.minimum ? 'none' : null)};
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
  background-color: ${(props) =>
    props.textRef?.current?.value !== null ? '#f5d28c' : '#d8d8d8'};
  border-radius: 8px;
  margin-left: 14px;
  border: none;
  color: ${({ textRef }) => (textRef !== '' ? '#262012' : '#a1a1a1')};
  cursor: ${({ textRef }) => (textRef !== '' ? 'pointer' : null)};
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
  white-space: pre-wrap;
  word-break: break-all;
  letter-spacing: -0.5px;
`;

const Stdiv = styled.div`
  margin: 3px;
  display: flex;
  padding: 0px 10px;
  align-items: flex-end;
  margin-bottom: 7px;
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
  padding: ${(props) => (props.padding ? props.padding : '20px')};
  font-weight: ${(props) => props.fontWeight};
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

const TimeSpan = styled.div`
  color: grey;
  letter-spacing: -0.9px;
  font-size: 13px;
  padding: 0px 9px;
`;

const NameSpan = styled.span`
  color: #313131;
  padding: 1px 3px;
`;

const move = keyframes`
    0% {
      transform: translateY(0);
      transform: translateX(0px);
    }
    50% {
      transform: translateX(25px);
    }
    100% {
      transform: translateY(0);
      transform: translateX(0);
    }
  `;

const PlusToggle = styled.div`
  background-color: #fbf1de;
  border-radius: 20px;
  height: 25px;
  width: 25px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: ${(props) => (props.right ? props.right : '45px')};
`;

const StVelkit = styled.div`
  width: 20%;
  height: 10%;
  background-image: url(${velkit});
  background-size: 100% 100%;
  position: absolute;
  left: 40%;
  top: 20%;
  animation: ${move} 3s 0s infinite;
`;

const TargetDiv = styled.div`
  height: 30px;
  background-color: #000000;
  margin: 0 auto;
  visibility: hidden;
`;
