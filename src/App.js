import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import MessageList from './MessageList';
import Landing from './Landing';
import SelectMonth from './SelectMonth';
import PasswordInput from './PasswordInput';
import ContextProvider from './context/Context';

const App = () => {
  // const [isPassed, setIsPassed] = useState(false);
  // const [showLanding, setShowLanding] = useState(true);
  // const [nickName, setNickName] = useState('');
  // const [month, setMonth] = useState(null);

  // const passHandler = () => {
  //   setIsPassed(true);
  // };

  // const setNicknameHandler = (enteredNickname) => {
  //   setNickName(enteredNickname);
  //   setShowLanding(false);
  // };

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<PasswordInput />} />
        <Route path="/nickname" element={<Landing />} />
        <Route path="/date" element={<SelectMonth />} />
        <Route path="/date/:year/:month" element={<MessageList />} />
      </Routes>
    </ContextProvider>
  );

  // return (
  //   <>
  //     {!isPassed && <PasswordInput onPass={passHandler} />}
  //     {showLanding && <Landing onSet={setNicknameHandler} />}
  //     {month === null ? (
  //       <SelectMonth onSelect={setMonth} />
  //     ) : (
  //       <MessageList
  //         nickName={nickName}
  //         selectedMonth={month}
  //         setMonth={setMonth}
  //       />
  //     )}
  //   </>
  // );
};

export default App;
