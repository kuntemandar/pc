import { h } from "preact";
import { Link } from "preact-router/match";

import SchoolIcon from '../assets/icons/school.png'

const Header = () => (
  <header data-e2e='header' style={{borderBottom : 'darkblue 4px solid'}} className="h4 justify-center bg-purple w-100 flex">
    <img className='pr3 pt1 h3 l2' src={SchoolIcon}></img>
    <span className="lh-title white bold f3 pr3">Classrooms</span>
  </header>
);

export default Header;
