import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { useYBState, useYBActions } from './context/Context';

const Landing = () => {
  const state = useYBState();
  const actions = useYBActions();
  const nicknameRef = useRef('');
  const navigate = useNavigate();

  const authorized = state.authorized;
  useEffect(() => {
    if (!authorized) {
      alert('어허!');
      navigate('/');
    }
    nicknameRef.current.focus();
  }, [navigate, authorized]);

  const submitHandler = (event) => {
    event.preventDefault();
    const nickname = nicknameRef.current.value;
    actions.setNickname(nickname);
    navigate('/date');
  };

  return (
    <form id="landing" onSubmit={submitHandler}>
      <img src={'images/profile.jpg'} alt="" />
      <p>닉네임을 입력하세요!</p>
      <p>'@@'에 표시됩니다.</p>
      <input ref={nicknameRef} type="text" placeholder="닉네임" id="nickname" />
      <button type="submit">입장</button>
    </form>
  );
};

export default Landing;
