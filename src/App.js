import React, { useState } from 'react';
import MessageList from './MessageList';
import Landing from './Landing';
import SelectMonth from './SelectMonth';

function App() {
  const [landing, setLanding] = useState(true);
  const [nickName, setNickName] = useState('');
  const [month, setMonth] = useState(-1);

  return (
    <>
      {landing && <Landing setLanding={setLanding} setNickName={setNickName} />}
      {month < 0 && <SelectMonth setMonth={setMonth} />}
      <MessageList
        nickName={nickName}
        selectedMonth={month}
        setMonth={setMonth}
      />
    </>
  );
}

export default App;
