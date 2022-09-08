import React from 'react';

import styled from 'styled-components';

export default function CloseButton({ handleClose }) {
  return (
    <>
      <XButton onClick={handleClose} type='button'>
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
  top: 20px;
  right: 20px;
  color: #323232;
  cursor: pointer;
`;
