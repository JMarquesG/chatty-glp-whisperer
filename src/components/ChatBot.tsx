
import React, { useEffect } from 'react';
import Header from './Header';
import ChatInterface from './ChatInterface';
import Avatar from './Avatar';
import QuickActions from './QuickActions';
import { useChat } from '../contexts/ChatContext';

const ChatBot = () => {
  const { addMessage } = useChat();

  useEffect(() => {
    // Add initial message when the component mounts
    setTimeout(() => {
      addMessage("Hola! Soc la LaIA, l'assistent virtual del Punt d'Atenció dels Registres Civils de Catalunya.", 'assistant');
    }, 1000);
  }, [addMessage]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-grow flex flex-col max-w-4xl mx-auto w-full">
          <div className="p-4">
            <QuickActions />
          </div>
          <div className="flex-grow overflow-hidden bg-white rounded-lg shadow-md m-4">
            <ChatInterface />
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default ChatBot;
