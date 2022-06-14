import React, { useState } from 'react';

function PasswordInput({ setPass }) {
  const [pwd, setPwd] = useState('');
  const password = process.env.REACT_APP_PASSWORD;
  return (
    <div id="passwordInput">
      <img src={'images/profile.jpg'} alt="" />
      <p>2022년 5월 마지막 프메 날짜를 입력하세요</p>
      <input
        type="text"
        placeholder="05XX"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          if (pwd === password) {
            setPass(false);
          } else {
            alert('잘못된 날짜입니다.');
          }
        }}
      >
        입력
      </button>
    </div>
  );
}

export default PasswordInput;
