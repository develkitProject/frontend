import styled, { keyframes } from 'styled-components';

import velkit from '../../common/img/velkit.png';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  font-size: 20px;
  min-height: 90vh;
`;

export const RowDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const TabDiv1 = styled.div`
  width: 15%;
  height: 300px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const TabDiv2 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyPageSpan = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #333333;
  border-bottom: 2px solid black;
  height: 70px;
  display: flex;
  align-items: center;
`;

export const TabSpan = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #333333;
  border-bottom: 2px solid #c6c6c6;
  height: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

export const Intro = styled.span`
  width: 100%;
  font-size: 30px;
  font-weight: 500;
`;

export const IntroBox = styled.div`
  width: 28%;
  height: 296px;
  font-weight: 500;
  font-size: 27px;
  border: 1px solid #999;
  margin-top: 50px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxSpan = styled.span`
  font-weight: 400;
  font-size: 27px;
`;

export const BoxNumSpan = styled.span`
  color: #00a99d;
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 0px;
  font-family: 'Montserrat';
`;

export const StWrapper = styled.div`
  width: 100%;
  height: 75vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-weight: 600;
  font-size: 20px;
`;

export const StProfile = styled.div`
  width: 30%;
  min-width: 300px;
  max-width: 600px;
  margin-left: 50px;
  height: 550px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 12px 16px 10px rgba(0, 0, 0, 0.1);
`;

export const StSpan = styled.span`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const StImage = styled.div<{profileImageUrl: string}>`
  width: 180px;
  height: 180px;
  border-radius: 100px;
  background-size: 100% 100%;
  background-image: url(${(props) => props.profileImageUrl});
  margin-top: 30px;
  cursor: pointer;
`;

interface Props {
  fontWeight: string;
  fontSize: string;
  fontColor: string;
}

export const StEmail = styled.span<Props>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  margin-top: 15px;
  letter-spacing: -0.8px;
`;

export const StChange = styled.span`
  width: 13%;
  min-width: 60px;
  height: 20px;
  margin-top: 100px;
  font-size: 17px;
  cursor: pointer;
  font-weight: 200;
  color: grey;
  border-bottom: 1px solid grey;
`;

export const StDetail = styled.div`
  width: 60%;
  min-width: 680px;
  height: 550px;
  background-color: #ffffff;
  border: none;
  box-shadow: 12px 16px 30px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
`;

export const StButton = styled.button`
  background-color: #000000;
  margin-top: 50px;
  width: 200px;
  height: 50px;
  border-radius: 8px;
  border: 0px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
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

export const StVelkit = styled.div`
  width: 15%;
  height: 25%;
  min-width: 250px;
  min-height: 200px;
  background-image: url(${velkit});
  background-size: 100% 100%;
  position: absolute;
  left: 75%;
  top: 35%;
  animation: ${move} 2s 0s infinite;
`;
