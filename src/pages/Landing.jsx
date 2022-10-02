import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FullPage, Slide } from 'react-full-page/lib';
import { useGetGuestLoginQuery } from '../redux/modules/user';
import icon from '../common/img/icon1.png';
import scroll from '../common/img/scroll.svg';
import 'animate.css';
import WorkSpaceErrorModal from '../common/modal/error';
import { getCookieToken, setAccessToken } from '../Cookie';
import velkit from '../common/img/velkit.png';
import velkit2 from '../common/img/velkit2.png';
import velkit3 from '../common/img/velkit3.png';
import twinklestar from '../common/img/twinklestar.svg';
import SecondCard1 from '../common/img/SecondCard1.png';
import SecondCard2 from '../common/img/SecondCard2.png';
import SecondCard3 from '../common/img/SecondCard3.png';
import ThirdBackground from '../common/img/ThirdBackground.png';
import ThirdImg from '../common/img/ThirdImg.png';
import Fourth1 from '../common/img/Fourth1.png';
import Fourth2 from '../common/img/Fourth2.png';
import circle from '../common/img/circle.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SignupModal from '../account/signup/SignupModal';
import { loginApi } from '../account/data/login';
import { setIsSignUpModal } from '../redux/modules/global';
import { selectIsSignUpModal } from '../redux/modules/global/selectors';
import TopButton from '../common/elements/TopButton';

