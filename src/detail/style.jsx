import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  /* min-height: 100%; */
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

export const Projects = styled.div`
  width: 65%;
  min-height: 90%;
  margin-left: 50px;
  margin-top: 60px;
  margin-bottom: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const StWrapper = styled.div`
  width: 15%;
  margin-left: 8%;
  margin-top: 10px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 4%;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

export const StLabel = styled.div`
  width: 100%;
  border-bottom: solid 1px #c6c6c6;
  display: table-cell;
  /* align-items: center; */
  height: 35px;
  line-height: 35px;
  vertical-align: middle;
  cursor: pointer;
`;

export const StMenuInDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  cursor: pointer;
`;

export const StMenuIn = styled.div`
  width: 100%;
  height: 35px;
  line-height: 35px;
  color: #6a6a6a;

  display: table-cell;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
`;

export const MenuIcon = styled.img`
  margin-right: 5px;
`;

export const StButton = styled.button`
  margin-top: 15px;
  background-color: #00a99d;
  margin-left: 3%;
  width: 95%;
  height: 40px;
  border-radius: 8px;
  border: 0px;
  color: #fff;
  text-align: center;
  font-size: 1.15rem;
  font-weight: bold;
  letter-spacing: -1px;
  cursor: pointer;
`;