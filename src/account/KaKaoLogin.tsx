import React from 'react';
import styled from 'styled-components';
import KakaoIcon from '../common/img/kakaoIcon.png';

const { Kakao }: Window = window;
const loginWithKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: 'https://d-velkit.com/kakao',
  });
};

type Props = {
  onClick: () => void;
};

function KakaoLogin({ onClick }: Props) {
  return (
    <div
      style={{
        width: '100%',
        marginTop: '10px',
        borderRadius: '35px',
        height: '100%',
      }}
    >
      <div role="presentation" onClick={loginWithKakao}>
        <StKaKaoLoginButton>
          <StIcon src={KakaoIcon} />
          카카오계정으로 로그인
        </StKaKaoLoginButton>
      </div>
    </div>
  );
}

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
