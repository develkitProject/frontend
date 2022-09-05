import styled from 'styled-components';

function SpaceHeader() {
  return (
    <StHeaderDiv>
      <StMent>
        스마트한 프로젝트 관리의 시작,
        <StMent style={{ fontWeight: '600' }}>디벨킷</StMent>
      </StMent>
      <StInput placeholder='초대코드 입력하고 프로젝트 참여하기'></StInput>
    </StHeaderDiv>
  );
}

export default SpaceHeader;

const StHeaderDiv = styled.div`
  align-items: center;
  background-color: #00a99d;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StMent = styled.span`
  color: white;
  font-size: 30px;
`;

const StInput = styled.input`
  width: 30%;
  height: 40px;
  border-radius: 12px;
  margin-top: 30px;
  border: none;
  box-shadow: 0px 0px 3px;
  padding-left: 25px;
  font-weight: 400;
  &:focus {
    outline: none;
  }
  position: relative;
`;
