import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { privateMessage } from './message';
import SelectDay from './SelectDay';
import './style.css';
import { useYBState } from './context/Context';

const MessageList = () => {
  const state = useYBState();
  const navigate = useNavigate();

  const authorized = state.authorized;
  useEffect(() => {
    if (!authorized) {
      navigate('/');
    }
  }, [navigate, authorized]);

  const { year, month } = useParams();
  const date = `${year}.${month}`;

  const messages = privateMessage[date];

  // 날짜 선택
  const [dayVisible, setDayVisible] = useState(false);
  const dayList = messages.map(({ date }) => {
    const day = date.split('.')[2];
    return day;
  });

  return (
    <div id="message-container">
      <Header setDayVisible={setDayVisible} />
      {dayVisible && (
        <SelectDay
          dayList={dayList}
          month={date}
          setDayVisible={setDayVisible}
        />
      )}
      <div id="message-wrap">
        <Message messageList={messages} nickName={state.nickname} />
      </div>
      <InputField />
    </div>
  );
};

const Message = ({ messageList, nickName }) => {
  return (
    <div>
      {messageList.map(({ date, messages }) => {
        return (
          <ul id="messages" key={date}>
            <div className="message-date" id={date}>
              {date}
            </div>
            <RenderMessage
              messageList={messages}
              date={date}
              nickName={nickName}
            />
          </ul>
        );
      })}
    </div>
  );
};

const RenderMessage = ({ messageList, date, nickName }) => {
  return (
    <>
      {messageList.map((msg, index) => {
        let { time, content } = msg;

        content = content.replace(/@@/g, nickName);

        const flag = content.includes('message')
          ? 'image'
          : content.includes('videos')
          ? 'video'
          : 'message';

        return (
          <li key={`${date}-${index}`}>
            <Profile />
            <Content flag={flag} content={content} date={date} time={time} />
          </li>
        );
      })}
    </>
  );
};

const Profile = () => {
  return (
    <div className="profile">
      <img src="/images/profile.jpg" alt="profile" className="profile-image" />
      <span className="name">유빈</span>
    </div>
  );
};

const Content = ({ flag, content, date, time }) => {
  return (
    <div className="artist-message">
      {flag === 'image' && (
        <a href={content + '.jpg'} target="_blank" rel="noopener noreferrer">
          <img
            src={content + '.jpg'}
            className="message-photo"
            alt="img-artist-sended"
          />
        </a>
      )}
      {flag === 'video' && (
        <a href={content + '.mp4'} target="_blank" rel="noopener noreferrer">
          <img
            src={content + '.jpg'}
            className="message-photo"
            alt="vid-artist-sended"
          />
        </a>
      )}
      {flag === 'message' && <span className="content">{content}</span>}

      <span className="date">{date}</span>
      <span className="time">{time}</span>
    </div>
  );
};

const Header = ({ setDayVisible }) => {
  const navigate = useNavigate();
  return (
    <div id="title">
      <span
        className="arrow"
        onClick={() => {
          navigate(-1);
        }}
      >
        <i className="fa-solid fa-angle-left"></i>
      </span>
      <div onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer' }}>
        <span className="artist">유빈</span>
      </div>
      <span
        className="calendar"
        onClick={() => setDayVisible((visible) => !visible)}
      >
        <i className="fa-regular fa-calendar"></i>
      </span>
    </div>
  );
};

const InputField = () => {
  return (
    <div id="input-field">
      <div className="user-message">
        유빈아 사랑해♡
        <button className="push-button">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default MessageList;
