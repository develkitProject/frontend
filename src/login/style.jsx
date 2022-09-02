import styled from 'styled-components';

export const StWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StLoginBox = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  border: 1px solid #bababa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StSignupBox = styled.div`
  width: 400px;
  margin-top: 30px;
  height: 10vh;
  background-color: white;
  border: 1px solid #bababa;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const StInputBox = styled.input`
  width: 70%;
  height: 35px;
  margin-top: 10px;
  background-color: #fafafa;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  &:focus,
  &:active {
    outline: none;
  }
  padding-left: 10px;
`;

export const StButton = styled.button`
  width: 70%;
  height: 35px;
  margin-top: 30px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 18px;
  background-color: #0095f6;
`;
