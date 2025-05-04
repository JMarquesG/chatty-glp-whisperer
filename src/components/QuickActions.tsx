
import React from 'react';
import { useChat } from '../contexts/ChatContext';
import { Button } from '@/components/ui/button';

const QuickActions = () => {
  const { addMessage } = useChat();

  const handleQuickAction = (action: string) => {
    addMessage(action, 'user');
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-4">
      <Button 
        variant="outline"
        className="bg-blue-50 hover:bg-blue-100 text-blue-700"
        onClick={() => handleQuickAction('Català')}
      >
        Català
      </Button>
      <Button 
        variant="outline"
        className="bg-blue-50 hover:bg-blue-100 text-blue-700"
        onClick={() => handleQuickAction('Español')}
      >
        Español
      </Button>
      <Button 
        variant="outline"
        className="bg-blue-50 hover:bg-blue-100 text-blue-700"
        onClick={() => handleQuickAction('Naixements')}
      >
        Naixements
      </Button>
      <Button 
        variant="outline"
        className="bg-blue-50 hover:bg-blue-100 text-blue-700"
        onClick={() => handleQuickAction('Matrimonis')}
      >
        Matrimonis
      </Button>
      <Button 
        variant="outline"
        className="bg-blue-50 hover:bg-blue-100 text-blue-700"
        onClick={() => handleQuickAction('Defuncions')}
      >
        Defuncions
      </Button>
    </div>
  );
};

export default QuickActions;
