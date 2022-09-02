import React from 'react';

import { StWrapper, StLoginBox, StSignupBox, StInputBox, StButton  } from './style';

import useInputLogin from './hooks/useInputLogin';

export default function Login() {
  const {
      goSignUp,
      onClickLogin,
      onChangeUserInputs,
    } = useInputLogin();

  return (
    <StWrapper>
      <StLoginBox>
        <span style={{ fontSize: '40px' }}>D.Velkit!</span>
        <StInputBox
          name='username'
          placeholder='ID'
          onChange={onChangeUserInputs}
        />
        <StInputBox
          type='password'
          name='password'
          placeholder='비밀번호'
          onChange={onChangeUserInputs}
        />
        <StButton
          onClick={onClickLogin}
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
          onClick={goSignUp}
        >
          가입하기 버튼
        </span>
      </StSignupBox>
    </StWrapper>
  );
}
