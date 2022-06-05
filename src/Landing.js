import React, { useState } from 'react';
import './style.css';

function Landing({ setLanding, setNickName }) {
  return (
    <div id="landing">
      <img src={'images/logo.png'} alt="" />
      <p>닉네임을 입력하세요!</p>
      <p>'@@'에 표시됩니다.</p>
      <input
        type="text"
        placeholder="닉네임"
        id="nickname"
        onChange={(e) => setNickName(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setLanding(false);
        }}
      >
        입장
      </button>
    </div>
  );
}

export default Landing;
