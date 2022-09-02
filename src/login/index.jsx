import React, { useEffect, useRef } from 'react';
import useOutSideClick from '../hooks/useOutSideClick';
import ModalContainer from '../Modal/ModalContainer';
import useInputLogin from './hooks/useinputLogin';

import {
  Overlay,
  StMentDiv,
  StMent,
  ModalWrap,
  LoginWrap,
  StSpan,
  StInput,
  ButtonDiv,
  StButton,
} from './style';

const Login = ({ onClose, onSignupButton }) => {
  const { onClickLogin, onChangeUserInputs } = useInputLogin();

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
        <StMentDiv ref={modalRef}>
          <StMent
            fc='#00A99D'
            style={{
              fontSize: '40px',
              marginBottom: '50px',
              fontWeight: '600',
            }}
          >
            로그인
          </StMent>{' '}
          <StMent>
            <span style={{ color: 'white' }}>let</span>{' '}
            <StMent fc='#00A99D'>D.Velkit</StMent>{' '}
            <span style={{ color: 'white' }}>=</span>{' '}
            <StMent fc='#F5D28C'>
              “Devlop Your Teamwork through D.VelKit!”;
            </StMent>
          </StMent>
        </StMentDiv>
        <ModalWrap ref={modalRef}>
          <LoginWrap>
            <StSpan>이메일</StSpan>
            <StInput
              name='username'
              placeholder='이메일을 입력해주세요!'
              onChange={onChangeUserInputs}
            ></StInput>
            <StSpan>비밀번호</StSpan>
            <StInput
              type='password'
              name='password'
              style={{ marginBottom: '40px' }}
              placeholder='비밀번호를 입력해주세요!'
              onChange={onChangeUserInputs}
            ></StInput>
            <ButtonDiv>
              <StButton onClick={onClickLogin}>로그인</StButton>
              <StButton
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  border: '1px solid black',
                }}
                onClick={() => {
                  onSignupButton();
                  handleClose();
                }}
              >
                회원가입
              </StButton>
            </ButtonDiv>
          </LoginWrap>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default Login;
