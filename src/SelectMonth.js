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
      <div className="date-ul-wrap">
        <ul id="dateList year21">
          {dateList.map((list, index) => {
            return (
              list.includes('2021') && (
                <MonthList
                  data={list}
                  key={index}
                  setMonth={setMonth}
                  idx={index}
                />
              )
            );
          })}
        </ul>
        <ul id="dateList year22">
          {dateList.map((list, index) => {
            return (
              list.includes('2022') && (
                <MonthList
                  data={list}
                  key={index}
                  setMonth={setMonth}
                  idx={index}
                />
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SelectMonth;
