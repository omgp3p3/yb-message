import React, { useState } from 'react';
import { privateMessage } from './message';
import './style.css';

function RenderMessage({ msg, date, nickName }) {
  return (
    <>
      {msg.map((m, index) => {
        let { time, content } = m;
        while (content.indexOf('@@') >= 0) {
          content = content.replace('@@', nickName);
        }
        const isImage = content.indexOf('message') >= 0;
        const isVideo = content.indexOf('videos') >= 0;
        if (isImage) {
          return (
            <li key={index}>
              <div className="profile">
                <img
                  src={'images/profile.jpg'}
                  alt="profile"
                  className="profile-image"
                />
                <span className="name">유빈</span>
              </div>
              <div className="artist-message">
                <a href={content + '.jpg'} target="_blank">
                  <img
                    src={content + '.jpg'}
                    className="message-photo"
                    alt=""
                  />
                </a>
                <span className="date">{date}</span>
                <span className="time">{time}</span>
              </div>
            </li>
          );
        } else if (isVideo) {
          return (
            <li key={index}>
              <div className="profile">
                <img
                  src={'images/profile.jpg'}
                  alt="profile"
                  className="profile-image"
                />
                <span className="name">유빈</span>
              </div>
              <div className="artist-message">
                <a href={content + '.mp4'} target="_blank">
                  <img src={content + '.jpg'} className="message-photo" />
                </a>
                <span className="date">{date}</span>
                <span className="time">{time}</span>
              </div>
            </li>
          );
        }

        return (
          <li key={index}>
            <div className="profile">
              <img
                src={'images/profile.jpg'}
                alt="profile"
                className="profile-image"
              />
              <span className="name">유빈</span>
            </div>
            <div className="artist-message">
              <span className="content">{content}</span>
              <span className="date">{date}</span>
              <span className="time">{time}</span>
            </div>
          </li>
        );
      })}
    </>
  );
}

function Message({ msg, nickName }) {
  return (
    <div>
      {msg.map((m, index) => {
        const { date, messages } = m;
        return (
          <ul id="messages" key={index}>
            <div className="message-date" id={date}>
              {date}
            </div>
            <RenderMessage msg={messages} date={date} nickName={nickName} />
          </ul>
        );
      })}
    </div>
  );
}

function MessageList({ nickName, selectedMonth, setMonth }) {
  if (selectedMonth === -1) selectedMonth = 0;
  const messages = Object.entries(privateMessage)[selectedMonth];
  const [month, monthMessage] = messages;

  // 날짜 선택
  const [dayVisible, setDayVisible] = useState(false);
  const dayList = monthMessage.map((msg) => {
    const day = msg['date'].split('.')[2];
    return day;
  });

  return (
    <div id="message-container">
      <div id="title">
        <span
          className="arrow"
          onClick={() => {
            setMonth(-1);
            setDayVisible(false);
            window.scrollTo(0, 0);
          }}
        >
          <i className="fa-solid fa-angle-left"></i>
        </span>
        <a href="#">
          <span className="artist">유빈</span>
        </a>
        <span className="calendar" onClick={() => setDayVisible(!dayVisible)}>
          <i className="fa-regular fa-calendar"></i>
        </span>
      </div>
      {dayVisible && (
        <SelectDay
          dayList={dayList}
          month={month}
          setDayVisible={setDayVisible}
        />
      )}
      <div id="message-wrap">
        <Message msg={monthMessage} nickName={nickName} />
      </div>
      <div id="input-field">
        <div className="user-message">
          유빈아 사랑해♡
          <button className="push-button">
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
  // console.log(Object.entries(privateMessage));
}

function SelectDay({ dayList, month, setDayVisible }) {
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
}

function RenderDays({ day, month, setDayVisible }) {
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
}

export default MessageList;
