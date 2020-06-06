import { h } from "preact";

const Input = ({ setMessage, sendMessage, message }) => (
  <form data-e2e="message-form" type="submit" className="min-h-10 flex">
    <div className='flex w-100'>
      <input
        
        data-e2e="message-input"
        className="pl2 ba w-100 bg-transparent mv3 mh2 br4"
        type="text"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={({ target: { value }, key }) => {
          debugger
          key === "Enter" ? sendMessage(value) : null
        }
        }
      />
      <button
        data-e2e="message-send"
        className="bn lh0 bg-purple white pa3 mv3 mh2 br4"
        onClick={(e) => sendMessage(e)}
        ripple
        raised
      >
        Send
      </button>
    </div>
  </form>
);

export default Input;
