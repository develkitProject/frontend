import { useEffect, useState } from 'react';

import axios from 'axios';

import { getCookieToken } from '../../Cookie';

const useGetUser = () => {
  const [user, setUser] = useState([]);
  const API_URL = `${process.env.REACT_APP_BASE_URL}/api/members/profile`;

  const readUser = async () => {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: getCookieToken(),
      },
    });
    setUser(response.data.data);
  };

  useEffect(() => {
    readUser();
  }, []);

  return { user, readUser, setUser };
};

export default useGetUser;
