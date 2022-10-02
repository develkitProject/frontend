import React, { useCallback, useState, useRef } from 'react';
import BasicInput from '../../../common/elements/BasicInput';
import {
  useDeleteUserInfoMutation,
  useUpdateUserInfoMutation,
} from '../../../redux/modules/user';
import { removeUser } from '../../../Cookie';

import * as S from '../style';
import useChangeImage from '../hooks/useChangeImage';

function MyPage2({ user }) {
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const { onChangeImage, imageUrl } = useChangeImage();
  const userNickname = user?.data.nickname;
  const userImg = user?.data.profileImageUrl;

  const imgRef = useRef('');
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

  // const onChangeImage = () => {
  //   const reader = new FileReader();
  //   const file = imgRef?.current?.files[0];
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImageUrl(reader.result);
  //   };
  // };
  return (
    <S.StWrapper>
      <S.StProfile>
        <S.StSpan>나의 프로필</S.StSpan>
        <S.StImage
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
          <S.StEmail fontSize="20px" fontColor="#000000" fontWeight="500">
            {nickname || userNickname}
          </S.StEmail>
          <S.StEmail fontSize="18px" fontColor="#999999" fontWeight="400">
            {user?.data.username}
          </S.StEmail>
        </div>
        <S.StChange onClick={deleteUserInfo}>회원탈퇴</S.StChange>
      </S.StProfile>

      <S.StDetail>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '50px',
          }}
        >
          <S.StSpan style={{ marginTop: '50px' }}>프로필 상세보기</S.StSpan>
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

          <S.StButton onClick={handleSubmit}>변경사항 저장</S.StButton>
          <S.StVelkit />
        </div>
      </S.StDetail>

      {/* {imageUrl ? <StImgTag src={imageUrl} /> : null} */}

      <input
        style={{ display: 'none' }}
        accept="image/*"
        id="upload-photo"
        name="upload-photo"
        type="file"
        onChange={() => {
          onChangeImage(imgRef);
        }}
        ref={imgRef}
      />
    </S.StWrapper>
  );
}

export default MyPage2;
