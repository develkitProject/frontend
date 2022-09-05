import styled from 'styled-components';

function SpaceHeader() {
  return (
    <StHeaderDiv>
      <StMent>
        스마트한 프로젝트 관리의 시작, 
        <StMent style={{ fontWeight: '600' }}> 디벨킷</StMent>
      </StMent>
      <StSearch>
        <StInput placeholder='초대코드 입력하고 프로젝트 참여하기'></StInput>
        <StGo>Go.</StGo>
      </StSearch>
    </StHeaderDiv>
  );
}

export default SpaceHeader;

const StHeaderDiv = styled.div`
  align-items: center;
  background-color: #00a99d;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StMent = styled.span`
  max-width: 100%;
  color: white;
  font-size: 28px;
  margin-top: 20px;
`;

const StSearch = styled.div`
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 35%;
  position: relative;
`;

const StInput = styled.input`
  width: 100%;
  height: 45%;
  border-radius: 12px;
  margin-top: 30px;
  border: none;
  box-shadow: 0 0 10px 0 #00a99d;
  padding: 5px 25px 5px 25px;;
  font-size:1.2em;
  font-weight: 400;
  color: #999999;
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
  display:inline;
`;

