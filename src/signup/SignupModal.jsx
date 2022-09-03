import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalContainer from '../Modal/ModalContainer';
import useOutSideClick from '../hooks/useOutSideClick';
import axios from 'axios';
import { setAccessToken } from '../Cookie';
import { useNavigate } from 'react-router-dom';

const SignupModal = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [isUsername, setIsUsername] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const [usernameMsg, setUsernameMsg] = useState('');
  const [nicknameMsg, setNicknameMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState('');

  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);

  const onChangeUsername = (event) => {
    const usernameRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (event.target.value && usernameRegex.test(event.target.value)) {
      setIsUsername(true);
      setUsernameMsg('올바른 이메일 형식입니다.');
    } else {
      setIsUsername(false);
      setUsernameMsg('유효하지 않은 이메일 주소입니다.');
    }
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if (
      event.target.value.length > 7 &&
      event.target.value.length < 21 &&
      event.target.value &&
      passwordRegex.test(event.target.value)
    ) {
      setIsPassword(true);
      setPasswordMsg('올바른 비밀번호 형식입니다.');
    } else {
      setIsPassword(false);
      setPasswordMsg('비밀번호는 8~20자 내외로 영어+숫자+특수문자 조합입니다.');
    }
    setPassword(event.target.value);
  };

  const onChangeNickname = (event) => {
    if (event.target.value.length < 2 || event.target.value.length > 8) {
      setIsNickname(false);
      setNicknameMsg('2~8글자 내외(한글, 영어, 숫자)로 입력해주세요.');
    } else {
      setIsNickname(true);
      setNicknameMsg('올바른 아이디 형식입니다.');
    }
    setNickname(event.target.value);
  };

  const onChangePasswordConfirm = (event) => {
    if (password === event.target.value) {
      setIsPasswordConfirm(true);
      setPasswordConfirmMsg('동일한 비밀번호입니다.');
    } else {
      setIsPasswordConfirm(false);
      setPasswordConfirmMsg('비밀번호가 다릅니다.');
    }
    setIsPassword(true);
    setPasswordConfirm(event.target.value);
  };

  const validation = () => {
    if (username) setIsUsername(true);
    if (nickname) setIsNickname(true);
    if (password) setIsPassword(true);
    if (passwordConfirm) setIsPasswordConfirm(true);
    if (
      username &&
      nickname &&
      password &&
      passwordConfirm &&
      isUsername &&
      isNickname &&
      isPassword &&
      isPasswordConfirm
    ) {
      return true;
    }
    return false;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validation()) {
      try {
        const res = await axios.post('http://hosung.shop/api/members/signup', {
          username,
          password,
          nickname,
        });
      } catch (error) {
        throw new Error('error');
      }
      alert('회원 가입 완료하였습니다!!');
      setUsername('');
      setNickname('');
      setPassword('');
    } else {
      alert('입력 정보를 다시 확인하세요!!');
    }
  };

  const emailCheck = async () => {
    const checkDuplicate = {
      username,
    };
    try {
      await axios
        .post('http://hosung.shop/api/members/email', checkDuplicate)
        .then(() => {
          alert('닉네임을 사용하실 수 있습니다.');
        });
    } catch (error) {
      alert('이미 존재하는 닉네임입니다.');
    }
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
            <StSpan>닉네임</StSpan>
            <StInput
              name='nickname'
              placeholder='닉네임'
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></StInput>
            <StSpan>이메일</StSpan>
            <StInput
              name='username'
              placeholder='이메일을 입력해주세요!'
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></StInput>
            <StSpan>비밀번호</StSpan>
            <StInput
              type='password'
              name='password'
              placeholder='비밀번호를 입력해주세요!'
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></StInput>
            <StSpan>비밀번호 확인</StSpan>
            <StInput
              type='password'
              name='passwordConfirm'
              style={{ marginBottom: '40px' }}
              placeholder='비밀번호를 한번 더 입력해주세요!'
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></StInput>
            <StMsg>
              {passwordConfirm.length > 0 && (
                <span
                  className={`message ${
                    isPasswordConfirm ? 'success' : 'error'
                  }`}
                >
                  {passwordConfirmMsg}
                </span>
              )}
            </StMsg>
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

const StSpan = styled.span`
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  margin-top: 20px;
  text-align: left;
`;

const StInput = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  border: 1px solid #999999;
  line-height: 45px;
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
