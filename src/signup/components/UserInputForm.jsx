import React from 'react';

import BasicInput from '../../components/BasicInput';

function UserInputForm({ onChange }) {
    return (
        <form>
            <BasicInput
              marginTop="20px"
              label="닉네임"
              name="nickname"
              placeholder='닉네임'
              // errorText="에러입니다"
              isSuccess
              onChange={onChange}
            />
            <BasicInput
              marginTop="20px"
              label="이메일"
              name='email'
              placeholder='이메일을 입력해주세요!'
              onChange={onChange}
            />
            <BasicInput
              marginTop="20px"
              label="비밀번호"
              type='password'
              name='password'
              placeholder='비밀번호를 입력해주세요!'
              onChange={onChange}
            />
            <BasicInput
              marginTop="20px"
              marginBottom="40px"
              label="비밀번호 확인"
              type='password'
              name='passwordConfirm'
              placeholder='비밀번호를 한번 더 입력해주세요!'
              onChange={onChange}
            />
        </form>
    )
}   

export default React.memo(UserInputForm)