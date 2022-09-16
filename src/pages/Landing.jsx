import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import icon from '../asset/img/icon1.png';
import scroll from '../asset/img/scroll.svg';
import 'animate.css';
import WorkSpaceErrorModal from '../common/Modal/error';
import { getCookieToken } from '../Cookie';
import velkit from '../asset/img/velkit.png';
import twinklestar from '../asset/img/twinklestar.svg';
import SecondCard1 from '../asset/img/SecondCard1.png'
import SecondCard2 from '../asset/img/SecondCard2.png'
import SecondCard3 from '../asset/img/SecondCard3.png'
import SecondCard4 from '../asset/img/SecondCard4.png'
import ThirdBackground from '../asset/img/ThirdBackground.png'
import ThirdImg from '../asset/img/ThirdImg.png'

function Landing({ setPath }) {
  const navigate = useNavigate();
  const cookies = getCookieToken();
  const homeRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const onStartButton = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const onStartSubmit = () => {
    if (!cookies) {
      onStartButton();
    } else {
      navigate('/workspace');
      setPath(2);
    }
  };

  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <StWrapper height={'90vh'}>
        <StMain>
          <StWrap dp='flex'>
            <StIntro>
              <StMent>
                let <StMent fontColor='#00A99D'>D_Velkit</StMent> ={' '}
                <StMent fontColor='#F5D28C'>
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
              <StStart onClick={onStartSubmit}>
                {isOpen && (
                  <WorkSpaceErrorModal
                    open={isOpen}
                    onClose={handleClose}
                  ></WorkSpaceErrorModal>
                )}

                <StIcon src={icon} />
                <StLink>디벨킷 시작하기</StLink>
              </StStart>
            </StIntro>
            <Twinklestar></Twinklestar>
            <StVelkit></StVelkit>
          </StWrap>

          <StScroll>
            <StScrollImg alt='scroll' src={scroll} onClick={onHomeClick} />
            <div onClick={onHomeClick} className='animate__shakeY'>
              scroll down
            </div>
          </StScroll>
        </StMain>
      </StWrapper>

      <StWrapper height={'100vh'}>
        <StMain>
          <StSecondIntroDiv>
               <div>프로젝트 협업툴, 더 꼼꼼히 따져봐야 합니다.</div>
               <StSecondMent>
                <div style={{marginBottom: "1%"}}>웹기반 프로젝트 협업 서비스라고 다 똑같지 않습니다.</div>
                <div>디벨킷은 100% 무료 서비스로 높은 퀄리티의 맞춤 서비스를 제공합니다.</div>
               </StSecondMent>
          </StSecondIntroDiv>

          <StSecondBodyDiv>
            <StSecondBodyMent>
              <StMent>let</StMent> <StMent fontColor='#00A99D'>D.Velkit</StMent><StMent> = </StMent><StMent fontColor='#F5D28C'>“Point!”</StMent><StMent>;</StMent>
              <StSecondBodyMentTwo>
                <div>프로젝트 협업의 새로운 시작</div>
                <div style={{marginTop: "1%", fontWeight: "700"}}>업무관리가 더욱 쉽고 간편해집니다</div>
              </StSecondBodyMentTwo>
            </StSecondBodyMent>
            <StCardContainer>
              <StCardElement>
                  <StImgContainer img={SecondCard1}></StImgContainer>
                  <StCardMentContainer>
                    <StSecondBodyMentTwo style={{marginTop: "2%", fontWeight: "700"}}>프로젝트 관리</StSecondBodyMentTwo >
                    <StCardMentContent>간편로그인과 함께 프로젝트 생성 후 문서를 쉽게 작성하고 원활한 관리로 성장하는 협업을 경험해보세요</StCardMentContent>
                  </StCardMentContainer>
                </StCardElement>

                <StCardElement>
                  <StImgContainer img={SecondCard2}></StImgContainer>
                  <StCardMentContainer>
                    <StSecondBodyMentTwo style={{marginTop: "2%", fontWeight: "700"}}>문서 아카이빙</StSecondBodyMentTwo >
                    <StCardMentContent>최대 1년간 데이터를 보관할 수 있는 아카이빙 기능을 제공하여 별도 솔루션을 도입하지 않아도 됩니다.</StCardMentContent>
                  </StCardMentContainer>
                </StCardElement>

                <StCardElement>
                  <StImgContainer img={SecondCard3}></StImgContainer>
                  <StCardMentContainer>
                    <StSecondBodyMentTwo style={{marginTop: "2%", fontWeight: "700"}}>일정 관리</StSecondBodyMentTwo >
                    <StCardMentContent>디벨킷 유저들의 불필요한 학습 과정을 단축하고자 쉽고, 친화적인 UI/UX로 사용성을 높였습니다.</StCardMentContent>
                  </StCardMentContainer>
                </StCardElement>
              </StCardContainer>
            </StSecondBodyDiv>
        </StMain>
      </StWrapper>

      <StWrapper height={'100vh'}>
        <StImgWrapper img={ThirdBackground}>
        <StMain>
          <StThirdBody>
            <StThirdImg img={ThirdImg}>
            </StThirdImg>
            <StThirdMent>
              <StMent>let</StMent> <StMent fontColor='#00A99D'>D.Velkit</StMent><StMent> = </StMent><StMent fontColor='#F5D28C'>“growth”</StMent><StMent>;</StMent>
            </StThirdMent>
          </StThirdBody>

        </StMain>

        </StImgWrapper>

      </StWrapper>






    </>
  );
}

