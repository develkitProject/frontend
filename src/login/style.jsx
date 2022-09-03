import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 464px;
  height: 756px;
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

export const StSpan = styled.span`
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  margin-top: 30px;
  text-align: left;
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

export const LoginWrap = styled.div`
  width: 65%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

export const StButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #00a99d;
  margin-top: 15px;
  color: white;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;

export const StMent = styled.span`
  color: ${(props) => props.fc};
  font-family: 'Consolas';
  font-size: 22px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
`;
