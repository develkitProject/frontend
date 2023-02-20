import React, { MouseEventHandler } from 'react';

import styled from 'styled-components';

interface IProps {
  width: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text?: string;
}

export default function Button1({ width, onClick, text }: IProps) {
  return (
    <>
      <StButton type="button" width={width} onClick={onClick}>
        {text}
      </StButton>
    </>
  );
}

const StButton = styled.button<IProps>`
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
