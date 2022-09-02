import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { setAccessToken } from '../Cookie';

function Login() {
  const navigate = useNavigate();
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');

  const onClickLogin = async () => {
    if (username === '') {
      return window.alert('아이디 입력하세요.');
    }
    if (password === '') {
      return window.alert('비밀번호를 입력하세요.');
    }
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://hosung.shop/api/members/login',
        data: {
          username,
          password,
        },
      });

      if (res.data.success === false) {
        alert('아이디 또는 비밀번호를 확인해주세요.');
        // window.location.reload()
      } else {
        setAccessToken(res.headers.authorization);
        alert('로그인완료!');
        // setRefreshToken(res.headers['refresh-token'])
        navigate('/');
        window.location.reload();
      }
    } catch (err) {
      alert('회원정보가 일치하지 않습니다.');
      return console.log(err);
    }
    return null;
  };
  return (
    <StWrapper>
      <StLoginBox>
        {/* <StImgBox></StImgBox> */}
        <span style={{ fontSize: '40px' }}>D.Velkit!</span>
        <StInputBox
          name='username'
          placeholder='ID'
          onChange={(event) => {
            SetUsername(event.target.value);
          }}
        />
        <StInputBox
          type='password'
          name='password'
          placeholder='비밀번호'
          onChange={(event) => {
            SetPassword(event.target.value);
          }}
        />
        <StButton
          onClick={() => {
            onClickLogin();
          }}
        >
          로그인
        </StButton>
      </StLoginBox>
      <StSignupBox>
        계정이없으신가요?
        <span
          role='presentation'
          style={{
            color: '#0095f6',
            marginLeft: '20px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate('/signup');
          }}
        >
          가입하기 버튼
        </span>
      </StSignupBox>
    </StWrapper>
  );
}

export default Login;

const StWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StLoginBox = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  border: 1px solid #bababa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StSignupBox = styled.div`
  width: 400px;
  margin-top: 30px;
  height: 10vh;
  background-color: white;
  border: 1px solid #bababa;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const StInputBox = styled.input`
  width: 70%;
  height: 35px;
  margin-top: 10px;
  background-color: #fafafa;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  &:focus,
  &:active {
    outline: none;
  }
  padding-left: 10px;
`;

const StButton = styled.button`
  width: 70%;
  height: 35px;
  margin-top: 30px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 18px;
  background-color: #0095f6;
`;
