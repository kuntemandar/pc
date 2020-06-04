import { h } from "preact";

const Input = ({ setMessage, sendMessage, message }) => (
  <form data-e2e="message-form" type='submit' className="min-h-10 flex">
    <input
      style={{
        borderColor: 'transparent',
        borderTop: "darkblue 4px solid"
      }}
      data-e2e="message-input"
      className="pl2 ba w-100 bg-transparent"
      type="text"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button
      style={{
        borderColor: 'transparent',
        borderTop: "darkblue 4px solid"
      }}
      data-e2e="message-send"
      className="bg-purple white pa3"
      onClick={(e) => sendMessage(e)}
      ripple
      raised
    >
      Send
    </button>
  </form>
);

export default Input;
