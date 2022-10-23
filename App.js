import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';




function App() {
  return (
    <div>
      <ChatEngine
          height='100vh' 
          projectID='91b1d173-a6d5-4628-975a-4b4edd9f27a3'        
          userName='boomchat'
          userSecret='142536'
         
         // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    </div>
  );
}


export default App;
