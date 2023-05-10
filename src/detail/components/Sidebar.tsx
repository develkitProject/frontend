import home from '../../common/img/home.svg';
import document from '../../common/img/document.svg';
import schedule from '../../common/img/schedule.svg';
import contacts from '../../common/img/contacts.svg';
import laptop from '../../common/img/laptop.svg';
import chat from '../../common/img/chat.svg';
import { ClickMenuType } from '../hooks/types';

import * as S from '../style';

interface SubItem  {
  key: string;
  subTitle: string;
  tab?: string;
};

interface MenuData  {
  key: string;
  icon: string;
  title: string;
  subItem?: SubItem[];
  tab?: string;
};

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
        tab: 'list',
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


interface Props {
  onClickMenu: (params: ClickMenuType) => () => void;
  menu: string;
  toggle: () => void
}

export default function Sidebar({ onClickMenu, menu, toggle }: Props) {
  return (
    <S.StWrapper>
      {menuData.map(({ key, title, subItem, icon, tab }: MenuData) => (
        <div key={key}>
          {!subItem ? (
            <S.StLabel
              role="presentation"
              onClick={onClickMenu({ key, tab })}
              key={key}
              style={
                key === menu
                  ? {
                      color: '#00A99D',
                      backgroundColor: '#EEF8F8',
                      borderRadius: '10px',
                    }
                  : undefined
              }
            >
              <S.MenuIcon src={icon} />
              {title}
            </S.StLabel>
          ) : (
            <>
              <S.StLabel
                role="presentation"
                key={key}
                style={{ borderBottom: 'none' }}
              >
                <S.MenuIcon src={icon} />
                {title}
              </S.StLabel>
              <S.StMenuInDiv>
                {subItem.map(({ key, subTitle, tab }) => (
                  <S.StMenuIn
                    onClick={onClickMenu({ key, tab })}
                    key={key}
                    style={
                      key === menu
                        ? {
                            color: '#00A99D',
                            backgroundColor: '#EEF8F8',
                            borderRadius: '10px',
                          }
                        : undefined
                    }
                  >
                    {subTitle}
                  </S.StMenuIn>
                ))}
              </S.StMenuInDiv>
            </>
          )}
        </div>
      ))}
      <div>
        <S.StButton onClick={toggle}>
          <S.MenuIcon src={chat} />
          채팅하기
        </S.StButton>
      </div>
    </S.StWrapper>
  );
}
