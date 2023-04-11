import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function App() {
  const [messages, setMessages] = useState([]);

  function onSend(newMessages = []) {
    // TODO: Implement the logic to send the user's message to the GPT Assistant
    // and receive the Assistant's response.

    // For now, we will just echo the user's message back.
    const assistantResponse = {
      ...newMessages[0],
      _id: Math.round(Math.random() * 1000000),
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'GPT Assistant',
        avatar: 'https://placeimg.com/140/140/any',
      },
      text: `You said: ${newMessages[0].text}`,
    };

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [assistantResponse, newMessages[0]]),
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1,
      }}
      inverted={true}
    />
  );
}
