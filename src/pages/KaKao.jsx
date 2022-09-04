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
        .get(`http://hosung.shop/user/kakao/callback?code=${code}`)
        .then((res) => {
          setAccessToken(res.headers.authorization);
          navigate('/workspace');
        });
    };
    if (code) {
      kakao(code);
    }
  }, [code]);

  return <div>카카오페이지입니다.</div>;
};

export default KaKao;
