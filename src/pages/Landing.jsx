import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginModal from '../Modal/LoginModal';

function Landing() {
  const navigate = useNavigate();

  return (
    <StWrapper>
      <div>D.Velkit 랜딩페이지</div>
      <StLogin>로그인하기</StLogin>
    </StWrapper>
  );
}

export default Landing;

const StWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  font-size: 20px;
`;

const StLogin = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 50px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  color: red;
  font-weight: 700;
  font-family: 'Noto Sans KR', sans-serif;
`;
