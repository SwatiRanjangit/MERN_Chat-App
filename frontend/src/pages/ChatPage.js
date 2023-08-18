import axios from "axios";
import { useEffect, useState } from "react";

function ChatPage() {
  const [chats, setChats] = useState([]);
  const fetchChat = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
    console.log(data);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}

export default ChatPage;
