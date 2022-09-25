import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import useGetUser from '../hooks/useGetUser';
import { removeCookieToken } from '../../Cookie';
import { useNavigate } from 'react-router-dom';
import useOutSideClick from '../hooks/useOutSideClick';
import Draggable from 'react-draggable';

const MyProfileModal = ({ onClose, userData }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const logout = () => {
    removeCookieToken();
    window.location.href = '/';
  };

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const moveAndClose = useCallback(() => {
    navigate('/mypage');
    handleClose();
  });

  useOutSideClick(modalRef, handleClose);

  return (
    <ModalWrap ref={modalRef}>
      <StProfileWrap>
        <StDiv style={{ borderBottom: '1.2px solid #999999' }}>
          <StProfileImg src={userData?.profileImageUrl} />
          <StMent>{userData?.nickname}님</StMent>
        </StDiv>

        <StDiv>
          <StButton
            color='#00A99D'
            border='none'
            fontColor='#ffffff'
            onClick={moveAndClose}
          >
            마이페이지
          </StButton>
          <StButton
            bc='#999999'
            fc='#999999'
            onClick={() => {
              logout();
            }}
          >
            로그아웃
          </StButton>
        </StDiv>
      </StProfileWrap>
    </ModalWrap>
  );
};

export default MyProfileModal;

const ModalWrap = styled.div`
  width: 25vh;
  height: 38vh;
  position: absolute;
  margin-top: 45vh;
  margin-left: 75%;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #999999;
  z-index: 999;
`;

const StProfileWrap = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-bottom: 0px;
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
  margin-top: 15%;
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
  border: 1.5px solid ${(props) => props.bc};
  background-color: #ffffff;
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${(props) => props.fc};
  font-weight: 500;
  font-size: 1rem;
  line-height: 23px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.color};
    border: ${(props) => props.border};
    color: ${(props) => props.fontColor};
  }
`;
