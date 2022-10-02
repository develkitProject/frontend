import React, { useCallback, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import velkit from '../../common/img/velkit.png';
import BasicInput from '../../common/elements/BasicInput';
import {
  useDeleteUserInfoMutation,
  useUpdateUserInfoMutation,
} from '../../redux/modules/user';
import { removeUser } from '../../Cookie';

function MyPage2({ user }) {
  const [updateUserInfo] = useUpdateUserInfoMutation();

  const userNickname = user?.data.nickname;
  const userImg = user?.data.profileImageUrl;

  const imgRef = useRef('');
  const [imageUrl, setImageUrl] = useState(null);
  const [imgFile, setImgFile] = useState('');
  const [nickname, setNickname] = useState(user?.nickname);

  const onChange = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const [deleteUserInfos] = useDeleteUserInfoMutation();
  const deleteUserInfo = () => {
    if (window.confirm('정말 탈퇴하시겠습니까?')) {
      deleteUserInfos();
      removeUser();
      window.location.href = '/';
    }
  };

  const handleSubmit = () => {
    if (!nickname || (nickname.length <= 8 && nickname.length >= 2)) {
      const updateInfo = {
        profileImageUrl: imageUrl,
        nickname,
      };
      updateUserInfo(updateInfo);
      window.alert('회원정보가 수정되었습니다!');
      // window.location.reload();
    } else {
      window.alert('닉네임은 2~8글자여야합니다.');
    }
  };

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef?.current?.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      setImgFile(file);
    };
  };
  return (
    <StWrapper>
      <StProfile>
        <StSpan>나의 프로필</StSpan>
        <StImage
          profileImageUrl={imageUrl || userImg}
          onClick={() => imgRef.current.click()}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            width: '100%',
          }}
        >
          <StEmail fontSize="20px" fontColor="#000000" fontWeight="500">
            {nickname || userNickname}
          </StEmail>
          <StEmail fontSize="18px" fontColor="#999999" fontWeight="400">
            {user?.data.username}
          </StEmail>
        </div>
        <StChange onClick={deleteUserInfo}>회원탈퇴</StChange>
      </StProfile>

      <StDetail>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '50px',
          }}
        >
          <StSpan style={{ marginTop: '50px' }}>프로필 상세보기</StSpan>
          <BasicInput
            type="text"
            label="닉네임"
            marginTop="80px"
            onChange={onChange}
            name="nickname"
            // value={user?.nickname}
            placeholder={userNickname}
            maxLength="8"
          />

          <fieldset disabled>
            <BasicInput
              label="이메일"
              marginTop="40px"
              placeholder={user?.data.username}
            />
          </fieldset>

          <StButton onClick={handleSubmit}>변경사항 저장</StButton>
          <StVelkit />
        </div>
      </StDetail>

      {/* {imageUrl ? <StImgTag src={imageUrl} /> : null} */}

      <input
        style={{ display: 'none' }}
        accept="image/*"
        id="upload-photo"
        name="upload-photo"
        type="file"
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
  width: 30%;
  min-width: 300px;
  max-width: 600px;
  margin-left: 50px;
  height: 550px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  /* position: relative; */
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
  cursor: pointer;
`;

const StEmail = styled.span`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
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

const StDetail = styled.div`
  width: 60%;
  min-width: 680px;
  height: 550px;
  background-color: #ffffff;
  border: none;
  box-shadow: 12px 16px 30px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
`;

const StButton = styled.button`
  background-color: #000000;
  margin-top: 50px;
  /* width: ${(props) => props.width}; */
  width: 200px;
  height: 50px;
  border-radius: 8px;
  border: 0px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  /* letter-spacing: -1px; */
  cursor: pointer;
`;

const move = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-25px);
    }
    100% {
      transform: translateY(0);
    }
  `;

const StVelkit = styled.div`
  width: 15%;
  height: 25%;
  min-width: 250px;
  min-height: 200px;
  background-image: url(${velkit});
  background-size: 100% 100%;
  position: absolute;
  left: 75%;
  top: 35%;
  animation: ${move} 2s 0s infinite;
`;
