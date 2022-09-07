import React from 'react';

import styled from 'styled-components';

export default function Button1() {
  return (
    <>
      <StButton type='button'>워크스페이스생성</StButton>
    </>
  );
}

const StButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: rgb(0, 169, 157);
  font-size: 20px;
  cursor: pointer;
  border: none;
  color: white;
`;
