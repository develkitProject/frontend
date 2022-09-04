import React, { useRef } from 'react';
import useOutSideClick from '../hooks/useOutSideClick';
import ModalContainer from '../Modal/ModalContainer';
import useInputLogin from './hooks/useInputLogin';
import KakaoLogin from '../components/KaKaoLogin';

import {
  Overlay,
  StMent,
  ModalWrap,
  LoginWrap,
  StSpan,
  StInput,
  ButtonDiv,
  StButton,
} from './style';

const Login = ({ onClose, SignupButton }) => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;
  const { onClickLogin, onChangeUserInputs } = useInputLogin();

  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <LoginWrap>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '30px',
              }}
            >
              <StMent
                fc='#00A99D'
                style={{
                  fontSize: '35px',
                  marginBottom: '20px',
                  fontWeight: '600',
                }}
              >
                로그인
              </StMent>
              <StMent
                fc='#999999'
                style={{ fontSize: '15px', fontWeight: '600', width: '110%' }}
              >
                성장하는 사람들을 위한 프로젝트 협업 서비스 디벨킷.
              </StMent>
            </div>
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
              style={{ marginBottom: '20px' }}
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
                  SignupButton();
                  handleClose();
                }}
              >
                회원가입
              </StButton>
            </ButtonDiv>
            <KakaoLogin
              onClick={handleLogin}
              style={{ width: '100%' }}
            ></KakaoLogin>
          </LoginWrap>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default Login;
