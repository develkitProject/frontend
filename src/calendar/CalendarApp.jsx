import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // css import
import moment from 'moment/moment';
import styled from 'styled-components';
import { useGetSchedulesQuery } from '../redux/modules/workspaces';

export default function CalendarApp({ id }) {
  const [value, onChange] = useState(new Date());
  const mark = ['2022-09-10', '2022-09-15', '2022-09-17'];
  const { data, error, isLoading } = useGetSchedulesQuery(id);
  const dataArr = data?.data;
  console.log(dataArr);

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
              x => x?.eventDate === moment(date).format('YYYY-MM-DD'),
            )
          ) {
            return (
              <>
                {dataArr
                  .filter(
                    data =>
                      data?.eventDate === moment(date).format('YYYY-MM-DD'),
                  )
                  .map(a => {
                    return <StMark key={a.id}>{a.content}</StMark>;
                  })}
              </>
            );
          }
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '40px',
          color: 'rgb(51, 129, 123)',
          fontWeight: '600',
          fontSize: '20px',
          bottom: '50px',
        }}
        className="text-gray-500 mt-4"
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
