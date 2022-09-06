import styled from 'styled-components';
import home from '../img/home.svg';
import document from '../img/document.svg';
import schedule from '../img/schedule.svg';
import contacts from '../img/contacts.svg';
import laptop from '../img/laptop.svg';
import chat from '../img/chat.svg';

function SideMenu() {
  return (
        <StWrapper>
            <StLabel><StIcon src={home}/>홈</StLabel>
            <StLabel><StIcon src={document}/>게시판</StLabel>
                <div>
                    <div>공지사항</div>
                    <div>일일보고 및 계획</div>
                </div>
            <StLabel><StIcon src={schedule}/>일정 관리</StLabel>
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
  margin-left: 8.4%;
  margin-top: 8%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #333333;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

const StLabel = styled.div`
  width: 100%;
  height: 35px;
  line-height: 35px;
  border-bottom: solid 1px #c6c6c6;
  display:table-cell;
  align-items: center;
  vertical-align:middle;
`;



const StIcon = styled.img`
 margin-right: 5px;
`;

const StButton = styled.button`
 margin-top: 15px;
 background-color: #00a99d;
 margin-left: 3%;
 width: 95%;
 height: 50px;
 border-radius: 8px;
 border: 0px;
 color:#fff;
 text-align: center;
 font-size: 1.15rem;
 font-weight: bold;
 letter-spacing: -1px;
 cursor: pointer;
`;