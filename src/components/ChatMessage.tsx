
import React from 'react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`message-bubble ${message.sender === 'assistant' ? 'assistant-message' : 'user-message'}`}>
      {message.content.split('\n').map((text, i) => (
        <p key={i} className={i > 0 ? 'mt-2' : ''}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default ChatMessage;
