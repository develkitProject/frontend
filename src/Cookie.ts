import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setAccessToken = (accessToken: string | undefined) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);
  return cookies.set('user_token', accessToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => cookies.get('user_token');

export const removeCookieToken = () => {
  alert('로그아웃되었습니다');
  return cookies.remove('user_token', { sameSite: 'strict', path: '/' });
};

export const removeUser = () => {
  alert('회원탈퇴되었습니다');
  return cookies.remove('user_token', { sameSite: 'strict', path: '/' });
};
