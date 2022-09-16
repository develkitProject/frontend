import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAccessToken } from '../Cookie';
import axios from 'axios';

axios.defaults.withCredentials = true;

const KaKao = () => {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const kakao = async () => {
      return await axios
        .get(`https://hosung.shop/user/kakao/callback?code=${code}`)
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
};

export default KaKao;
