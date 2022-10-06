import React, { useRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import BasicInput from '../elements/BasicInput';
import CloseButton from '../elements/CloseButton';
import Button1 from '../elements/Button';
import ModalContainer from './ModalContainer';
import { useAddSchedulesMutation } from '../../redux/modules/schedules';
import { SweetAlertHook } from '../elements/SweetAlert';

function CalendarModal({ onClose, id }) {
  const modalRef = useRef(null);
  const [state, setState] = useState('');
  const [date, setDate] = useState('');
  const [addSchedules] = useAddSchedulesMutation();

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const handleSubmit = () => {
    const data = {
      id,
      content: state,
      eventDate: date,
    };

    if (state !== '' && date !== '') {
      addSchedules(data);
      handleClose();
    } else {
      // eslint-disable-next-line no-alert
      SweetAlertHook(2000, 'error', '빈칸을 모두 채워주세요');
    }
  };

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <CloseButton handleClose={handleClose} />
          <StProject>프로젝트 일정 만들기</StProject>
          <StMent>
            프로젝트 일정관리에서 프로젝트 관련 일정을 추가할 수 있습니다
          </StMent>

          <InputBox>
            <InputSpan>일정 제목</InputSpan>
          </InputBox>
          <BasicInput
            width="80%"
            marginTop="10px"
            placeholder="일정 제목을 입력하세요(25자 이내)"
            maxLength={25}
            onChange={onChange}
          />
          <InputBox>
            <InputSpan>날짜</InputSpan>
            <DateInput type="date" onChange={onChangeDate} />
          </InputBox>
          <Button1 text="일정 생성하기" width="300px" onClick={handleSubmit} />
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
}

export default CalendarModal;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: 500px;
  border-radius: 20px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #00a99d;
  z-index: 9999;
  font-family: 'Noto Sans KR';
  box-shadow: 3px 3px 3px rgba(85, 85, 85, 0.1);
`;

const StProject = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: #00a99d;
`;

const InputSpan = styled.span`
  font-weight: 500;
  letter-spacing: -0.05em;
  color: #999999;
`;

const InputBox = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const StMent = styled.span`
  font-size: 16px;
  color: #626262;
  margin-top: 20px;
  letter-spacing: -0.8px;
`;

const DateInput = styled.input`
  width: 120px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #999999;
  display: flex;
  text-align: center;
  margin-left: -10px;
  margin-top: 15px;
  &:focus {
    outline: none;
  }
`;
