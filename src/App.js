import React, { useState } from 'react';
import MessageList from './MessageList';
import Landing from './Landing';
import SelectMonth from './SelectMonth';
import PasswordInput from './PasswordInput';

function App() {
  const [isPassed, setIsPassed] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [nickName, setNickName] = useState('');
  const [month, setMonth] = useState(-1);

  const passHandler = () => {
    setIsPassed(true);
  };

  const setNicknameHandler = (enteredNickname) => {
    setNickName(enteredNickname);
    setShowLanding(false);
  };

  return (
    <>
      {!isPassed && <PasswordInput onPass={passHandler} />}
      {showLanding && <Landing onSet={setNicknameHandler} />}
      {month < 0 && <SelectMonth setMonth={setMonth} />}
      {month >= 0 && (
        <MessageList
          nickName={nickName}
          selectedMonth={month}
          setMonth={setMonth}
        />
      )}
    </>
  );
}

export default App;
