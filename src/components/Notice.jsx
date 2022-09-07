import styled from 'styled-components';

function Notice() {
  return (
        <StWrapper>
            <StTitle fc="#333333">필독</StTitle>
            <StNoticeContainer>
                <StTitle fc="#00a99d">공지사항</StTitle>
                <StTitle fc="#333333">[공유] 9월 17일 중간 발표</StTitle>
                <StContent> 
                    이번주까지 CRUD화이팅 'ㅅ')! <br/>
                </StContent>
                <StInfoDiv>
                <p>신짱구 ｜</p>
                <p>2022.09.13 ｜</p>
                <p>읽음 7 </p>
                </StInfoDiv>
            </StNoticeContainer>
        </StWrapper>

  );
}

export default Notice;

const StWrapper = styled.div`
  width: 96%;
  min-height: 30vh;
  margin-left: 2%;
  margin-top: 3%;
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
 margin-bottom: 20px;
`;

const StNoticeContainer = styled.div`
  padding: 5%;
  width: 90%;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #eef8f8;
`;

const StContent = styled.div`
  width: 75%;
  min-height: 5vh;
  max-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  overflow-y: auto;
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: 500;
`;

const StInfoDiv = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  align-items: left;
  color: #999999;
  font-size: 16px;
  letter-spacing: -0.8px;
  font-weight: 500;
  font-size: 0.9rem;
`;