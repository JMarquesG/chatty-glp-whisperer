
export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatContextType {
  messages: Message[];
  addMessage: (content: string, sender: 'user' | 'assistant') => void;
  isTyping: boolean;
}
