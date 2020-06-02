import { h } from "preact";
import Message from "./Message";

const Messages = ({ messages, name }) =>
  messages.map((message, i) => (
    <div className="flex-auto overflow-auto pv1">
      <div className='w-100' key={i}>
        <Message message={message} name={name} />
      </div>
    </div>
  ));

export default Messages;
