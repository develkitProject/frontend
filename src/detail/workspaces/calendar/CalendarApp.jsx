/* eslint-disable consistent-return */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import dayjs from 'dayjs';
import styled from 'styled-components';
import velkit2 from '../../../common/img/velkit2.png';
import velkit3 from '../../../common/img/velkit3.png';
import useModalOverlay from '../../../account/signup/hooks/useModalOverlay';
import {
  useGetSchedulesQuery,
  useDeleteSchedulesMutation,
} from '../../../redux/modules/schedules';
import { SweetAlertConfirmHook } from '../../../common/elements/SweetAlertConfirm';
import { SweetAlertHook } from '../../../common/elements/SweetAlert';

export default function CalendarApp({ id }) {
  const [value, onChange] = useState(new Date());
  const { data } = useGetSchedulesQuery(id);
  const [deleteSchedules] = useDeleteSchedulesMutation();
  const dataArr = data?.data;
  const { isOpen, open, close } = useModalOverlay();
  const [detailData, setDetailData] = useState([]);

  const saveStateDetail = (content) => {
    setDetailData(content);
    open();
  };

  const deleteFunction = (schedulesId) => {
    const obj = {
      id,
      schedulesId,
    };
    deleteSchedules(obj);
    SweetAlertHook(2000, 'success', '일정이 삭제되었습니다!');
    close();
  };

  const onDeleteSchedules = (schedulesId) => {
    // eslint-disable-next-line no-empty
    if (
      SweetAlertConfirmHook(
        '정말 일정을 지우시겠습니까?',
        deleteFunction,
        schedulesId,
      )
    ) {
      // eslint-disable-next-line no-empty
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Calendar
        onChange={onChange}
        value={value}
        showNeighboringMonth={false}
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        tileContent={({ date }) => {
          if (
            dataArr?.find(
              (x) => x?.eventDate === dayjs(date).format('YYYY-MM-DD'),
            )
          ) {
            return (
              <>
                {dataArr
                  .filter(
                    (data) =>
                      data?.eventDate === dayjs(date).format('YYYY-MM-DD'),
                  )
                  .map((data) => {
                    return (
                      <StMark
                        key={data.id}
                        onClick={() => {
                          saveStateDetail(data);
                        }}
                      >
                        {data.content}
                      </StMark>
                    );
                  })}
              </>
            );
          }
        }}
      >
        {' '}
      </Calendar>
      <AlarmDiv>
        <Velkit2 />
        <StContentBox2>
          일정을 클릭하면 오른쪽에서 <br /> 일정 확인 및 삭제가 가능합니다.
        </StContentBox2>
      </AlarmDiv>
      {isOpen && (
        <StDetail>
          <StDate>{detailData.eventDate}</StDate>
          <StContentBox>{detailData.content}</StContentBox>
          <StDeleteButton
            onClick={() => {
              onDeleteSchedules(detailData.id);
            }}
          >
            삭제
          </StDeleteButton>
          <Velkit />
        </StDetail>
      )}
    </div>
  );
}

const StMark = styled.div`
  margin-top: 5px;
  width: 100%;
  border-radius: 5px;
  top: 30px;
  min-height: 22px;
  max-height: 40px;
  background-color: #00a99d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  text-align: center;
  overflow: hidden;
  &:hover {
    background-color: #055869;
  }
`;

const StDetail = styled.div`
  width: 20%;
  max-width: 350px;
  height: 110px;
  border: solid 1px #00a99d;
  border-radius: 20px;
  position: absolute;
  top: 3%;
  right: 5%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  letter-spacing: -0.5px;
  word-break: break-all;
`;

const StDeleteButton = styled.span`
  position: absolute;
  font-weight: 600;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-size: 15px;
`;

const StDate = styled.span`
  color: #00a99d;
  margin: 10px 15px;
  font-size: 17px;
  font-weight: 600;
`;

const StContentBox = styled.div`
  width: 90%;
  height: 50px;
  background-color: #eef8f8;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin-top: 8px;
  word-break: break-all;
`;

const Velkit = styled.div`
  width: 50px;
  height: 70px;
  background-image: url(${velkit3});
  background-size: 100% 100%;
  position: absolute;
  right: -30px;
  bottom: -20px;
`;

const Velkit2 = styled.div`
  width: 100px;
  height: 130px;
  background-image: url(${velkit2});
  background-size: 100% 100%;
  transform: scaleX(-1);
  z-index: 0;
`;

const AlarmDiv = styled.div`
  position: absolute;
  left: 50px;
  top: 30px;
  display: flex;
  width: 25%;
`;

const StContentBox2 = styled.div`
  width: 90%;
  height: 60px;
  background-color: #eef8f8;
  letter-spacing: -0.4px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  font-size: 17px;
  position: absolute;
  color: 424242;
  left: 100px;
  color: #6c6c6c;
`;
