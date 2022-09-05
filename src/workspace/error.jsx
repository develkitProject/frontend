import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ModalContainer from '../Modal/ModalContainer';
import useOutSideClick from '../hooks/useOutSideClick';

const WorkSpaceErrorModal = ({ onClose }) => {

  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);

  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default WorkSpaceErrorModal;

const ModalWrap = styled.div`
  width: 464px;
  height: 750px;
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

const LoginWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #00a99d;
  margin-bottom: 20px;
  color: white;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;

export const StMent = styled.span`
  color: ${(props) => props.fc};
  font-family: 'Consolas';
  font-size: 22px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
`;

const StMsg = styled.div`
  text-align: left;
  padding-left: 20px;
  font-weight: 0;
  font-size: 0.8rem;
  line-height: 24px;
  letter-spacing: -1px;
  position: relative;
  top: -5px;
  bottom: -10px;
  left: 0;
  .message {
    &.success {
      color: #8f8c8b;
    }
    &.error {
      color: #ff2727;
    }
  }
`;
