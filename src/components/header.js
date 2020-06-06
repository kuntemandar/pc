import { h } from "preact";
import { Link } from "preact-router/match";

const Header = () => (
  <header data-e2e='header' style={{borderBottom : 'darkblue 4px solid'}} className="h4 justify-center bg-purple w-100 flex">
    <span className="lh-title white bold f3 pr3">Classrooms</span>
  </header>
);

export default Header;
