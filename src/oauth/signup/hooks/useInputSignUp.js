import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setIsLoginModal,
  setIsSignUpModal,
} from '../../../redux/modules/global';
import { useGetSignUpMutation } from '../../../redux/query/account';

export default function useInputSignUp() {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(0);
  const [signUpInputs, setSignUpInputs] = useState({
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [getSignUp, { data, isSuccess, isFail }] = useGetSignUpMutation();

  const onChangeSignUpInputs = useCallback(
    (e) => {
      const { name, value } = e.target;

      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(async () => {
        try {
          setSignUpInputs({
            ...signUpInputs,
            [name]: value,
          });
        } catch {
          alert('에러가 발생했습니다.다시 시도해주세요');
        }
      }, 800);
      setTimer(newTimer);
    },
    [signUpInputs],
  );

  const handleSignUp = useCallback(() => {
    const { nickname, email, password } = signUpInputs;
    getSignUp({
      username: email,
      nickname,
      password,
    });
  }, [getSignUp, signUpInputs]);

  useEffect(() => {
    if (isSuccess) {
      if (data.success === true) {
        alert('회원가입에 성공하셨습니다.');
        dispatch(setIsLoginModal(true));
        dispatch(setIsSignUpModal(false));
      }
    }
    if (isFail) {
      alert('회원가입에 실패했습니다. 다시 시도해주세요');
    }
  }, [data]);

  return {
    signUpInputs,
    onChangeSignUpInputs,
    handleSignUp,
  };
}
