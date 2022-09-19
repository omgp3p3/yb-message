import React, { useRef } from 'react';

function PasswordInput({ onPass }) {
  const pwdRef = useRef('');
  const password = process.env.REACT_APP_PASSWORD;

  const passwordValidationHandler = () => {
    if (pwdRef.current.value !== password) {
      pwdRef.current.value = '';
      return;
    }
    onPass();
  };

  return (
    <div id="passwordInput">
      <img src={'images/profile.jpg'} alt="" />
      <p>2022년 5월 마지막 프메 날짜를 입력하세요</p>
      <input ref={pwdRef} type="text" placeholder="05XX" />
      <button type="button" onClick={passwordValidationHandler}>
        입력
      </button>
    </div>
  );
}

export default PasswordInput;
