import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import icon from '../img/icon1.png';
import scroll from '../img/scroll.svg';
import Login from '../login';

function Landing() {
  const navigate = useNavigate();

  const moveMain = () => {
    navigate('/workspace');
  };

  return (
    <>
      <StWrapper>
        <StMain>
          <StWrap>
            <StIntro>
              <StMent>
                let <StMent fc='#00A99D'>D.Velkit</StMent> ={' '}
                <StMent fc='#F5D28C'>
                  “Devlop Your Teamwork through D.VelKit!”;
                </StMent>
              </StMent>

              <StIntroMent>
                <div style={{ marginBottom: '15px' }}>
                  성장하는 사람들을 위한
                </div>
                <div>
                  프로젝트 협업 서비스,{' '}
                  <span style={{ color: '#00A99D' }}>디벨킷</span>
                </div>
              </StIntroMent>
              <StStart onClick={() => navigate('/workspace')}>
                <StIcon src={icon} />
                <StLink>디벨킷 시작하기</StLink>
              </StStart>
            </StIntro>
          </StWrap>

          <StScroll>
            <StScrollImg alt='scroll' src={scroll} />
            <div>scroll down</div>
          </StScroll>
        </StMain>
      </StWrapper>
      <Footer />
    </>
  );
}

export default Landing;

const StWrapper = styled.div`
  color: white;
  width: 100%;
  height: 88vh;
  display: flex;
  background: #000000;
`;

const StMain = styled.div`
  width: 100%;
  margin-left: 8%;
  margin-right: 8%;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const StWrap = styled.div`
  width: 100%;
  justify-content: left;
  align-items: left;
  flex-direction: row;
`;

const StIntro = styled.div`
  margin-top: 10%;
  margin-left: 2%;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;

const StMent = styled.span`
  color: ${(props) => props.fc};
  font-family: 'Consolas';
  font-size: 22px;
  font-weight: 400;
`;

const StIntroMent = styled.div`
  color: ${(props) => props.fc};
  margin-top: 4%;
  font-size: 54px;
  font-weight: 500;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
`;

const StStart = styled.div`
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const StIcon = styled.img`
  margin-top: auto;
  width: 60px;
  &:hover {
    width: 61px;
  }
`;

const StLink = styled.div`
  margin-top: auto;
  margin-left: 10px;
  font-size: 24px;
  font-weight: 400;
  line-height: -2;
  padding-bottom: 17px;
`;

const StScroll = styled.div`
  margin-top: 12%;
  margin-bottom: 5%;
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: n-resize;
  font-family: 'Montserrat';
`;

const StScrollImg = styled.img`
  width: 20px;
  &:hover {
    width: 22px;
  }
`;
