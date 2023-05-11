import styled, { keyframes } from 'styled-components';

import velkit from '../../common/img/velkit.png';
import velkit2 from '../../common/img/velkit2.png';
import velkit3 from '../../common/img/velkit3.png';
import twinklestar from '../../common/img/twinklestar.svg';
import circle from '../../common/img/circle.svg';
import 'animate.css';

export const Wrapper = styled.div<{height: string}>`
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

export const Main = styled.div`
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

export const Wrap = styled.div<{dp: string}>`
  width: 100%;
  justify-content: left;
  align-items: left;
  flex-direction: row;
  display: ${(props) => props.dp};
`;

export const Intro = styled.div`
  margin-top: 50px;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;

export const Ment = styled.span<{fontColor?: string}>`
  color: ${(props) => props.fontColor};
  font-family: 'Consolas';
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.03em;
`;

export const IntroMent = styled.div<{fontColor?: string}>`
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

export const Start = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  margin-top: auto;
  width: 60px;
`;

export const Link = styled.div`
  margin-top: auto;
  margin-left: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: -2;
  padding-bottom: 17px;
  letter-spacing: 0.01em;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Scroll = styled.div`
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
export const ScrollImg = styled.img`
  width: 20px;
  &:hover {
    width: 22px;
  }
`;

export const move = keyframes`
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

export const Velkit = styled.div`
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
`;

export const Velkit2 = styled.div`
  width: 300px;
  height: 400px;
  background-image: url(${velkit2});
  background-size: 100% 100%;
  position: absolute;
  left: 30%;
  top: 45%;
  animation: ${move} 2s 0s infinite;
`;

export const rotate = keyframes`
100% {
  transform: rotate(360deg);
}
`;

export const Circle = styled.div`
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

export const Velkit3 = styled.div`
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
`;

export const Twinklestar = styled.div`
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

export const SecondIntroDiv = styled.div`
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

export const SecondMent = styled.div`
  margin-top: 2%;
  color: #00a99d;
  font-weight: 300;
  font-size: 1.1rem;
  letter-spacing: -0.07em;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SecondBodyDiv = styled.div`
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

export const SecondBodyMent = styled.div`
  margin-bottom: 1%;
  color: white;
  border-radius: 16px;
  align-items: left;
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: -0.07em;
`;

export const SecondBodyMentTwo = styled.div`
  margin-top: 3%;
  color: white;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 0.01em;
`;

export const CardContainer = styled.div`
  margin-top: 1.5%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CardElement = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 1%;
`;

export const ImgContainer = styled.div<{img: string}>`
  width: 100%;
  height: 230px;
  border-radius: 15px;
  border: none;
  background: url(${(props) => props.img}) no-repeat;
  background-size: cover;
`;

export const CardMentContainer = styled.div`
  width: 100%;
  margin-top: 2%;
`;

export const CardMentContent = styled.div`
  margin-top: 2%;
  width: 100%;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.3rem;
  letter-spacing: -0.07em;
  color: #999999;
`;

export const ImgWrapper = styled.div<{img: string}>`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.img}) no-repeat;
  background-size: cover;
  display: flex;
  overflow: hidden;
`;

export const ThirdBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ImgBox = styled.div`
  background-size: cover;
  width: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ThirdImgTest = styled.div<{img: string}>`
  align-items: left;
  width: 450px;
  height: 420px;
  border: none;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${(props) => props.img}) no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

export const ThirdMent = styled.div`
  margin-left: 3%;
  width: 40%;
  letter-spacing: -0.07em;
`;

export const MentContainer = styled.div`
  width: 100%;
`;

export const FourthImg = styled.div<{img: string}>`
  align-items: left;
  width: 33vw;
  height: 40vh;
  border: none;
  background: url(${(props) => props.img}) no-repeat;
  background-size: cover;
  border-radius: 20px;
`;
