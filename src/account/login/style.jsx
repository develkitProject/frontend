import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 464px;
  height: 650px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

export const LoginWrap = styled.div`
  width: 80%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StSpan = styled.span`
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  text-align: left;
  margin-top: 15px;
`;

export const StInput = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  border: 1px solid #999999;
  line-height: 50px;
  padding-left: 20px;
  border-radius: 10px;
  width: 93%;
  margin-top: 18px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const KakaoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  color: #d9d9d9;
`;

export const StButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #00a99d;
  color: white;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  margin-top: 10px;
`;

export const StMent = styled.span`
  color: ${(props) => props.fontColor};
  font-family: 'Consolas';
  font-size: 22px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 10px;
  letter-spacing: -0.05em;
`;
