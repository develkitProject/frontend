import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import useOutSideClick from '../hooks/useOutSideClick';
import axios from 'axios';
import { setAccessToken } from '../Cookie';
import { useNavigate } from 'react-router-dom';

const CreateSpaceModal = ({ onClose, setSignupOpen, onSignupButton }) => {
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  const navigate = useNavigate();

  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);

  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <Wrapper>
            <StProejct>프로젝트 생성하기</StProejct>
            <StMent>
              프로젝트를 생성 후, 프로젝트 홈에서 초대코드를 복사할 수 있습니다.
            </StMent>
            <StInputTitle>커버 이미지</StInputTitle>
            <StImageBox></StImageBox>
            <StInputTitle>프로젝트 이름</StInputTitle>
            <StInput placeholder='프로젝트명을 입력해주세요'></StInput>
            <StInputTitle>프로젝트 소개</StInputTitle>
            <StInput placeholder='프로젝트를 소개해주세요'></StInput>
          </Wrapper>
          <button
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              border: 'none',
              fontWeight: '600',
            }}
          >
            X
          </button>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default CreateSpaceModal;

const ModalWrap = styled.div`
  width: 650px;
  height: 700px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  width: 70%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const StProejct = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: #00a99d;
`;

const StMent = styled.span`
  font-size: 16px;
  color: #626262;
  margin-top: 20px;
  letter-spacing: -0.8px;
`;

const StInputTitle = styled.span`
  font-size: 16px;
  color: #999;
  margin-top: 40px;
  font-weight: 500;
  margin-right: 250px;
`;

const StImageBox = styled.div`
  width: 70%;
  height: 92px;
  border: 1px solid black;
  margin-top: 10px;
  border-radius: 15px;
  background-color: #dedede;
  border: none;
`;

const StInput = styled.input`
  width: 65%;
  height: 60px;
  padding: 0px 0px 0px 18px;
  border-radius: 10px;
  border: solid 1px #999;
  margin-top: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
