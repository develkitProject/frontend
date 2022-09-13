import React, { useCallback, useState, useRef } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import useGetUser from '../common/hooks/useGetUser';

import { getCookieToken } from '../Cookie';

function MyPage2() {
  const imgRef = useRef('');
  const [imageUrl, setImageUrl] = useState(null);
  const [imgFile, setImgFile] = useState('');

  const { user } = useGetUser();
  // let objcopy:userType= {};

  // objcopy = { ...user };

  // if (objcopy === undefined) {
  //   return (
  //     <div>
  //       d
  //     </div>
  //   );
  // }

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef?.current?.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      setImgFile(file);
    };
  };

  const [nickname, setNickname] = useState('');
  const onChange = useCallback((e) => {
    // let { value } = {...e.target}
    // setNickname(value)
    setNickname(e.target.value);
  }, []);

  const addpost = async (newList) => {
    const response = await axios.post(
      'https://hosung.shop/api/members/profile',
      newList,
      {
        headers: {
          Authorization: getCookieToken(),
        },
      }
    );

    return response.data;
  };

  return (
    <StWrapper>
      <StProfile>
        <StSpan>나의 프로필</StSpan>
        <StImage profileImageUrl={user?.profileImageUrl} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            width: '100%',
          }}
        >
          <StEmail fs={'20px'} fc={'#000000'} fw={'500'}>
            {user?.nickname}
          </StEmail>
          <StEmail fs={'18px'} fc={'#999999'} fw={'400'}>
            {user?.username}
          </StEmail>
        </div>
        <StChange>회원탈퇴</StChange>
      </StProfile>

      <StDetail></StDetail>

      {imageUrl ? <StImgTag src={imageUrl} /> : null}

      <input
        style={{ display: 'none' }}
        accept='image/*'
        id='upload-photo'
        name='upload-photo'
        type='file'
        onChange={onChangeImage}
        ref={imgRef}
      />
      {/* <STImageButton onClick={() => imgRef.current.click()}>
        프로필 변경
      </STImageButton> */}
    </StWrapper>
  );
}

export default MyPage2;

const StWrapper = styled.div`
  width: 100%;
  height: 75vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-weight: 600;
  font-size: 20px;
`;

const StProfile = styled.div`
  width: 40%;
  min-width: 400px;
  max-width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  box-shadow: 12px 16px 10px rgba(0, 0, 0, 0.1);
`;

const StSpan = styled.span`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 20px;
`;

const StImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100px;
  background-size: 100% 100%;
  background-image: url(${(props) => props.profileImageUrl});
  margin-top: 30px;
`;

const StEmail = styled.span`
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  color: ${(props) => props.fc};
  margin-top: 15px;
  letter-spacing: -0.8px;
`;

const StChange = styled.span`
  width: 13%;
  min-width: 60px;
  height: 20px;
  margin-top: 100px;
  font-size: 17px;
  cursor: pointer;
  font-weight: 200;
  color: grey;
  border-bottom: 1px solid grey;
`;

const StImgTag = styled.img`
  width: 300px;
  height: 350px;
`;

const StDetail = styled.div`
  width: 60%;
  min-width: 600px;
  height: 600px;
  background-color: #ffffff;
  border: none;
  box-shadow: 12px 16px 30px rgba(0, 0, 0, 0.1);
`;
