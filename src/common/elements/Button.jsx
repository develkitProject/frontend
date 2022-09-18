import React from 'react';

import styled from 'styled-components';

export default function Button1(props) {
  return (
    <>
      <StButton
        type='button'
        width={props.width}
        onClick={() => {
          props.onClick();
        }}
      >
        {props.text}
      </StButton>
    </>
  );
}

const StButton = styled.button`
  width: ${(props) => props.width};
  height: 50px;
  background-color: rgb(0, 169, 157);
  font-size: 17px;
  cursor: pointer;
  border: none;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
`;
