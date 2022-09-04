import React, { useRef, useEffect } from 'react';

import styled from 'styled-components';
import ModalContainer from '../Modal/ModalContainer';
import useOutSideClick from '../hooks/useOutSideClick';

import useInputSignUp from './hooks/useInputSignUp';
import UserInputForm from './components/UserInputForm';

const SignupModal = ({ onClose }) => {

  const { onChangeSignUpInputs } = useInputSignUp()

  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);

  // const emailCheck = async () => {
  //   const checkDuplicate = {
  //     username,
  //   };
  //   try {
  //     await axios
  //       .post('http://hosung.shop/api/members/email', checkDuplicate)
  //       .then(() => {
  //         alert('닉네임을 사용하실 수 있습니다.');
  //       });
  //   } catch (error) {
  //     alert('이미 존재하는 닉네임입니다.');
  //   }
  // };

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
                marginBottom: '10px',
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
                회원가입
              </StMent>
              <StMent
                fc='#999999'
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  width: '110%',
                  marginBottom: '',
                }}
              >
                성장하는 사람들을 위한 프로젝트 협업 서비스 디벨킷.
              </StMent>
            </div>
            <UserInputForm 
              onChange={onChangeSignUpInputs}
            />
            {/* <StMsg>
              {passwordConfirm.length > 0 && (
                <span
                  className={`message ${
                    isPasswordConfirm ? 'success' : 'error'
                  }`}
                >
                  {passwordConfirmMsg}
                </span>
              )}
            </StMsg> */}
            <ButtonDiv>
              <StButton
                style={{}}
                onClick={() => {
                  // handleClose();
                }}
              >
                회원가입하기
              </StButton>
              <StMent
                fc='#999999'
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  width: '90%',
                  marginLeft: '15px',
                }}
              >
                회원가입 시 디벨킷의 서비스 이용 약관과
                <br></br> 개인정보 보호정책에 동의하게 됩니다.
              </StMent>
            </ButtonDiv>
          </LoginWrap>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default SignupModal;

const ModalWrap = styled.div`
  width: 464px;
  height: 750px;
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
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

const LoginWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #00a99d;
  margin-bottom: 20px;
  color: white;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;

export const StMent = styled.span`
  color: ${(props) => props.fc};
  font-family: 'Consolas';
  font-size: 22px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
`;

const StMsg = styled.div`
  text-align: left;
  padding-left: 20px;
  font-weight: 0;
  font-size: 0.8rem;
  line-height: 24px;
  letter-spacing: -1px;
  position: relative;
  top: -5px;
  bottom: -10px;
  left: 0;
  .message {
    &.success {
      color: #8f8c8b;
    }
    &.error {
      color: #ff2727;
    }
  }
`;
