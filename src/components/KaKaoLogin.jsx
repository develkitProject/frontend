import React from 'react';
import styled from 'styled-components';
import KakaoIcon from '../asset/img/kakaoIcon.png';

const { Kakao } = window;
const loginWithKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: 'https://d-velkit.com/kakao',
  });
};

const KakaoLogin = () => {
  return (
    <div
      style={{
        width: '100%',
        marginTop: '10px',
        borderRadius: '35px',
        height: '100%',
      }}
    >
      <a onClick={loginWithKakao}>
        <StKaKaoLoginButton>
          <StIcon src={KakaoIcon} />
          카카오계정으로 로그인
        </StKaKaoLoginButton>

        {/* <img
          art='kakao login'
          src='//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg'
          style={{ width: '100%', height: '75%', cursor: 'pointer' }}
        /> */}
      </a>
    </div>
  );
};

export default KakaoLogin;

const StKaKaoLoginButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 24px;
  background-color: #ffe502;
  color: #3b1e1e;
  font-size: 15px;
  font-weight: 700;
  border: none;
  cursor: pointer; ;
`;

const StIcon = styled.img`
  margin-right: 5px;
  width: 6.3%;
`;
