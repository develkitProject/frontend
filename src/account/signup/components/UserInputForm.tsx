import React, { ChangeEventHandler, FormEvent } from 'react';

import BasicInput from '../../../common/elements/BasicInput';
import Icon from '../../../common/elements/Icon';
import useModalOverlay from '../hooks/useModalOverlay';
import { IState } from '../hooks/useInputStatus';
import PasswordInfo from './passwordInfo';

interface FunctionProps {
  errorStatus: IState;
  successStatus: IState;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

function UserInputForm({
  onChange,
  errorStatus,
  successStatus,
}: FunctionProps) {
  const { isOpen, toggle } = useModalOverlay();

  return (
    <form>
      <BasicInput
        marginTop="20px"
        label="닉네임"
        name="nickname"
        errorText="2~8글자 내외(한글, 영어, 숫자)로 입력해주세요."
        isSuccess={successStatus.isNickname}
        isError={errorStatus.isNickname}
        placeholder="닉네임"
        onChange={onChange}
        marginBottom=""
      />
      <BasicInput
        marginTop="20px"
        label="이메일"
        name="email"
        isSuccess={successStatus.isEmail}
        isError={errorStatus.isEmail}
        errorText="이메일 형식이 아니거나 중복되었습니다!"
        placeholder="이메일을 입력해주세요!"
        onChange={onChange}
        marginBottom=""
      />
      <div>
        <BasicInput
          marginTop="20px"
          label={
            <>
              비밀번호 <Icon.PasswordInfo onClick={toggle} />
            </>
          }
          type="password"
          name="password"
          isSuccess={successStatus.isPassword}
          isError={errorStatus.isPassword}
          placeholder="비밀번호를 입력해주세요!"
          errorText="비밀번호는 8~20자 내외로 영어+숫자+특수문자 조합입니다."
          onChange={onChange}
          marginBottom=""
        />
        <PasswordInfo isOpen={isOpen} />
      </div>
      <BasicInput
        marginTop="20px"
        marginBottom="30px"
        label="비밀번호 확인"
        type="password"
        name="passwordConfirm"
        isSuccess={successStatus.isPasswordConfirm}
        isError={errorStatus.isPasswordConfirm}
        errorText="비밀번호를 다시 확인해주세요"
        placeholder="비밀번호를 한번 더 입력해주세요!"
        onChange={onChange}
      />
    </form>
  );
}

export default React.memo(UserInputForm);
