import React from 'react';

const { Kakao } = window;
const loginWithKakao = () => {
  // console.log('hello');
  Kakao.Auth.authorize({
    redirectUri: 'http://localhost:3000/kakao',
  });
};

const KakaoLogin = () => {
  return (
    <div
      style={{
        width: '100%',
        marginTop: '30px',
        borderRadius: '35px',
        height: '100%',
      }}
    >
      <a onClick={loginWithKakao}>
        <img
          art='kakao login'
          src='//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg'
          style={{ width: '100%', height: '75%', cursor: 'pointer' }}
        />
      </a>
    </div>
  );
};

export default KakaoLogin;
