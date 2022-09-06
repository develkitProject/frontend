import React, { useRef, useEffect, useState } from 'react';

import styled from 'styled-components';
import ModalContainer from '../Modal/ModalContainer';
import useOutSideClick from '../hooks/useOutSideClick';
import error_outline from '../img/error_outline.svg';

const WorkSpaceErrorModal = ({ onClose }) => {

  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };
  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
            <StAlert fw="bold" fs="28px" fc="#00a99d"><StErrorImg src={error_outline}/>로그인을 해주세요!</StAlert>
            <StAlert fs="16px" fc="#626262">성장하는 사람들을 위한 프로젝트 협업 서비스 디벨킷</StAlert>
            <StButton bc="#00a99d">로그인</StButton>
            <StMent>
                <StAlert fs="16px" fc="#999">디벨킷에 처음인가요?</StAlert>
                <StAlert fs="16px" fc="#00a99d" 
                style={{marginLeft: "10px", textDecoration: "underline", cursor: "pointer"}}>회원가입하기</StAlert>
            </StMent>
            <StMent>
                    <StLine></StLine>
                    <StAlert fs="12px" fc="#d9d9d9">또는</StAlert><StLine></StLine>
            </StMent>
            <StButton bc="#ffe502" style={{color: "black"}}>카카오계정으로 로그인</StButton>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default WorkSpaceErrorModal;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 560px;
  height: 340px;
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
`;

const StAlert = styled.div`
  letter-spacing: -1.5px;
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  color: ${(props) => props.fc};
  margin-top: 10px;
  margin-bottom: 10px;
`;


export const StButton = styled.button`
  width: 60%;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.bc};
  margin-top: 15px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const StMent = styled.div`
  width: 60%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const StLine = styled.hr`
height: 0.1px;
width: 35%;
background-color:"#d9d9d9";
`;

const StErrorImg = styled.img`
margin-right: 5px;
`;