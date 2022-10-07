import { useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../data/login';
import { setAccessToken } from '../../../Cookie';
import { SweetAlertHook } from '../../../common/elements/SweetAlert';

export default function useInputLogin() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const onChangeUserInputs = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs],
  );

  // eslint-disable-next-line consistent-return
  const onClickLogin = useCallback(() => {
    const { username, password } = inputs;
    if (username === '') {
      return window.alert('아이디를 입력하세요.');
    }
    if (password === '') {
      return window.alert('비밀번호를 입력하세요.');
    }
    loginApi({ username, password })
      .then((res) => {
        if (res.data.success === false) {
          SweetAlertHook(2000, 'error', '아이디 또는 비밀번호를 확인해주세요.');
        } else {
          setAccessToken(res.headers.authorization);
          alert('로그인완료!');
          navigate('/workspace');
          window.location.reload();
        }
      })
      .catch((err) => {
        SweetAlertHook(2000, 'error', '아이디 또는 비밀번호를 확인해주세요.');
      });
  }, [inputs, navigate]);

  return {
    onClickLogin,
    onChangeUserInputs,
  };
}
