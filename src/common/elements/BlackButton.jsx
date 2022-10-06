import React from 'react';

import styled from 'styled-components';

export default function BlackButton(props) {
  return (
    <StButton
      type="button"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.text}
    </StButton>
  );
}

const StButton = styled.button`
  background-color: #000000;
  margin-left: 30px;
  width: 200px;
  height: 35px;
  border-radius: 8px;
  border: 0px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
