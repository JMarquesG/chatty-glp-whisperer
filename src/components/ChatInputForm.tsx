
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { useChat } from '../contexts/ChatContext';

const ChatInputForm = () => {
  const [input, setInput] = useState('');
  const { addMessage, isTyping } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage(input.trim(), 'user');
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4 p-2 border-t">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escriu la teva consulta aquí..."
        disabled={isTyping}
        className="flex-grow"
      />
      <Button 
        type="submit" 
        disabled={!input.trim() || isTyping}
        className="bg-catalonia-red hover:bg-red-700"
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
};

export default ChatInputForm;
