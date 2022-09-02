import React from 'react';

import styled from 'styled-components';

import Add from '../img/add.png';

function CreateCard() {
  return (
    <StSpaceCard>
      <StCardImage />
    </StSpaceCard>
  );
}

export default CreateCard;

const StSpaceCard = styled.div`
  width: 350px;
  height: 250px;
  border-radius: 20px;
  background-color: #dfe6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #adb9e4;
  }
`;

const StCardImage = styled.div`
  width: 50%;
  height: 40%;
  border-radius: 20px 20px 0px 0px;
  background-image: url(${Add});
  background-size: 100% 100%;
`;

// const StFooterBox = styled.div`
//   width:100%;
//   height:20%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   text-align: center;
// `;
