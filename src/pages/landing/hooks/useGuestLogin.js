import axios from 'axios';
import { loginApi } from '../../../account/data/login';
import { getCookieToken, setAccessToken } from '../../../Cookie';

export default function useGuestLogin() {
  const cookies = getCookieToken();
  const API_URL = `${process.env.REACT_APP_BASE_URL}/api/members/guest`;

  const guestLogin = async () => {
    const response = await axios.get(API_URL);
    const { username } = response.data.data;
    const password = `${username.split('@')[0]}!`;

    loginApi({ username, password })
      .then((res) => {
        if (res.data.success === false) {
          alert('아이디 또는 비밀번호를 확인해주세요.');
        } else {
          setAccessToken(res.headers.authorization);
          alert('게스트 로그인이 완료되었습니다! 반가워요');
          window.location.reload();
        }
      })
      .catch((err) => {
        alert('아이디 또는 비밀번호를 확인해주세요!');
      });
  };

  return {
    guestLogin,
    cookies,
  };
}
