import { h } from "preact";
import LinkedIn from "../assets/icons/linkedin.png";
import GitHub from "../assets/icons/github.png";
import Twitter from "../assets/icons/twitter.png";
import InfoIcon from '../assets/icons/info.png'
import { route } from "preact-router";

export default () => {
  const goToHelp = () => {
    route('/help')
  }
  return <footer
    style={{ borderTop : 'darkblue 4px solid',minHeight: "8vh" }}
    className="pa2 ph3 flex justify-end bg-purple"
  >
   <a href="/help">
      <img src={InfoIcon} style={{marginRight: 'auto', lineHeight: '5vh'}} class="h2 self-start orange f3 material-icons">help</img>
    </a>
    {/* <a href="https://twitter.com/mandarkunte">
      <img className="h2 mh2" src={Twitter} />
    </a>
    <a href="https://www.linkedin.com/in/mandar-kunte-b4838617/">
      <img className="h2 mh2" src={LinkedIn} />
    </a>
    <a href="https://github.com/kuntemandar">
      <img className="h2 mh2" src={GitHub} />
    </a> */}
  </footer>
}
