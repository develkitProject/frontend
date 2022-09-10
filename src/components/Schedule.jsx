import styled from 'styled-components';

function Schedule() {
  return (
    <StWrapper>
      <StTitle fc='#333333'>일정관리</StTitle>

      <StTableContainer>
        <StThead>
          <StTable style={{ borderBottom: 'none' }}>
            <div>담당자</div>
            <div>업무명</div>
            <div>작성자</div>
            <div>등록일</div>
            <div>수정일</div>
          </StTable>
        </StThead>
        <StTbody>
          <StTable>
            <div>신짱구</div>
            <div>제목_업무요청_20220906</div>
            <div>이지혜</div>
            <div>2022.09.13</div>
            <div>2022.09.20</div>
          </StTable>

          <StTable>
            <div>신짱구</div>
            <div>제목_업무요청_20220906</div>
            <div>이지혜</div>
            <div>2022.09.13</div>
            <div>2022.09.20</div>
          </StTable>
          
        </StTbody>
      </StTableContainer>
    </StWrapper>
  );
}

export default Schedule;

const StWrapper = styled.div`
  width: 96%;
  min-height: 40vh;
  margin-left: 2%;
  margin-top: 3%;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

const StTitle = styled.p`
  color: ${(props) => props.fc};
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -1.2px;
`;

const StTableContainer = styled.div`
  margin-top: 3%;
  width: 100%;
  min-height: 15vh;
  align-items: left;
`;

const StTable = styled.div`
  grid-template-columns: 1fr 4fr 1fr 2fr 2fr;
  display: grid;
  border-bottom: 1px solid #c6c6c6;
`;

const StThead = styled.div`
  background-color: #00a99d;
  border-radius: 8px;
  height: 50px;
  color: white;
  align-items: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const StTbody = styled.div`
  height: 50px;
  color: #333333;
  align-items: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  text-align: center;
`;
