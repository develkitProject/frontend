import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import circle from '../img/circle.svg';

function Circle() {
  return (
    <>
      {/* <Container> */}
      <StCircle />
      {/* </Container> */}
    </>
  );
}

export default Circle;

const rotate = keyframes`
100% {
  transform: rotate(360deg);
}
`;

export const StCircle = styled.div`
  /* width: 25%;
  height: 25%; */
  min-width: 250px;
  min-height: 250px;
  background-image: url(${circle});
  background-size: 100% 100%;
  /* position: absolute; */
  animation: ${rotate} 15s linear infinite;
  transform-origin: 50% 50%;
  z-index: 500;
`;
