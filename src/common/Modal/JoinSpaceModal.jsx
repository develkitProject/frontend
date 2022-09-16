import React, { useRef, useCallback } from 'react';

import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import useOutSideClick from '../hooks/useOutSideClick';
import error_outline from '../../asset/img/error_outline.svg';
import { useDispatch } from 'react-redux';
import { setIsLoginModal, setIsSignUpModal } from '../../redux/modules/global';
import KakaoIcon from '../../asset/img/kakaoIcon.png';
import { StAlert } from './error';

const JoinSpaceModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <StProejct>이 워크스페이스에 참여하시겠습니까?</StProejct>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default JoinSpaceModal;

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
  width: 700px;
  height: 400px;
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

const StProejct = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: #00a99d;
`;
