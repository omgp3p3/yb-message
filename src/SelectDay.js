import React, { useState } from 'react';

const SelectDay = ({ dayList, month, setDayVisible }) => {
  return (
    <div id="selectDay">
      <p>날짜를 골라주세요</p>
      <ul id="dayList">
        {dayList.map((day, index) => {
          return (
            <RenderDays
              day={day}
              key={index}
              month={month}
              setDayVisible={setDayVisible}
            />
          );
        })}
      </ul>
    </div>
  );
};

const RenderDays = ({ day, month, setDayVisible }) => {
  return (
    <li
      className="day-list-elem"
      onClick={(e) => {
        const date = month + '.' + day;
        const moveTo = document.getElementById(`${date}`).offsetTop - 80;
        window.scrollTo(0, moveTo);
        setDayVisible(false);
      }}
    >
      {day}
    </li>
  );
};

export default SelectDay;
