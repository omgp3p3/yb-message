import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { dateList } from './message';
import './style.css';
import { useYBState } from './context/Context';

const MonthList = ({ data, navigate }) => {
  const [year, month] = data.split('.');

  return (
    <li
      className="date-list-elem"
      onClick={() => {
        navigate(`/date/${year}/${month}`);
        window.scrollTo(0, 0);
      }}
    >
      {data}
    </li>
  );
};

const SelectMonth = () => {
  const state = useYBState();
  const navigate = useNavigate();

  const authorized = state.authorized;
  useEffect(() => {
    if (!authorized) {
      alert('어허!');
      navigate('/');
    }
  }, [navigate, authorized]);

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
                  key={`2021-select-month-${index}`}
                  navigate={navigate}
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
                  key={`2022-select-month-${index}`}
                  navigate={navigate}
                  idx={index}
                />
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectMonth;
