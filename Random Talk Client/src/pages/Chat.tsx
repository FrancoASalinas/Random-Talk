import { useState } from "react";

function Chat() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  function handleSend() {
    setMessages([...messages, inputText]);
    setInputText("");
  }

  return (
    <>
      <div>
        {messages.map(message => (
          <p key={message}>{message}</p>
        ))}
      </div>
      <input
        type='text'
        placeholder='Type something...'
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </>
  );
}

export default Chat;
