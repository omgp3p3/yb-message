import React, { useState } from 'react';
import MessageList from './MessageList';
import Landing from './Landing';
import SelectMonth from './SelectMonth';
import PasswordInput from './PasswordInput';

function App() {
  const [isPassed, setIsPassed] = useState(false);
  const [landing, setLanding] = useState(true);
  const [nickName, setNickName] = useState('');
  const [month, setMonth] = useState(-1);

  const passHandler = () => {
    setIsPassed(true);
  };

  return (
    <>
      {!isPassed && <PasswordInput onPass={passHandler} />}
      {landing && <Landing setLanding={setLanding} setNickName={setNickName} />}
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
