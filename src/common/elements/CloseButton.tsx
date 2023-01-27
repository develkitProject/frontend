import React, { ReactEventHandler } from 'react';

import styled from 'styled-components';

interface OnClose {
  onClose: ReactEventHandler;
}

export default function CloseButton({ onClose }: OnClose) {
  return (
    <>
      <XButton onClick={onClose} type="button">
        X
      </XButton>
    </>
  );
}

const XButton = styled.button`
  position: absolute;
  background-color: white;
  border: none;
  font-weight: 600;
  font-size: 20px;
  top: 15px;
  right: 15px;
  color: #323232;
  cursor: pointer;
  font-family: 'Montserrat';
`;
