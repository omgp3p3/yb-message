import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MessageList from './MessageList';
import Landing from './Landing';
import SelectMonth from './SelectMonth';
import PasswordInput from './PasswordInput';
import ContextProvider from './context/Context';

const App = () => {
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
};

export default App;
