import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Circle from '../common/elements/Circle';
import { setAccessToken } from '../Cookie';

axios.defaults.withCredentials = true;

function KaKao() {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const kakao = async () => {
      return await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/user/kakao/callback?code=${code}`,
        )
        .then((res) => setAccessToken(res.headers.authorization))
        .then(() => {
          navigate('/');
          window.location.reload();
        });
    };
    if (code) {
      kakao();
    }
  }, [code, navigate]);

  return (
    <StContainer>
      <Circle />
    </StContainer>
  );
}

export default KaKao;

const StContainer = styled.div`
  width: 100%;
  height: 70vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
