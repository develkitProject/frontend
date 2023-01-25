import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ModalContainer from '../../common/modal/ModalContainer';
import useInputLogin from './hooks/useInputLogin';
import KakaoLogin from '../KaKaoLogin';
import CloseButton from '../../common/elements/CloseButton';

import {
  Overlay,
  StMent,
  ModalWrap,
  LoginWrap,
  StSpan,
  StInput,
  ButtonDiv,
  StButton,
  KakaoDiv,
} from './style';
import { setIsLoginModal, setIsSignUpModal } from '../../redux/modules/global';

function Login() {
  const dispatch = useDispatch();
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REST_API_KEY}&redirect_uri=https://d-velkit.com/kakao&response_type=code`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;

  const { onClickLogin, onChangeUserInputs } = useInputLogin();

  const modalRef = useRef(null);

  const handleClose = (): void => {
    dispatch(setIsLoginModal(false));
  };

  const goSignUp = useCallback(() => {
    dispatch(setIsLoginModal(false));
    dispatch(setIsSignUpModal(true));
  }, [dispatch]);

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

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
                marginBottom: '10px',
              }}
            >
              <StMent
                fontColor="#00A99D"
                style={{
                  fontSize: '35px',
                  // marginBottom: '8px',
                  fontWeight: '600',
                }}
              >
                로그인
              </StMent>
              <StMent
                fontColor="#999999"
                style={{
                  fontSize: '15px',
                  fontWeight: '500',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                성장하는 사람들을 위한 프로젝트 협업 서비스 디벨킷
              </StMent>
            </div>
            <StSpan>이메일</StSpan>
            <StInput
              name="username"
              placeholder="이메일을 입력해주세요!"
              onChange={onChangeUserInputs}
            />
            <StSpan>비밀번호</StSpan>
            <StInput
              type="password"
              name="password"
              style={{ marginBottom: '20px' }}
              placeholder="비밀번호를 입력해주세요!"
              onChange={onChangeUserInputs}
            />
            <ButtonDiv>
              <StButton onClick={onClickLogin}>로그인</StButton>
              <StButton
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  border: '1px solid black',
                }}
                onClick={goSignUp}
              >
                이메일로 회원가입
              </StButton>
            </ButtonDiv>
            <KakaoDiv style={{ textAlign: 'center' }}>
              ---------------------------------- 또는
              ----------------------------------
              <KakaoLogin onClick={handleLogin} />
              <StMent fontColor="#999999" style={{ fontSize: '12px' }}>
                회원가입 시 디벨킷의 서비스 이용 약관과 개인정보 보호정책에
                동의하게 됩니다.
              </StMent>
            </KakaoDiv>
            <CloseButton onClose={handleClose} />
          </LoginWrap>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
}

export default Login;
