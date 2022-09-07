import styled from 'styled-components';

function Schedule() {
  return (
    <StWrapper>
      <StTitle fc='#333333'>일정관리</StTitle>

      <StTableContainer>
        <StThead>
          <StTable style={{ borderBottom: 'none' }}>
            <th>담당자</th>
            <th>업무명</th>
            <th>작성자</th>
            <th>등록일</th>
            <th>수정일</th>
          </StTable>
        </StThead>
        <StTbody>
          <StTable>
            <th>신짱구</th>
            <th>제목_업무요청_20220906</th>
            <th>이지혜</th>
            <th>2022.09.13</th>
            <th>2022.09.20</th>
          </StTable>

          <StTable>
            <th>신짱구</th>
            <th>제목_업무요청_20220906</th>
            <th>이지혜</th>
            <th>2022.09.13</th>
            <th>2022.09.20</th>
          </StTable>

          <StTable>
            <th>신짱구</th>
            <th>제목_업무요청_20220906</th>
            <th>이지혜</th>
            <th>2022.09.13</th>
            <th>2022.09.20</th>
          </StTable>

          <StTable>
            <th>신짱구</th>
            <th>제목_업무요청_20220906</th>
            <th>이지혜</th>
            <th>2022.09.13</th>
            <th>2022.09.20</th>
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
  font-size: 1.3rem;
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
  font-size: 18px;
  font-weight: 500;
`;

const StTbody = styled.div`
  height: 50px;
  color: #333333;
  align-items: center;
  line-height: 50px;
  font-size: 18px;
  font-weight: normal;
  cursor: pointer;
`;
