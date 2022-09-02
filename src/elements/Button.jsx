import React, { useState } from 'react';

import styled, { createGlobalStyle } from 'styled-components';

function Button() {
  return (
    <StWrapper>
      <button type='button'>api테스트</button>
    </StWrapper>
  );
}

export default Button;

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
