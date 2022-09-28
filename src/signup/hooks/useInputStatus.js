import { useEffect, useState } from 'react';
import { useGetEmailCheckMutation } from '../../redux/query/signup';

const emailCheckReg =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const passwordCheckReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

export default function useInputStatus({ signUpInputs }) {
  const { nickname, email, password, passwordConfirm } = signUpInputs;

  const [getEmailCheck, { data }] = useGetEmailCheckMutation();

  const [successStatus, setSuccessStatus] = useState({
    isNickname: null,
    isEmail: null,
    isPassword: null,
    isPasswordConfirm: null,
  });

  const [errorStatus, setErrorStatus] = useState({
    isNickname: null,
    isEmail: null,
    isPassword: null,
    isPasswordConfirm: null,
  });

  useEffect(() => {
    if (nickname.length < 1) return;
    if (nickname.length < 2 || nickname.length > 8) {
      setErrorStatus({ ...errorStatus, isNickname: true });
      setSuccessStatus({ ...successStatus, isNickname: false });
    } else {
      setErrorStatus({ ...errorStatus, isNickname: false });
      setSuccessStatus({ ...successStatus, isNickname: true });
    }
  }, [nickname]);

  useEffect(() => {
    if (email.length < 4) return;
    getEmailCheck({ email });
    if (!emailCheckReg.test(email)) {
      setErrorStatus({ ...errorStatus, isEmail: true });
      setSuccessStatus({ ...successStatus, isEmail: false });
    } else {
      setErrorStatus({ ...errorStatus, isEmail: false });
      setSuccessStatus({ ...successStatus, isEmail: true });
    }
  }, [email]);

  useEffect(() => {
    if (password.length >= 2)
      if (!passwordCheckReg.test(password)) {
        setErrorStatus({ ...errorStatus, isPassword: true });
        setSuccessStatus({ ...successStatus, isPassword: false });
      } else {
        setErrorStatus({ ...errorStatus, isPassword: false });
        setSuccessStatus({ ...successStatus, isPassword: true });
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