function Landing({ path, setPath }) {
  const navigate = useNavigate();
  const cookies = getCookieToken();
  const homeRef = useRef(null);
  const dispatch = useDispatch();
  const isSignUp = useSelector(selectIsSignUpModal);
  const { data, error, isLoading, refetch } = useGetGuestLoginQuery();

  const [isOpen, setIsOpen] = useState(false);

  const openSignUpModal = () => {
    dispatch(setIsSignUpModal(true));
  };

  const guestLogin = async () => {
    const { username } = data.data;
    const password = `${username.split('@')[0]}!`;

    loginApi({ username, password })
      .then((res) => {
        if (res.data.success === false) {
          alert('아이디 또는 비밀번호를 확인해주세요.');
        } else {
          setAccessToken(res.headers.authorization);
          alert('게스트 로그인이 완료되었습니다! 반가워요');
          window.location.reload();
        }
      })
      .catch((err) => {
        alert('아이디 또는 비밀번호를 확인해주세요!');
      });
  };

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

  return (
    <FullPage controls controlsProps={{ className: 'slide-navigation' }}>
      <TopButton />
      <Slide>
        <Header setPath={setPath} path={path} />
        <StWrapper height="100vh">
          <StMain>
            <StWrap dp="flex">
              <StIntro>
                <StMent>
                  let <StMent fontColor="#00A99D">D_Velkit</StMent> ={' '}
                  <StMent fontColor="#F5D28C">
                    “Develop Your Teamwork through D.VelKit!”;
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
                <StStart>
                  {isOpen && (
                    <WorkSpaceErrorModal open={isOpen} onClose={handleClose} />
                  )}
                  <StIcon src={icon} />
                  <StLink style={{ marginTop: '70px' }} onClick={onStartSubmit}>
                    디벨킷 시작하기
                  </StLink>
                </StStart>
                {!cookies && (
                  <StStart
                    style={{
                      marginTop: '30px',
                      fontWeight: '700',
                      lineHeight: '33px',
                    }}
                  >
                    <StIcon src={icon} />
                    <StLink
                      style={{
                        margin: '30px 0px 0px 10px',
                        color: '#21dccf',
                        fontSize: '1.6rem',
                      }}
                      onClick={guestLogin}
                    >
                      임시계정으로 체험하기
                    </StLink>
                  </StStart>
                )}
              </StIntro>
              <Twinklestar />
              <StVelkit />
            </StWrap>
            <StScroll>
              <StScrollImg alt="scroll" src={scroll} />
              <div className="animate__shakeY">scroll down</div>
            </StScroll>
          </StMain>
        </StWrapper>
      </Slide>

      <Slide>
        <StWrapper ref={homeRef} height="100vh">
          <StMain style={{ alginItems: 'center' }}>
            <StSecondIntroDiv>
              <div>프로젝트 협업툴, 더 꼼꼼히 따져봐야 합니다.</div>
              <StSecondMent>
                <div style={{ marginBottom: '1%' }}>
                  웹기반 프로젝트 협업 서비스라고 다 똑같지 않습니다.
                </div>
                <div>
                  디벨킷은 100% 무료 서비스로 높은 퀄리티의 맞춤 서비스를
                  제공합니다.
                </div>
              </StSecondMent>
            </StSecondIntroDiv>

            <StSecondBodyDiv>
              <StSecondBodyMent>
                <StMent>let</StMent>{' '}
                <StMent fontColor="#00A99D">D.Velkit</StMent>
                <StMent> = </StMent>
                <StMent fontColor="#F5D28C">“Point!”</StMent>
                <StMent>;</StMent>
                <StSecondBodyMentTwo>
                  <div>프로젝트 협업의 새로운 시작</div>
                  <div style={{ marginTop: '1%', fontWeight: '700' }}>
                    업무관리가 더욱 쉽고 간편해집니다
                  </div>
                </StSecondBodyMentTwo>
              </StSecondBodyMent>
              <StCardContainer>
                <StCardElement>
                  <StImgContainer img={SecondCard1} />
                  <StCardMentContainer>
                    <StSecondBodyMentTwo
                      style={{ marginTop: '2%', fontWeight: '700' }}
                    >
                      프로젝트 관리
                    </StSecondBodyMentTwo>
                    <StCardMentContent>
                      간편로그인과 함께 프로젝트 생성 후 문서를 쉽게 작성하고
                      원활한 관리로 성장하는 협업을 경험해보세요
                    </StCardMentContent>
                  </StCardMentContainer>
                </StCardElement>

                <StCardElement>
                  <StImgContainer img={SecondCard2} />
                  <StCardMentContainer>
                    <StSecondBodyMentTwo
                      style={{ marginTop: '2%', fontWeight: '700' }}
                    >
                      문서 아카이빙
                    </StSecondBodyMentTwo>
                    <StCardMentContent>
                      데이터를 효과적으로 보관할 수 있는 아카이빙 기능을
                      제공하여 별도 솔루션을 도입하지 않아도 됩니다.
                    </StCardMentContent>
                  </StCardMentContainer>
                </StCardElement>

                <StCardElement>
                  <StImgContainer img={SecondCard3} />
                  <StCardMentContainer>
                    <StSecondBodyMentTwo
                      style={{ marginTop: '2%', fontWeight: '700' }}
                    >
                      일정 관리
                    </StSecondBodyMentTwo>
                    <StCardMentContent>
                      디벨킷 유저들의 불필요한 학습 과정을 단축하고자 쉽고,
                      친화적인 UI/UX로 사용성을 높였습니다.
                    </StCardMentContent>
                  </StCardMentContainer>
                </StCardElement>
              </StCardContainer>
            </StSecondBodyDiv>
          </StMain>
        </StWrapper>
      </Slide>

      <Slide>
        <StWrapper height="100vh">
          <StImgWrapper img={ThirdBackground}>
            <StMain>
              <StThirdBody>
                <StImgBox>
                  <StThirdImg img={ThirdImg} />
                </StImgBox>
                <StThirdMent>
                  <MentContainer>
                    <StMent>let</StMent>{' '}
                    <StMent fontColor="#00A99D">D.Velkit</StMent>
                    <StMent> = </StMent>
                    <StMent fontColor="#F5D28C">“growth”</StMent>
                    <StMent>;</StMent>
                  </MentContainer>
                  <StSecondBodyMentTwo>
                    <div>더 완벽한 프로젝트를 위해,</div>
                    <div style={{ marginTop: '10px', fontWeight: '700' }}>
                      프로젝트 후기와 제안까지
                    </div>
                  </StSecondBodyMentTwo>
                  <StCardMentContainer>
                    <StCardMentContent
                      style={{
                        marginTop: '25px',
                        color: '#BCBCBC',
                        fontWeight: '500',
                      }}
                    >
                      프로젝트 협업이 완료된 후, 후기를 작성하여
                    </StCardMentContent>
                    <StCardMentContent
                      style={{ color: '#BCBCBC', fontWeight: '500' }}
                    >
                      디벨킷에서 사이드 프로젝트 제안을 받을 수도 있습니다.
                    </StCardMentContent>
                  </StCardMentContainer>
                  <StLink
                    onClick={() => {
                      alert('기능 준비중입니다!');
                    }}
                    style={{
                      marginTop: '60px',
                      marginLeft: '0',
                      textDecoration: 'underline',
                    }}
                  >
                    커뮤니티 바로가기{' '}
                  </StLink>
                </StThirdMent>
                <StCircle />
                <StVelkit2 />
              </StThirdBody>
            </StMain>
          </StImgWrapper>
        </StWrapper>
      </Slide>

      <Slide>
        <StWrapper height="80vh">
          <StMain>
            <StThirdBody>
              <StImgBox>
                <StFourthImg img={Fourth1}>
                  <StSecondBodyMentTwo
                    style={{ marginTop: '40px', marginLeft: '40px' }}
                  >
                    <div>협업의 새로운 시작</div>
                    <div style={{ marginTop: '10px', fontWeight: '700' }}>
                      더 완벽한 프로젝트를 위해,
                    </div>
                    <StLink
                      onClick={() => {
                        openSignUpModal();
                      }}
                      style={{
                        marginTop: '100px',
                        marginLeft: '0',
                        textDecoration: 'underline',
                      }}
                    >
                      회원가입 바로가기{' '}
                      {/* {isOpen && (
                        <SignupModal
                          open={isOpen}
                          onClose={handleClose}
                        ></SignupModal>
                      )} */}
                    </StLink>
                  </StSecondBodyMentTwo>
                </StFourthImg>
              </StImgBox>

              <StImgBox>
                <StFourthImg img={Fourth2}>
                  <StSecondBodyMentTwo
                    style={{ marginTop: '40px', marginLeft: '40px' }}
                  >
                    <div>디벨킷의</div>
                    <div style={{ marginTop: '10px', fontWeight: '700' }}>
                      힙한 EVENT,
                    </div>
                    <StLink
                      style={{
                        marginTop: '100px',
                        marginLeft: '0',
                        textDecoration: 'underline',
                      }}
                      onClick={() => {
                        navigate('/event');
                      }}
                    >
                      EVENT 바로가기{' '}
                    </StLink>
                  </StSecondBodyMentTwo>
                </StFourthImg>
              </StImgBox>
              <StVelkit3 />
            </StThirdBody>
          </StMain>
        </StWrapper>
        <Footer />
      </Slide>
      {isSignUp && <SignupModal open={isSignUp} />}
    </FullPage>
  );
}

