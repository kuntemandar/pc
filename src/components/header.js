import { h } from "preact";
import { Link } from "preact-router/match";

const Header = () => (
  <header className="h4 justify-center bg-purple w-100 flex">
    <span class="orange pr3 material-icons">school</span>
    <span className="lh-title white bold f3 pr3">Classrooms</span>
  </header>
);

export default Header;
