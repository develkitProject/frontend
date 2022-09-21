// 남은 부분: 회원가입 중복확인 하기전에 미리 회원가입 중복된 값이면 유효성검사에서 띄워주기
// https://github.com/TEAM-7E7/7E7-FE/blob/main/src/pages/SignUp.tsx
// https://github.com/SoJaeBeom/DangGeunMarket-FE/blob/master/src/login/SignUp.jsx
// https://github.com/Hanghae-Realwork/front-end/blob/main/real_project/src/pages/Join.js
import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import profile from '../asset/img/profile.png';

axios.defaults.withCredentials = true;

function SignUp() {
  const navigate = useNavigate();

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

  const onChangeUsername = event => {
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

  const onChangeNickname = event => {
    if (event.target.value.length < 2 || event.target.value.length > 8) {
      setIsNickname(false);
      setNicknameMsg('2~8글자 내외(한글, 영어, 숫자)로 입력해주세요.');
    } else {
      setIsNickname(true);
      setNicknameMsg('올바른 아이디 형식입니다.');
    }
    setNickname(event.target.value);
  };

  const onChangePassword = event => {
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

  const onChangePasswordConfirm = event => {
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

  const onSubmit = async event => {
    event.preventDefault();
    if (validation()) {
      try {
        const res = await axios.post('https://hosung.shop/api/members/signup', {
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
      navigate('/login');
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
        .post('https://hosung.shop/api/members/email', checkDuplicate)
        .then(() => {
          alert('닉네임을 사용하실 수 있습니다.');
        });
    } catch (error) {
      alert('이미 존재하는 닉네임입니다.');
    }
  };

  return (
    <StWrapper>
      <div>
        <div>
          <h1>회원가입</h1>
          <p>
            문서작업+일정관리+채팅!
            <b>D.Velkit</b>
            으로 한번에
          </p>
          <img alt={profile} src={profile} width="7%" />
        </div>
        <div>
          <div>
            <div>이메일</div>
            <div>
              <input
                onChange={onChangeUsername}
                name="username"
                type="email"
                placeholder="E-mail Address"
              />
              <StMsg>
                {username.length > 0 && (
                  <span
                    className={`message ${isUsername ? 'success' : 'error'}`}
                  >
                    {usernameMsg}
                  </span>
                )}
              </StMsg>
              <button onClick={emailCheck} type="button">
                중복확인
              </button>
            </div>
          </div>

          <div>
            <div>이름(닉네임)</div>
            <div>
              <input
                onChange={onChangeNickname}
                name="nickname"
                type="text"
                placeholder="nickname"
              />
            </div>
            <StMsg>
              {nickname.length > 0 && (
                <span className={`message ${isNickname ? 'success' : 'error'}`}>
                  {nicknameMsg}
                </span>
              )}
            </StMsg>
          </div>

          <div>
            <div>비밀번호</div>
            <div>
              <input
                onChange={onChangePassword}
                name="password"
                type="password"
                placeholder="password"
                autoComplete="off"
              />
            </div>
            <StMsg>
              {password.length > 0 && (
                <span className={`message ${isPassword ? 'success' : 'error'}`}>
                  {passwordMsg}
                </span>
              )}
            </StMsg>
          </div>

          <div>
            <div>비밀번호확인</div>
            <div>
              <input
                onChange={onChangePasswordConfirm}
                name="passwordConfirm"
                type="password"
                autoComplete="off"
                placeholder="password confirm"
              />
            </div>
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
          </div>

          <div>
            <button type="button" onClick={onSubmit}>
              회원가입하기
            </button>
          </div>
          <div>----------or----------</div>
          <button type="button">카카오톡으로 로그인</button>
        </div>
      </div>
    </StWrapper>
  );
}

export default SignUp;

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

const StWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
