import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import useOutSideClick from '../hooks/useOutSideClick';
import axios from 'axios';
import { setAccessToken } from '../Cookie';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onClose, setSignupOpen, onSignupButton }) => {
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
        <ModalWrap ref={modalRef}></ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default LoginModal;

const ModalWrap = styled.div`
  width: 500px;
  height: 550px;
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

const StSpan = styled.span`
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  margin-top: 30px;
  text-align: left;
`;

const StInput = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  border: 1px solid #999999;
  line-height: 50px;
  padding-left: 20px;
  border-radius: 10px;
  width: 93%;
  margin-top: 18px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const LoginWrap = styled.div`
  width: 65%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

const StButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #00a99d;
  margin-top: 15px;
  color: white;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;
