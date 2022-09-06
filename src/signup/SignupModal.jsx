import React, { useRef, useEffect } from 'react';

import ModalContainer from '../Modal/ModalContainer';
import useOutSideClick from '../hooks/useOutSideClick';

import useInputSignUp from './hooks/useInputSignUp';
import UserInputForm from './components/UserInputForm';
import useInputStatus from './hooks/useInputStatus';

import * as St from './style'

const SignupModal = ({ onClose }) => {

  const {
    signUpInputs,
    onChangeSignUpInputs, 
    handleSignUp } = useInputSignUp()

  const { successStatus, errorStatus } = useInputStatus({signUpInputs})
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  console.log(process.env.BASE_URL)
  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);

  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <St.Overlay>
        <St.ModalWrap ref={modalRef}>
          <St.LoginWrap>
            <div
              style={{
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              <St.Text 
                color='#00A99D'
                size="35"
                bold="600"
                style={{
                  marginBottom: '20px'
                }}
              >회원가입</St.Text>
              <St.Text
                color='#999999'
                size="16"
                bold="400"
              >
                성장하는 사람들을 위한 프로젝트 협업 서비스 디벨킷.
              </St.Text>
            </div>
            <UserInputForm 
              successStatus={successStatus}
              errorStatus={errorStatus}
              onChange={onChangeSignUpInputs}
            />
            <St.ButtonDiv>
              <St.Button
                onClick={handleSignUp}
              >
                회원가입하기
              </St.Button>
              <St.Text
                color='#999999'
                size="12"
                bold="300"
              >
                회원가입 시 디벨킷의 서비스 이용 약관과 개인정보 보호정책에 동의하게 됩니다.
              </St.Text>
            </St.ButtonDiv>
          </St.LoginWrap>
        </St.ModalWrap>
      </St.Overlay>
    </ModalContainer>
  );
};

export default SignupModal;
