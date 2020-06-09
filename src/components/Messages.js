import { h } from "preact";
import Message from "./Message";
import { useEffect, useRef } from "preact/hooks";

const Messages = ({ messages, name, sendMessage}) => {
  const messageListRef = useRef(false);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    } else messageListRef.current = true;
  }, [messages]);
  return messages.map((message, i) => (
    <div
      data-e2e="messages-container"
      ref={messageListRef}
      className="flex-auto overflow-x-hidden pv2"
    >
      <div className="w-100" key={i}>
        <Message message={message} name={name} sendMessage={sendMessage}/>
      </div>
    </div>
  ));
};

export default Messages;
