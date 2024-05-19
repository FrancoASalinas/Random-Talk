import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Chat from "./Chat";
import { io } from "socket.io-client";

function ChatPage() {
  const [isConnected, setIsConnected] = useState(false);
  console.log(isConnected);
  
  const socket = io('http://localhost:3000')

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true));
  }, [])

  return (
    isConnected ? <Chat /> : <span data-test-id='spinner'>Loading...</span>
  );
}

export default ChatPage;
