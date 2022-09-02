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
        <h3 style={{ marginLeft: '20px', fontWeight: '600', fontSize: '18px' }}>
          에펠탑 보러 파리 가실분
        </h3>
        <h5
          style={{
            fontWeight: '500',
            color: '#979797',
            marginRight: '20px',
            cursor: 'pointer',
          }}
        >
          탈퇴하기
        </h5>
      </StFooterBox>
    </StSpaceCard>
  );
}

export default SpaceCard;

const StSpaceCard = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 20px;
  border: 2px solid #d7d7d7;
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
