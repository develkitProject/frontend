import React, { useState } from 'react';
import styled from 'styled-components';
import Add from '../common/img/add.png';

interface Props {
  openDialog: () => void;
}

function CreateCard({ openDialog }: Props) {
  return (
    <StSpaceCard>
      <StText>진행중인 프로젝트</StText>
      <StButton onClick={openDialog}>+프로젝트 생성하기</StButton>
    </StSpaceCard>
  );
}

export default CreateCard;

const StSpaceCard = styled.div`
  width: 1200px;
  height: 50px;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2%;
`;

const StText = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  text-align: left;
  color: white;
`;

const StButton = styled.button`
  width: 220px;
  height: 100%;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -1px;
  text-align: center;
  background-color: #00a99d;
  color: white;
  cursor: pointer;
  border: none;
`;
