import React, { useState } from "react";
import { useChat } from "../../hooks";
import styles from "./chat.module.css";
import { useParams } from "react-router-dom";

const ChatRoom = (props) => {
  const params = useParams()
  const { roomId } = params

  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = event => {
    const { target: { value } } = event
    setNewMessage(value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className={styles.main}>
      <div className={styles.chatRoomContainer}>
        <h1 className={styles.roomName}>Room: {roomId}</h1>
        <div className={styles.messagesContainer}>
          <ul className={styles.messagesList}>
            {messages.map((message, index) => (
              <li
                key={index}
                className={`${styles.messageItem} ${message.ownedByCurrentUser ? styles.myMessage : styles.receivedMessage
                  }`}
              >
                {message.body}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles._inputParent}>
          <input
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Write message..."
            className={styles.newMessageInputField}
          />
          <button onClick={handleSendMessage} className={styles.sendMessageButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;