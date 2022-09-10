import React, { useRef, useState, useReducer } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';

const InfoModal = ({ onClose }) => {
  const imgRef = useRef('');
  const [imageUrl, setImageUrl] = useState(null);

  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}></ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default InfoModal;

const ModalWrap = styled.div`
  width: 180px;
  height: 300px;
  border-radius: 8px;
  position: absolute;

  transform: translate(-50%, -50%);
  background-color: #ffffff;
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
  /* background: rgba(0, 0, 0, 0.2); */
  z-index: 9999;
`;
