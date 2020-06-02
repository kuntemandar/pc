import { h } from "preact";

import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="flex">
    <input
      className="pa1 w-100 f4 nofocus"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <Button
      style={{ height: "45px" }}
      onClick={e => sendMessage(e)}
      ripple
      raised
    >
      Send
    </Button>
  </form>
);

export default Input;
