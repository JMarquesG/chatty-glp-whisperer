
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Message, ChatContextType } from '../types/chat';
import { v4 as uuidv4 } from 'uuid';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const addMessage = (content: string, sender: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: uuidv4(),
      content,
      sender,
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (sender === 'user') {
      handleAssistantResponse(content);
    }
  };

  const handleAssistantResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate a delay for typing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let response: string;
    
    // Simulate different responses based on user input
    const lowerMsg = userMessage.toLowerCase();
    if (lowerMsg.includes('hola') || lowerMsg.includes('hi') || lowerMsg.includes('hello')) {
      response = "Hola! Soc la LaIA, l'assistent virtual del Punt d'Atenció dels Registres Civils de Catalunya.";
    } else if (lowerMsg.includes('català') || lowerMsg.includes('catalan')) {
      response = "Vols continuar parlant en Català o parar-nos a l'espanyol?";
    } else if (lowerMsg.includes('naixement') || lowerMsg.includes('birth')) {
      response = "Soc aquí per a ajudar-te a trobar fàcilment la informació que necessites sobre naixements, matrimonis, defuncions i altres tràmits.";
    } else if (lowerMsg.includes('matrimoni') || lowerMsg.includes('marriage')) {
      response = "Per iniciar el tràmit de matrimoni, necessitaràs portar el DNI o NIE i omplir una sol·licitud al Registre Civil.";
    } else if (lowerMsg.includes('defunció') || lowerMsg.includes('death')) {
      response = "Els certificats de defunció es poden sol·licitar al Registre Civil on es va inscriure la defunció.";
    } else if (lowerMsg.includes('ajuda') || lowerMsg.includes('help')) {
      response = "Pots parlar-me directament o escriure la teva consulta usant el teclat. Pregunta'm el que necessitis, t'ho faré molt fàcil!";
    } else {
      response = "No he entès la teva consulta. Pots demanar-me informació sobre naixements, matrimonis, defuncions o altres tràmits dels Registres Civils.";
    }
    
    setIsTyping(false);
    addMessage(response, 'assistant');
  };

  const value = {
    messages,
    addMessage,
    isTyping
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