export default Landing;

const StWrapper = styled.div`
  color: white;
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  background: #000000;
  .container1 {
    height: 90vh;
  }
  .container2 {
    height: 100vh;
  }
  .container3 {
    height: 100vh;
  }
  .container4 {
    height: 100vh;
  }
`;

const StMain = styled.div`
  width: 100%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3%;
  margin-bottom: 3%;
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
  margin-top: 50px;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;

const StMent = styled.span`
  color: ${(props) => props.fontColor};
  font-family: 'Consolas';
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.03em;
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
  letter-spacing: -0.07em;
`;

const StStart = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const StIcon = styled.img`
  margin-top: auto;
  width: 60px;
`;

const StLink = styled.div`
  margin-top: auto;
  margin-left: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: -2;
  padding-bottom: 17px;
  letter-spacing: 0.01em;
  cursor: pointer;
  /* text-decoration: underline; */
  &:hover {
    opacity: 0.7;
  }
`;

const StScroll = styled.div`
  font-size: 16px;
  font-weight: 400;
  width: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
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

const StVelkit2 = styled.div`
  width: 300px;
  height: 400px;
  background-image: url(${velkit2});
  background-size: 100% 100%;
  position: absolute;
  left: 30%;
  top: 45%;
  animation: ${move} 2s 0s infinite;
  /* animation-iteration-count: infinite;
  animation-name: bounce;
  animation-timing-function: linear; */
`;

const rotate = keyframes`
100% {
  transform: rotate(360deg);
}
`;

export const StCircle = styled.div`
  /* width: 25%;
  height: 25%; */
  min-width: 250px;
  min-height: 250px;
  background-image: url(${circle});
  background-size: 100% 100%;
  position: absolute;
  left: 70%;
  top: 96%;
  animation: ${rotate} 15s linear infinite;
  transform-origin: 50% 50%;
  z-index: 500;
`;

const StVelkit3 = styled.div`
  width: 6%;
  height: 16%;
  min-width: 200px;
  min-height: 250px;
  background-image: url(${velkit3});
  background-size: 100% 100%;
  position: absolute;
  left: 80%;
  top: 50%;
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
  width: 80%;
  height: 18%;
  color: white;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #00a99d;
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: -0.07em;
`;

const StSecondMent = styled.div`
  margin-top: 2%;
  color: #00a99d;
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
  letter-spacing: 0.01em;
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
  height: 230px;
  border-radius: 15px;
  border: none;
  background: url(${(props) => props.img}) no-repeat;
  background-size: cover;
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
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.img}) no-repeat;
  background-size: cover;
  display: flex;
  overflow: hidden;
`;

const StThirdBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StImgBox = styled.div`
  background-size: cover;
  width: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StThirdImg = styled.div`
  align-items: left;
  width: 450px;
  height: 420px;
  border: none;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${(props) => props.img}) no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

const StThirdMent = styled.div`
  margin-left: 3%;
  width: 40%;
  letter-spacing: -0.07em;
`;

const MentContainer = styled.div`
  width: 100%;
`;

const StFourthImg = styled.div`
  align-items: left;
  width: 33vw;
  height: 40vh;
  border: none;
  background: url(${(props) => props.img}) no-repeat;
  background-size: cover;
  border-radius: 20px;
`;
