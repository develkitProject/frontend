import React, { useRef, useState, useReducer } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import { StButton } from '../../login/style';
import imgupload from '../../asset/img/imgupload.svg';
import CloseButton from '../elements/CloseButton';
import Draggable from 'react-draggable';

import { useAddWorkSpacesMutation } from '../../redux/modules/workspaces';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const CreateSpaceModal = ({ onClose }) => {
  const imgRef = useRef('');
  const [imageUrl, setImageUrl] = useState(null);
  const [imgFile, setImgFile] = useState('');
  const [addWorkSpaces] = useAddWorkSpacesMutation();

  const [state, setState] = useReducer(reducer, {
    title: '',
    content: '',
  });

  const { title, content } = state;
  const onChange = (e) => {
    setState(e.target);
  };

  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  const handleSubmit = () => {
    if (title !== '' && content !== '') {
      const obj = {
        image: imageUrl,
        title,
        content,
      };
      addWorkSpaces(obj);
      window.alert('프로젝트가 생성되었습니다!');
      handleClose();
    } else {
      window.alert('프로젝트 제목과 소개를 모두 채워주세요!');
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
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <Wrapper>
            <StProejct>프로젝트 생성하기</StProejct>
            <StMent>
              프로젝트를 생성 후, 프로젝트 홈에서 초대코드를 복사할 수 있습니다.
            </StMent>
            <StInputTitle>커버 이미지</StInputTitle>
            <StImageBox
              src={imageUrl ? imageUrl : imgupload}
              onClick={() => imgRef.current.click()}
            ></StImageBox>
            <StInputTitle>프로젝트 이름</StInputTitle>
            <StInput
              onChange={onChange}
              name='title'
              placeholder='프로젝트명을 입력해주세요'
            ></StInput>
            <StInputTitle>프로젝트 소개</StInputTitle>
            <StInput
              onChange={onChange}
              name='content'
              placeholder='프로젝트를 소개해주세요'
            ></StInput>
            <StButton
              onClick={handleSubmit}
              style={{
                width: '75%',
                marginTop: '40px',
                height: '60px',
                fontSize: '20px',
              }}
            >
              프로젝트 생성하기
            </StButton>
          </Wrapper>
          <CloseButton handleClose={handleClose}>X</CloseButton>
          <input
            style={{ display: 'none' }}
            accept='image/*'
            id='upload-photo'
            name='upload-photo'
            type='file'
            onChange={onChangeImage}
            ref={imgRef}
          />
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default CreateSpaceModal;

const ModalWrap = styled.div`
  width: 650px;
  height: 700px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  width: 70%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const StProejct = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: #00a99d;
`;

const StMent = styled.span`
  font-size: 16px;
  color: #626262;
  margin-top: 20px;
  letter-spacing: -0.8px;
`;

const StInputTitle = styled.span`
  font-size: 16px;
  color: #999;
  margin-top: 40px;
  font-weight: 500;
  margin-right: 250px;
`;

const StImageBox = styled.img`
  width: 70%;
  height: 98px;
  border: 1px solid black;
  margin-top: 10px;
  border-radius: 15px;
  background-color: #dedede;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const StInput = styled.input`
  width: 65%;
  height: 60px;
  padding: 0px 0px 0px 18px;
  border-radius: 10px;
  border: solid 1px #999;
  margin-top: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
