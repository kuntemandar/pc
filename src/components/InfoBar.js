import { h } from "preact";

import onlineIcon from '../assets/icons/onlineIcon.png';
import closeIcon from '../assets/icons/closeIcon.png';

const InfoBar = ({ room }) => (
  <div style={{
      borderRadius: '4px 4px 0 0'
  }} className="flex items-center justify-between bg-purple w-100 h3">
    <div className="flex items-center ml2 white">
      <img className="mr2 onlineIcon" src={onlineIcon} alt="online icon" />
      <h1>{room}</h1>
    </div>
    <div className="mr2 flex justify-end">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
