import { h } from 'preact';
import onlineIcon from '../icons/onlineIcon.png';

const TextContainer = ({ users }) => (
  <div className="flex flex-column ml2 white h3 justify-between">
    {
      users
        ? (
          <div>
            <h1>Online</h1>
            <div className="flex center mb5">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="flex center">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;