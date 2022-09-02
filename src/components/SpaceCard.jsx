import React from 'react';

import styled from 'styled-components';

import CardProfile from '../elements/CardProfile.jsx';

function SpaceCard() {
  return (
    <StSpaceCard>
      <StCardImage>
        <CardProfile />
      </StCardImage>
      <StFooterBox>
        <SpaceName>에펠탑 보러 파리 가실분</SpaceName>
        <SpaceOutName>탈퇴하기</SpaceOutName>
      </StFooterBox>
    </StSpaceCard>
  );
}

export default SpaceCard;

const StSpaceCard = styled.div`
  width: 350px;
  height: 250px;
  border-radius: 20px;
  border: 2px solid #d7d7d7;
  margin-left: 20px;
`;

const StCardImage = styled.div`
  cursor: pointer;
  width: 100%;
  height: 80%;
  border-radius: 20px 20px 0px 0px;
  background-image: url('https://p4.wallpaperbetter.com/wallpaper/1014/843/831/4k-eiffel-tower-france-8k-wallpaper-preview.jpg');
  background-size: cover;
  position: relative;
`;

const StFooterBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const SpaceName = styled.span`
  font-size: 17px;
  font-weight: 500;
  margin-left: 10px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const SpaceOutName = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin-right: 10px;
  color: #999999;
`;
