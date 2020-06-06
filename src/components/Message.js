import { h } from "preact";
import { useState } from "preact/hooks";

const Message = ({ message: { text, user } = {}, name }) => {
  const [question, setQuestion] = useState({});
  const [added, setAdded] = useState(false);
  let isSentByCurrentUser = false;
  let isQuestion = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (text === "??question") {
    isQuestion = true;
  }

  const addQuestion = () => {
    setAdded(true);
    console.log(question, "asdfdfsdf");
  };
  return isSentByCurrentUser ? (
    isQuestion ? (
      <div className="pa3 tc">
        <input
          data-e2e="question-input"
          value={question.query}
          disabled={added}
          id="question"
          onChange={({ target: { value } }) => {
            setQuestion((prevState) => ({ ...prevState, query: `${value}?` }));
          }}
          placeholder="Your Question here..."
          className="bg-washed-yellow w-90 pl2 ma1 ba br3 h2p5"
        />
        <input
          data-e2e="option1-input"
          id="option1"
          disabled={added}
          value={question.option1}
          onChange={({ target: { value, id } }) =>
            setQuestion((prevState) => ({ ...prevState, [id]: `A: ${value}` }))
          }
          placeholder="Option 1"
          className="bg-washed-yellow w-90 pl3 ma1 ba br3 h2p5"
        />
        <input
          data-e2e="option2-input"
          disabled={added}
          id="option2"
          value={question.option2}
          onChange={({ target: { value, id} }) =>
            setQuestion((prevState) => ({ ...prevState, [id]: `B: ${value}` }))
          }
          id="option2"
          placeholder="Option 2"
          className="bg-washed-yellow w-90 pl3 ma1 ba br3 h2p5"
        />
        <input
          data-e2e="option3-input"
          disabled={added}
          value={question.option3}
          id="option3"
          onChange={({ target: { value, id } }) =>
            setQuestion((prevState) => ({ ...prevState, [id]: `C: ${value}` }))
          }
          id="option3"
          placeholder="Option 3"
          className="bg-washed-yellow w-90 pl3 ma1 ba br3 h2p5"
        />
        <input
          disabled={added}
          id="option4"
          value={question.option4}
          data-e2e="option4-input"
          onChange={({ target: { value, id } }) =>
            setQuestion((prevState) => ({ ...prevState, [id]: `D: ${value}` }))
          }
          id="option4"
          placeholder="Option 4"
          className="bg-washed-yellow w-90 pl3 ma1 ba br3 h2p5"
        />
        <button
          style={{ display: added ? "none" : "block" }}
          className="bn lh0 bg-purple white pa3 mv3 mh2 br4"
          onClick={(event) => {
            event.preventDefault();
            addQuestion(event);
          }}
        >
          Ask
        </button>
      </div>
    ) : (
      <div data-e2e="self-message" className="flex ph1 mt1 justify-end">
        <div className="white br2 pl1 pt2 bg-purple">
          <p className="w-100 ma2 ls-none fl wwrap-brk  white-90">{text}</p>
        </div>
      </div>
    )
  ) : (
    <div data-e2e="other-message" className="flex ph1 mt1 justify-start">
      <div className="white br2 pl1 pt2 bg-white-90">
        <p className="w-100 ma2 ls-none fl wwrap-brk near-black">{text}</p>
      </div>
      <p className="flex ma2 align-center helvetica grey tracked pl1 ">
        {user}
      </p>
    </div>
  );
};

export default Message;
