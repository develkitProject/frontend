import { useState, useCallback } from 'react';
import { useGetSignUpMutation } from '../../redux/query/signup';

export default function useInputSignUp() {
  const [signUpInputs, setSignUpInputs] = useState({
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

    const [getSignUp, { data }] = useGetSignUpMutation()

  const onChangeSignUpInputs = useCallback(
    (e) => {
      const { name, value } = e.target;
      setSignUpInputs({
        ...signUpInputs,
        [name]: value,
      });
    },
    [signUpInputs]
  );

    const handleSignUp = useCallback(() => {
        const { nickname, email, password } = signUpInputs;
        getSignUp({
            username: email,
            nickname,
            password,
        })
    }, [getSignUp, signUpInputs])

    return {
        signUpInputs,
        onChangeSignUpInputs,
        handleSignUp
    }
}
