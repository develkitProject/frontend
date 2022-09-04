import React, { useCallback, useState, useRef } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import useGetUser from '../hooks/useGetUser';

import { getCookieToken } from '../Cookie';

function MyPage() {
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

  console.log(user);
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

  const onSubmit = () => {
    const obj = {
      profileImageUrl: imageUrl,
      nickname,
    };
    addpost(obj);
    alert('등록완료!');
    // window.location.reload();
  };

  const addpost = async (newList) => {
    const response = await axios.post(
      'http://hosung.shop/api/members/profile',
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
        <StSpan>프로필 관리</StSpan>
        <StImage profileImageUrl={user?.profileImageUrl} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            width: '100%',
          }}
        >
          <StEmail>이메일 :{user?.username}</StEmail>
          <StEmail>
            닉네임 :
            <StInput
              type='text'
              placeholder={user?.nickname}
              onChange={onChange}
            />
          </StEmail>
        </div>
        <StChange onClick={onSubmit}>회원 정보 수정</StChange>
      </StProfile>

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
      <STImageButton onClick={() => imgRef.current.click()}>
        프로필 변경
      </STImageButton>
    </StWrapper>
  );
}

export default MyPage;

const StWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  font-size: 20px;
`;

const StProfile = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: #e4e4e4;
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
  margin-top: 20px;
`;

const StEmail = styled.span`
  font-weight: 500;
  font-size: 20px;
  margin-top: 20px;
`;

const StInput = styled.input`
  width: 180px;
  height: 40px;
  border: none;
  font-size: 17px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const StChange = styled.button`
  width: 70%;
  height: 50px;
  background-color: #c0c0c0;
  border: none;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const StImgTag = styled.img`
  width: 300px;
  height: 350px;
`;

const STImageButton = styled.button`
  background: #456d87;
  border: none;
  color: white;
  font-size: 13px;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
`;
