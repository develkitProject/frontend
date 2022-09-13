import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // css import
import moment from 'moment/moment';

export default function CalendarApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Calendar onChange={onChange} value={value} />
      {/* <div className='text-gray-500 mt-4'>
        {moment(value).format('YYYY년 MM월 DD일')}
      </div> */}
    </div>
  );
}
