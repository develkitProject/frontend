import styled from 'styled-components';
import home from '../../asset/img/home.svg';
import document from '../../asset/img/document.svg';
import schedule from '../../asset/img/schedule.svg';
import contacts from '../../asset/img/contacts.svg';
import laptop from '../../asset/img/laptop.svg';
import chat from '../../asset/img/chat.svg';
import arrowDown from '../../asset/img/arrowDown.svg';
import Icon from './Icon';

import * as S from '../style';

const menuData = [{
    key: 'home',
    icon: home,
    title: '홈'
},{
    key: 'board',
    icon: document,
    title: '게시판',
    subItem: [{
        key: 'notice',
        subTitle: '공지사항'
    },{
        key: 'document',
        subTitle: '문서'
    }]
},{
    key: 'schedule',
    icon: schedule,
    title: '일정 관리'
},{
    key: 'contacts',
    icon: contacts,
    title: '주소록'
},{
    key: 'projectInfo',
    icon: laptop,
    title: '프로젝트 정보'
}]

export default function Sidebar({ onClickMenu }) {

  return (
    <S.StWrapper>
        {menuData.map(({key, title, subItem, icon}) => (
            <>
            {!subItem ? (
                <S.StLabel
                    role="presentation"
                    onClick={onClickMenu({key})}
                    key={key}
                >
                    <S.MenuIcon src={icon}/>
                    {title}
                </S.StLabel>
            ) : (
                <>
                <S.StLabel
                    role="presentation"
                    key={key}
                    style={{borderBottom: 'none'}}
                >
                    <S.MenuIcon src={icon}/>
                    {title}
                    <Icon.ArrowDown />
                </S.StLabel>
                <S.StMenuInDiv>
                {subItem.map(({key, subTitle}) => (
                    <S.StMenuIn 
                        onClick={onClickMenu({key})}
                        key={key}
                    >{subTitle}</S.StMenuIn>
                ))}
                </S.StMenuInDiv>
                </>
            )}
            </>
        ))}
      <div>
        <S.StButton>
          <S.MenuIcon src={chat} />채팅하기
        </S.StButton>
      </div>
    </S.StWrapper>
  );
}
