import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // css import
import CalendarDetail from './CalendarDetail';
import moment from 'moment/moment';
import styled from 'styled-components';
import { useGetSchedulesQuery } from '../../../redux/modules/workspaces';

export default function CalendarApp({ id }) {
  const [value, onChange] = useState(new Date());
  const { data, error, isLoading } = useGetSchedulesQuery(id);
  const dataArr = data?.data;
  const [isOpen, setIsOpen] = useState(false);
  const [detailData, setDetailData] = useState('');

  const openDetail = () => {
    setIsOpen(!isOpen);
  };

  const saveStateDetail = (content) => {
    setDetailData(content);
    openDetail();
  };

  // console.log(detailData);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100%',
        position: 'relative',
      }}
    >
      <Calendar
        onChange={onChange}
        value={value}
        showNeighboringMonth={false}
        // showNeighboringMonth={false}
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        tileContent={({ date, view }) => {
          if (
            dataArr?.find(
              (x) => x?.eventDate === moment(date).format('YYYY-MM-DD')
            )
          ) {
            return (
              <>
                {dataArr
                  .filter(
                    (data) =>
                      data?.eventDate === moment(date).format('YYYY-MM-DD')
                  )
                  .map((data) => {
                    return (
                      <StMark
                        key={data.id}
                        onClick={() => {
                          saveStateDetail(data.content);
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

      {isOpen && (
        <StDetail>
          {detailData}
          <StDeleteButton>X</StDeleteButton>
        </StDetail>
      )}
      <div
        style={{
          position: 'absolute',
          right: '40px',
          color: 'rgb(51, 129, 123)',
          fontWeight: '600',
          fontSize: '20px',
          bottom: '50px',
        }}
        className='text-gray-500 mt-4'
      >
        {moment(value).format('YYYY년 MM월 DD일')}
      </div>
    </div>
  );
}

const StMark = styled.div`
  margin-top: 5px;
  width: 100%;
  border-radius: 5px;
  top: 30px;
  min-height: 22px;
  background-color: #00a99d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  text-align: center;
`;

const StDetail = styled.div`
  width: 20%;
  max-width: 350px;
  height: 100px;
  border: solid 2px #00a99d;
  border-radius: 20px;
  position: absolute;
  top: 3%;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  letter-spacing: -0.5px;
`;

const StDeleteButton = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
`;
