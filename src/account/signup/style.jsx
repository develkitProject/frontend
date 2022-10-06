import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 464px;
  height: 700px;
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
  margin: 0 auto;
  display: flex;
  width: 82%;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #00a99d;
  color: white;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;

export const Text = styled.pre`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.bold};
  font-family: 'Noto Sans KR', sans-serif;
  letter-spacing: -0.05em;
  margin-top: 7px;
`;
