import { h } from "preact";
import { useState } from "preact/hooks";

const Message = ({ message: { text, user, type } = {}, name, sendQuestion, sendAnswer }) => {
  const [question, setQuestion] = useState({});
  const [isAnswered, setAnswered] = useState(false)
  const [added, setAdded] = useState(false);
  let isSentByCurrentUser = false;
  let isQuestion = false;
  const isMessageQuestion = type === "question" 
  const isMessageAnswer = type === 'answer'
  const trimmedName = name.trim().toLowerCase();
  let html;
  console.log(user, text, "user name in message");
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (text === "?ask") {
    isQuestion = true;
  }
  console.log("text", text);

  const addQuestion = () => {
    setAdded(true);
    sendQuestion(question)
  };

  const addAnswer = (answer) => {
    setAnswered(true)
    sendAnswer(answer, text.socketId);
  }
  if (isSentByCurrentUser) {
    if (isQuestion) {
      html = (
        <div className="pa3 tc">
          <input
            data-e2e="question-input"
            value={question.query}
            disabled={added}
            id="question"
            onChange={({ target: { value } }) => {
              setQuestion((prevState) => ({
                ...prevState,
                query: `${value} ?`,
              }));
            }}
            placeholder="Your Question here..."
            className="bg-washed-yellow w-90 pl2 ma1 bn br3 h2p5"
          />
          {(!added || question.option1) && <input
            data-e2e="option1-input"
            id="option1"
            disabled={added}
            value={question.option1}
            onChange={({ target: { value, id } }) =>
              setQuestion((prevState) => ({
                ...prevState,
                [id]: `${value}`,
              }))
            }
            placeholder="Option 1"
            className=" w-90 pl3 ma1 bn br3 h2p5"
          />}
          {(!added || question.option2) && <input
            data-e2e="option2-input"
            disabled={added}
            id="option2"
            value={question.option2}
            onChange={({ target: { value, id } }) =>
              setQuestion((prevState) => ({
                ...prevState,
                [id]: `${value}`,
              }))
            }
            id="option2"
            placeholder="Option 2"
            className=" w-90 pl3 ma1 bn br3 h2p5"
          />}
          {(!added || question.option3) && <input
            data-e2e="option3-input"
            disabled={added}
            value={question.option3}
            id="option3"
            onChange={({ target: { value, id } }) =>
              setQuestion((prevState) => ({
                ...prevState,
                [id]: `${value}`,
              }))
            }
            id="option3"
            placeholder="Option 3"
            className=" w-90 pl3 ma1 bn br3 h2p5"
          />}
          {(!added || question.option4) && <input
            disabled={added}
            id="option4"
            value={question.option4}
            data-e2e="option4-input"
            onChange={({ target: { value, id } }) =>
              setQuestion((prevState) => ({
                ...prevState,
                [id]: `${value}`,
              }))
            }
            id="option4"
            placeholder="Option 4"
            className=" w-90 pl3 ma1 bn br3 h2p5"
          />}
          <button
            style={{ display: added ? "none" : "inline-block" }}
            className="bn lh0 bg-purple white pa3 mv3 mh2 br4"
            onClick={(event) => {
              event.preventDefault();
              question && question.query && 
              addQuestion(event);
            }}
          >
            Ask
          </button>
        </div>
      );
    } else if (!isMessageQuestion && !isMessageAnswer) {
      html = (
        <div data-e2e="self-message" className="flex ph1 mt1 justify-end">
          <div className="white br2 pl1 bg-purple">
            <p className="w-100 ma2 ls-none fl wwrap-brk  white-90">{text}</p>
          </div>
        </div>
      );
    }
  } else {
    if (isMessageQuestion) {
      html =  <div className="pa3 tc">
        <label
        disabled
            data-e2e="question-label"
            className="flex items-center dib bg-washed-yellow pl2 ma1 bn br3 h2p5"
          >{text.query}</label>
          { text.option1 && <button
            disabled={isAnswered}
            className="dib w-40 bn lh0 bg-purple white pa3 mv3 mh2 br4"
            onClick={(event) => {
              event.preventDefault();
              addAnswer(text.option1)
            }}
          >
            {text.option1}
          </button>}
          {text.option2 && <button
          disabled={isAnswered}
            className="dib w-40 bn lh0 bg-purple white pa3 mv3 mh2 br4"
            onClick={(event) => {
              event.preventDefault();
              addAnswer(text.option2)
            }}
          >
            {text.option2}
          </button>}
          {text.option3 && <button
          disabled={isAnswered}
            className="dib w-40 bn lh0 bg-purple white pa3 mv3 mh2 br4"
            onClick={(event) => {
              event.preventDefault();
              addAnswer(text.option3)
            }}
          >
            {text.option3}
          </button>}
          {text.option4 && <button
          disabled={isAnswered}
            className="dib w-40 bn lh0 bg-purple white pa3 mv3 mh2 br4"
            onClick={(event) => {
              event.preventDefault();
              addAnswer(text.option4)
            }}
          >
            {text.option4}
          </button>}
      </div>;
    } else if(!isQuestion) {
     html = <div data-e2e="other-message" className="flex ph1 mt1 justify-start">
        <div className="white br2 pl1 bg-white-90">
          <p className="w-100 ma2 ls-none fl wwrap-brk near-black">{text}</p>
        </div>
        <p className="flex ma2 align-center helvetica grey tracked pl1 ">
          {user}
        </p>
      </div>;
    }
  }
  return html;
};

export default Message;
