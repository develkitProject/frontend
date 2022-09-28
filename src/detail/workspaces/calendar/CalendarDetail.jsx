import React, { useState } from 'react';

import styled from 'styled-components';

export default function CalendarDetail({ id, data, isOpen, openDetail }) {
  return (
    <>
      <StMark onClick={openDetail}>
        {data.content} {isOpen && <StDetail />}
      </StMark>
    </>
  );
}

const StMark = styled.div`
  margin-top: 5px;
  width: 100%;
  border-radius: 5px;
  top: 30px;
  min-height: 22px;
  background-color: #00a99d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  text-align: center;
  overflow: hidden;
`;

const StDetail = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
`;
