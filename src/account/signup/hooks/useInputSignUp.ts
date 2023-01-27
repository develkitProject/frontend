import {
  useState,
  useCallback,
  ReactEventHandler,
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
} from 'react';
import { useDispatch } from 'react-redux';
import {
  setIsLoginModal,
  setIsSignUpModal,
} from '../../../redux/modules/global';
import { useGetSignUpMutation } from '../../../redux/query/account';

export default function useInputSignUp() {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState<number>(0);
  const [signUpInputs, setSignUpInputs] = useState({
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [getSignUp, { error, isLoading }] = useGetSignUpMutation();

  const onChangeSignUpInputs = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const { name, value } = e.target as HTMLInputElement;

      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = window.setTimeout(async () => {
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

  //     data :
  // {username: "fbgus3333333@dd.do", profileImage: null}

  const handleSignUp = useCallback(() => {
    const { nickname, email, password } = signUpInputs;
    getSignUp({
      username: email,
      nickname,
      password,
    }).then((res: any) => {
      if (res.data) {
        alert('회원가입에 성공하셨습니다. 환영합니다!');
        dispatch(setIsLoginModal(true));
        dispatch(setIsSignUpModal(false));
      } else {
        alert('회원가입에 실패했습니다. 다시시도해주세요!');
      }
    });
  }, [getSignUp, signUpInputs]);

  return {
    signUpInputs,
    onChangeSignUpInputs,
    handleSignUp,
  };
}
