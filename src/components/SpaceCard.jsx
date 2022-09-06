import React from 'react';

import styled from 'styled-components';

import CardProfile from '../elements/CardProfile.jsx';

function SpaceCard({ data }) {
  return (
    <StSpaceCard direction='column'>
      <StCardImage />
      <StFooterBox>
        <StFooterDiv>
          <StFooter>
            <SpaceName>{data.title}</SpaceName>
            <SpaceDate>2022.08.20</SpaceDate>
            <SpaceGoal weight='500'>
              목표 <SpaceGoal weight='200'>{data.content}</SpaceGoal>
            </SpaceGoal>
          </StFooter>
          <CardProfile />
        </StFooterDiv>
        <hr
          style={{ width: '95%', height: '0.5px', backgroundColor: '#dddddd' }}
        />
        <StFooter>
          <StDiv>
            <SpaceName style={{ color: '#00a99d', marginRight: '10px' }}>
              공지
            </SpaceName>
            <SpaceName style={{ color: 'black', fontWeight: '500' }}>
              프로젝트 명이 정해졌습니다. 다들 화이팅★{' '}
            </SpaceName>
          </StDiv>
          <StDiv>
            <SpaceName style={{ color: '#00a99d', marginRight: '10px' }}>
              일정
            </SpaceName>
            <SpaceName
              style={{
                color: '#999999',
                marginRight: '10px',
                fontWeight: '500',
              }}
            >
              2022.09.22
            </SpaceName>
            <SpaceName style={{ color: 'black', fontWeight: '500' }}>
              프로젝트 주간회의{' '}
            </SpaceName>
          </StDiv>
        </StFooter>
      </StFooterBox>
    </StSpaceCard>
  );
}

export default SpaceCard;

const StSpaceCard = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  margin: 10px 10px 10px 10px;
  width: 40%;
  height: 360px;
  border-radius: 16px;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: white;
`;

const StCardImage = styled.div`
  cursor: pointer;
  width: 100%;
  height: 47%;
  border-radius: 16px 16px 0px 0px;
  background-image: url('https://p4.wallpaperbetter.com/wallpaper/1014/843/831/4k-eiffel-tower-france-8k-wallpaper-preview.jpg');
  background-size: cover;
  position: relative;
  background-blend-mode: multiply;
  &:hover {
    background-color: #978888;
    z-index: 9;
  }
`;

const StFooterBox = styled.div`
  width: 100%;
  height: 53%;
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: column;
  margin-top: 10px;
`;

const StFooterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StFooter = styled.div`
  margin-left: 20px;
  width: 80%;
  height: 50%;
  display: flex;
  align-items: left;
  text-align: left;
  flex-direction: column;
`;

const StDiv = styled.div`
  margin-top: 10px;
`;

const SpaceName = styled.span`
  margin-top: 10px;
  font-size: 17px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
`;

const SpaceDate = styled.span`
  margin-top: 10px;
  font-size: 14px;
  height: 17px;
  font-weight: 500;
  font-family: 'Montserrat';
  color: #999;
`;

const SpaceGoal = styled.span`
  margin-top: 20px;
  font-size: 16px;
  height: 23px;
  font-weight: ${(props) => props.weight};
  font-family: 'Noto Sans KR', sans-serif;
  color: #999;
`;
