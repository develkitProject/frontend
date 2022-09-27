import styled from 'styled-components';
import React, { useState } from 'react';
import BlackButton from '../../common/elements/BlackButton';
import CalendarApp from './calendar/CalendarApp';
import CalendarModal from '../../common/Modal/CalendarModal';

export default function Schedule({ id }) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StIntroContainer>
        <div>
          <StTitle>일정관리</StTitle>
          <StContent>프로젝트 팀원들의 일정을 관리해보세요.</StContent>
        </div>
        <BlackButton text="일정만들기" onClick={onOpenModal} />
      </StIntroContainer>
      <CalendarApp id={id} />
      {isOpen && <CalendarModal onClose={onCloseModal} id={id} />}
    </>
  );
}

const StWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
`;

const Projects = styled.div`
  width: 65%;
  height: 100%;
  margin-left: 50px;
  margin-top: 4%;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  justify-content: center;
`;

const StIntroContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #c6c6c6;
`;

const StTitle = styled.p`
  color: #333333;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.5px;
`;

const StContent = styled.p`
  margin-top: 10px;
  color: #333333;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -1px;
`;
