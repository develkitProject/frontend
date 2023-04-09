import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 80vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Projects = styled.div`
  width: 70%;
  min-width: 1000px;
  margin-left: 50px;
  margin-top: 60px;
  margin-bottom: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
  position: relative;
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
  width: 200px;
  border-bottom: solid 1px #c6c6c6;
  display: table-cell;
  height: 35px;
  line-height: 35px;
  cursor: pointer;
`;

export const StMenuInDiv = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  cursor: pointer;
`;

export const StMenuIn = styled.div`
  width: 180px;
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
  min-width: 120px;
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

export const StIntroContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #c6c6c6;
`;

export const StTitle = styled.div`
  color: #333333;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.5px;
`;

export const StContent = styled.div`
  margin-top: 10px;
  color: #333333;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -1px;
  line-height: 20px;
`;