export default Landing;

const StWrapper = styled.div`
  color: white;
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  background: #000000;
  overflow: hidden;
`;

const StMain = styled.div`
  width: 100%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
`;

const StWrap = styled.div`
  width: 100%;
  justify-content: left;
  align-items: left;
  flex-direction: row;
  display: ${(props) => props.dp};
`;

const StIntro = styled.div`
  margin-top: 10%;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;

const StMent = styled.span`
  color: ${(props) => props.fontColor};
  font-family: 'Consolas';
  font-size: 1.4rem;
  font-weight: 400;
`;

const StIntroMent = styled.div`
  color: ${(props) => props.fontColor};
  margin-top: 4%;
  font-size: 54px;
  font-weight: 500;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  animation: fadeInUp;
  animation-duration: 1s;
`;

const StStart = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 230px;
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
  font-size: 16px;
  font-weight: 400;
  width: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  font-family: 'Montserrat';
  position: absolute;
  bottom: 50px;
  left: 50%;
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

const move = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-25px);
    }
    100% {
      transform: translateY(0);
    }
  `;

const StVelkit = styled.div`
  width: 15%;
  height: 35%;
  min-width: 350px;
  min-height: 300px;
  background-image: url(${velkit});
  background-size: 100% 100%;
  position: absolute;
  left: 65%;
  top: 20%;
  animation: ${move} 2s 0s infinite;
  /* animation-iteration-count: infinite;
  animation-name: bounce;
  animation-timing-function: linear; */
`;

const Twinklestar = styled.div`
  width: 25%;
  height: 50%;
  min-width: 400px;
  min-height: 300px;
  background-image: url(${twinklestar});
  background-size: cover;
  position: absolute;
  left: 60%;
  top: 18%;
`;

const StSecondIntroDiv = styled.div`
  margin-top: 1%;
  width: 80%;
  height: 18%;
  color: white;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #00A99D;
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: -0.07em;
`;

const StSecondMent = styled.div`
  margin-top: 2%;
  color: #00A99D;
  font-weight: 300;
  font-size: 1.1rem;
  letter-spacing: -0.07em;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StSecondBodyDiv = styled.div`
  margin-top: 3%;
  margin-bottom: 1%;
  width: 100%;
  height: 76%;
  color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: -0.07em;
`;

const StSecondBodyMent = styled.div`
  margin-bottom: 1%;
  color: white;
  border-radius: 16px;
  align-items: left;
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: -0.07em;
`;

const StSecondBodyMentTwo = styled.div`
  margin-top: 3%;
  color: white;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: -0.07em;
`;

const StCardContainer = styled.div`
  margin-top: 1.5%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const StCardElement = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 1%;
`;

const StImgContainer = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 15px;
  border: none;
  background: url(${(props) => props.img}) no-repeat;
  background-size : cover;
`;

const StCardMentContainer = styled.div`
  width: 100%;
  margin-top: 2%;
`;

const StCardMentContent = styled.div`
  margin-top: 2%;
  width: 100%;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.3rem;
  letter-spacing: -0.07em;
  color: #999999;
`;

const StImgWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  border: none;
  background: url(${(props) => props.img}) no-repeat;
  background-size : cover;
  
`;

const StThirdBody = styled.div`

`;

const StThirdImg = styled.div`
  height: 300px;
  width: 400px;
  border: none;
  background: url(${(props) => props.img}) no-repeat;
  background-size : cover;
`;

const StThirdMent = styled.div`

`;





