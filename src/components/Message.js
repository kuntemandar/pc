import { h } from 'preact';

const Message = ({ message: { text, user } = {}, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="flex ph1 mt1 justify-end">
          <p className="flex align-center helvetica grey tracked pr1">{trimmedName}</p>
          <div className="white br2 pl1 pt2 bg-purple">
            <p className="w-100 ls-none fl wwrap-brk  white-90">{text}</p>
          </div>
        </div>
        )
        : (
          <div className="flex ph1 mt1 justify-start">
            <div className="white br2 pl1 pt2 bg-white-90">
              <p className="w-100 ls-none fl wwrap-brk near-black">{text}</p>
            </div>
            <p className="flex align-center helvetica grey tracked pl1 ">{user}</p>
          </div>
        )
  );
}

export default Message;