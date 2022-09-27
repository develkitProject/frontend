import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

  return <div>카카오페이지입니다.</div>;
}

export default KaKao;
