import React, { useRef, useEffect } from 'react';
import './style.css';

const Landing = ({ onSet }) => {
  const nicknameRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();
    onSet(nicknameRef.current.value);
  };

  useEffect(() => {
    nicknameRef.current.focus();
  }, []);

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
