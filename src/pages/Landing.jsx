import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../asset/img/icon1.png';
import scroll from '../asset/img/scroll.svg';
import 'animate.css';
import WorkSpaceErrorModal from '../common/Modal/error';
import { getCookieToken } from '../Cookie';

function Landing() {
  const navigate = useNavigate();
  const cookies = getCookieToken();

  const [isOpen, setIsOpen] = useState(false);
  const onStartButton = () => {
    setIsOpen(true);
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
              <StStart
                onClick={() => {
                  !cookies ? (
                    <>{onStartButton(true)}</>
                  ) : (
                    navigate('/workspace')
                  );
                }}
              >
                {isOpen && (
                  <WorkSpaceErrorModal
                    open={isOpen}
                    onClose={() => {
                      setIsOpen(false);
                    }}
                  ></WorkSpaceErrorModal>
                )}

                <StIcon src={icon} />
                <StLink>디벨킷 시작하기</StLink>
              </StStart>
            </StIntro>
          </StWrap>

          <StScroll>
            <StScrollImg alt='scroll' src={scroll} />
            <div className='animate__shakeY'>scroll down</div>
          </StScroll>
        </StMain>
      </StWrapper>

      <StWrapper>
        <StMain>
          <StWrap>
            <StIntro>
              <StMent>
                let <StMent fc='#00A99D'>D.Velkit</StMent> ={' '}
                <StMent fc='#F5D28C'>“Point!”;</StMent>
              </StMent>
              <StIntroMent>
                <div style={{ marginBottom: '15px' }}>
                  프로젝트 협업의 새로운 시작
                </div>
                <div>업무관리가 더욱 쉽고 간편해집니다.</div>
              </StIntroMent>
            </StIntro>

            <StCardContainer>
              <StCard gc='#1e0e0e'>
                <StCardText>
                  <StCardTitle fc='#832e2e'>일정관리</StCardTitle>
                  <StCardContent fc='#832e2e'>
                    <p>
                      달력에서 바로바로!
                      <br />팀 전체 일정도 한 눈에{' '}
                    </p>
                  </StCardContent>
                </StCardText>
              </StCard>

              <StCard gc='#003d38'>
                <StCardText>
                  <StCardTitle fc='#003d38'>문서 아카이빙</StCardTitle>
                  <StCardContent fc='#003d38'>
                    <p>
                      달력에서 바로바로!
                      <br />팀 전체 일정도 한 눈에{' '}
                    </p>
                  </StCardContent>
                </StCardText>
              </StCard>

              <StCard gc='#4a3711'>
                <StCardText>
                  <StCardTitle fc='#4a3711'>실시간 채팅</StCardTitle>
                  <StCardContent fc='#4a3711'>
                    <p>
                      달력에서 바로바로!
                      <br />팀 전체 일정도 한 눈에{' '}
                    </p>
                  </StCardContent>
                </StCardText>
              </StCard>

              <StCard gc='#4a3711'>
                <StCardText>
                  <StCardTitle fc='#4a3711'>실시간 채팅</StCardTitle>
                  <StCardContent fc='#4a3711'>
                    <p>
                      달력에서 바로바로!
                      <br />팀 전체 일정도 한 눈에{' '}
                    </p>
                  </StCardContent>
                </StCardText>
              </StCard>
            </StCardContainer>
          </StWrap>
        </StMain>
      </StWrapper>
    </>
  );
}

export default Landing;

const StWrapper = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  background: #000000;
  overflow: hidden;
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
  animation: fadeInUp;
  animation-duration: 1s;
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

  &:hover {
    animation: bounce;
    animation-duration: 1.5s;
  }
`;
const StScrollImg = styled.img`
  width: 20px;
  &:hover {
    width: 22px;
  }
`;

const StCardContainer = styled.div`
  margin-top: 15vh;
  margin-bottom: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StCard = styled.div`
  max-width: 22%;
  overflow: hidden;
  width: 22%;
  height: 50vh;
  border-radius: 20px;
  background: linear-gradient(to bottom, #000 0%, ${(props) => props.gc} 100%);
`;

const StCardText = styled.div`
  margin-top: 70%;
  margin-left: 11.1%;
`;

const StCardTitle = styled.div`
  color: ${(props) => props.fc};
  font-size: 24px;
`;

const StCardContent = styled.div`
  margin-top: 6%;
  color: ${(props) => props.fc};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
`;
