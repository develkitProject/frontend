import { useEffect, useState } from 'react';
import { useGetEmailCheckMutation } from '../../../redux/query/account';

interface IProps {
  signUpInputs: {
    nickname: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };
}

export interface IState {
  isNickname: boolean | null;
  isEmail: boolean | null;
  isPassword: boolean | null;
  isPasswordConfirm: boolean | null;
}

const emailCheckReg =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const passwordCheckReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

export default function useInputStatus({ signUpInputs }: IProps) {
  const { nickname, email, password, passwordConfirm } = signUpInputs;

  const [getEmailCheck, { data }] = useGetEmailCheckMutation();

  const [successStatus, setSuccessStatus] = useState<IState>({
    isNickname: null,
    isEmail: null,
    isPassword: null,
    isPasswordConfirm: null,
  });

  const [errorStatus, setErrorStatus] = useState<IState>({
    isNickname: null,
    isEmail: null,
    isPassword: null,
    isPasswordConfirm: null,
  });

  useEffect(() => {
    if (nickname!.length < 1) return;
    if (nickname!.length < 2 || nickname!.length > 8) {
      setErrorStatus({ ...errorStatus, isNickname: true });
      setSuccessStatus({ ...successStatus, isNickname: false });
    } else {
      setErrorStatus({ ...errorStatus, isNickname: false });
      setSuccessStatus({ ...successStatus, isNickname: true });
    }
  }, [nickname]);

  useEffect(() => {
    if (email.length < 4) return;
    getEmailCheck({ email }).then((res: any) => {
      if (!emailCheckReg.test(email)) {
        setErrorStatus({ ...errorStatus, isEmail: true });
        setSuccessStatus({ ...successStatus, isEmail: false });
      } else if (emailCheckReg.test(email) && !res.data.success) {
        setErrorStatus({ ...errorStatus, isEmail: true });
        setSuccessStatus({ ...successStatus, isEmail: false });
      } else if (emailCheckReg.test(email) && res.data.success) {
        setErrorStatus({ ...errorStatus, isEmail: false });
        setSuccessStatus({ ...successStatus, isEmail: true });
      }
    });
  }, [email]);

  useEffect(() => {
    if (password.length >= 5) {
      if (passwordCheckReg.test(password)) {
        setErrorStatus({ ...errorStatus, isPassword: false });
        setSuccessStatus({ ...successStatus, isPassword: true });
      } else {
        setErrorStatus({ ...errorStatus, isPassword: true });
        setSuccessStatus({ ...successStatus, isPassword: false });
      }
    } else {
      setErrorStatus({ ...errorStatus, isPassword: null });
      setSuccessStatus({ ...successStatus, isPassword: null });
    }
  }, [password]);

  useEffect(() => {
    if (passwordConfirm.length >= 8) {
      if (password === passwordConfirm) {
        setErrorStatus({ ...errorStatus, isPasswordConfirm: false });
        setSuccessStatus({ ...successStatus, isPasswordConfirm: true });
      } else {
        setErrorStatus({ ...errorStatus, isPasswordConfirm: true });
        setSuccessStatus({ ...successStatus, isPasswordConfirm: false });
      }
    }
  }, [passwordConfirm, password]);

  return {
    successStatus,
    errorStatus,
  };
}
