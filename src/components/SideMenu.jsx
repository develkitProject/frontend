import styled from 'styled-components';
import home from '../img/home.svg';
import document from '../img/document.svg';
import schedule from '../img/schedule.svg';
import contacts from '../img/contacts.svg';
import laptop from '../img/laptop.svg';
import chat from '../img/chat.svg';
import arrowDown from '../img/arrowDown.svg'

function SideMenu() {
  return (
        <StWrapper>
            <StLabel><StIcon src={home}/>홈</StLabel>

            <StLabel style={{borderBottom: "none"}}>
                <StIcon src={document}/>게시판
                <StIcon src={arrowDown}/>
            </StLabel>
                    <StMenuInDiv>
                        <StMenuIn>공지사항</StMenuIn>
                        <StMenuIn>문서</StMenuIn>
                    </StMenuInDiv>
            <StLabel style={{borderTop: "solid 1px #c6c6c6"}}><StIcon src={schedule}/>일정 관리</StLabel>
            <StLabel><StIcon src={contacts}/>주소록</StLabel>
            <StLabel><StIcon src={laptop}/>프로젝트 정보</StLabel>
            <div>
                <StButton><StIcon src={chat}/>채팅하기</StButton>
            </div>
        </StWrapper>

  );
}

export default SideMenu;

const StWrapper = styled.div`
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

const StLabel = styled.div`
  width: 100%;
  border-bottom: solid 1px #c6c6c6;
  display:table-cell;
  /* align-items: center; */
  height: 35px;
  line-height: 35px;
  vertical-align:middle;
  cursor: pointer;
`;


const StMenuInDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  cursor: pointer;
`;

const StMenuIn = styled.div`
  width: 100%;
  height: 35px;
  line-height: 35px;
  color: #6a6a6a;

  display:table-cell;
  align-items: center;
  vertical-align:middle;
  cursor: pointer;
`;


const StIcon = styled.img`
 margin-right: 5px;
`;

const StButton = styled.button`
 margin-top: 15px;
 background-color: #00a99d;
 margin-left: 3%;
 width: 95%;
 height: 40px;
 border-radius: 8px;
 border: 0px;
 color:#fff;
 text-align: center;
 font-size: 1.15rem;
 font-weight: bold;
 letter-spacing: -1px;
 cursor: pointer;
`;