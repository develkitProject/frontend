import styled from 'styled-components';
import home from '../asset/img/home.svg';
import document from '../asset/img/document.svg';
import schedule from '../asset/img/schedule.svg';
import contacts from '../asset/img/contacts.svg';
import laptop from '../asset/img/laptop.svg';
import chat from '../asset/img/chat.svg';
import arrowDown from '../asset/img/arrowDown.svg';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Icon from '../detail/components/Icon';
import { useState } from 'react';
import { useCallback } from 'react';

const menuData = [
  {
    key: 'home',
    icon: home,
    title: '홈',
  },
  {
    key: 'board',
    icon: document,
    title: '게시판',
    subItem: [
      {
        key: 'notice',
        subTitle: '공지사항',
      },
      {
        key: 'document',
        subTitle: '문서',
      },
    ],
  },
  {
    key: 'schedule',
    icon: schedule,
    title: '일정 관리',
  },
  {
    key: 'contacts',
    icon: contacts,
    title: '주소록',
  },
  {
    key: 'projectInfo',
    icon: laptop,
    title: '프로젝트 정보',
  },
];

function SideMenu({ handleClick }) {

  const [menu, setMenu] = useState('home');

  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);

  const onClickMenu = useCallback(({ key }) =>
    () => {
      setMenu(key);
    },
  []
);
  return (
    <StWrapper>
      {menuData.map(({ key, title, subItem, icon }) => (
        <>
      {!subItem ? (
            <StLabel
              role='presentation'
              onClick={() => {navigate(`/workspace/main/${id}`);}}
              key={key}
            >
              <StIcon src={icon} />
              {title}
            </StLabel>
          ) : (
            <>
              <StLabel
                role='presentation'
                key={key}
                style={{ borderBottom: 'none' }}
              >
                <StIcon src={icon} />
                {title}
                <Icon.ArrowDown />
              </StLabel>
              <StMenuInDiv>
                {subItem.map(({ key, subTitle }) => (
                  <StMenuIn onClick={() => {navigate(`/workspace/main/${id}`);}} key={key}>
                    {subTitle}
                  </StMenuIn>
                ))}
              </StMenuInDiv>
            </>
          )}
        </>
))}

      <div>
        <StButton onClick={handleClick}>
          <StIcon src={chat} />
          채팅하기
        </StButton>
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
  display: table-cell;
  /* align-items: center; */
  height: 35px;
  line-height: 35px;
  vertical-align: middle;
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

  display: table-cell;
  align-items: center;
  vertical-align: middle;
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
  color: #fff;
  text-align: center;
  font-size: 1.15rem;
  font-weight: bold;
  letter-spacing: -1px;
  cursor: pointer;
`;
