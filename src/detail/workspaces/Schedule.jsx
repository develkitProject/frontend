import styled from 'styled-components';
import React, { useState } from 'react';
import useModalOverlay from '../../account/signup/hooks/useModalOverlay';
import BlackButton from '../../common/elements/BlackButton';
import CalendarApp from './calendar/CalendarApp';
import CalendarModal from '../../common/modal/CalendarModal';
import { StContent, StIntroContainer, StTitle } from './Contacts';

export default function Schedule({ id }) {
  const { isOpen, open, close, toggle } = useModalOverlay();

  return (
    <>
      <StIntroContainer>
        <div>
          <StTitle>일정관리</StTitle>
          <StContent>프로젝트 팀원들의 일정을 관리해보세요.</StContent>
        </div>
        <BlackButton text="일정만들기" onClick={open} />
      </StIntroContainer>
      <CalendarApp id={id} />
      {isOpen && <CalendarModal onClose={close} id={id} />}
    </>
  );
}
