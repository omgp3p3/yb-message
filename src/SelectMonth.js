import React from 'react';
import { dateList } from './message';
import './style.css';

function MonthList({ data, setMonth, idx }) {
  return (
    <li
      className="date-list-elem"
      onClick={() => {
        setMonth(idx);
        window.scrollTo(0, 0);
      }}
    >
      {data}
    </li>
  );
}

function SelectMonth({ setMonth }) {
  return (
    <div id="selectMonth">
      <p>메시지가 많아</p>
      <p>프메를 월별로 정리하였습니다.</p>
      <ul id="dateList">
        {dateList.map((list, index) => {
          return (
            <MonthList
              data={list}
              key={index}
              setMonth={setMonth}
              idx={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SelectMonth;
