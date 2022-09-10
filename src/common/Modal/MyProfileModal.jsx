import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import useOutSideClick from '../../common/hooks/useOutSideClick';
import useGetUser from '../hooks/useGetUser';
import { removeCookieToken } from '../../Cookie';
import { useNavigate } from 'react-router-dom';
import CloseButton from '../elements/CloseButton';

const MyProfileModal = ({ onClose }) => {
  const navigate = useNavigate();
  
  const modalRef = useRef(null);

  const handleClose = () => {
    onClose?.();
  };

  const { user } = useGetUser();

  // useOutSideClick(modalRef, handleClose);

  const logout = () => {
    removeCookieToken();
    window.location.href = '/';
  };

  return (
    <ModalContainer>
      <Overlay>

        <ModalWrap ref={modalRef}>
          <StProfileWrap>

            <StDiv style={{borderBottom: "1.2px solid #999999"}}>
                <StProfileImg src={user.profileImageUrl}/>
                <StMent>{user?.nickname}님</StMent>
            </StDiv>


            <StDiv>
                <StButton onClick={() => navigate('/mypage')}>마이페이지</StButton>
                <StButton onClick={() => {logout()}}>로그아웃</StButton>
            </StDiv>
                <CloseButton handleClose={handleClose}></CloseButton>
            </StProfileWrap>
        </ModalWrap>

      </Overlay>
    </ModalContainer>
  );
};

export default MyProfileModal;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background: rgba(0, 0, 0, 0.7); */
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 25vh;
  height: 38vh;
  position: absolute;
  margin-top: 10vh;
  margin-left: 82%;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StProfileWrap = styled.div`
  width: 95%;
  height:70%;
  display: flex;
  flex-direction: columm;
  justify-content: center;
  margin-bottom: 0px;
  background-color: red;
`;

export const StDiv = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  text-align: center;
  /* font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  color: ${(props) => props.fc}; */
`;

const StProfileImg = styled.img`
  margin-top: 10%;
  padding: 1%;
  width: 60px;
  height: 60px;
  border-radius: 70%;
`;

const StMent = styled.div`
  margin-top: 5%;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
`;

export const StButton = styled.button`
  width: 78%;
  height: 5.5vh;
  border-radius: 20px;
  border: 1.5px solid black;
  background-color: #FFFFFF;
  margin-top: 8px;
  margin-bottom: 8px;
  color:  ${(props) => props.fc};;
  font-weight: 500;
  font-size: 1rem;
  line-height: 23px;
  cursor: pointer;
`;

