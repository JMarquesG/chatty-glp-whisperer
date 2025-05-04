
import React from 'react';
import ChatBot from '../components/ChatBot';
import { ChatProvider } from '../contexts/ChatContext';

const Index = () => {
  return (
    <ChatProvider>
      <ChatBot />
    </ChatProvider>
  );
};

export default Index;
