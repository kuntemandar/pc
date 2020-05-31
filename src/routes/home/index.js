import { h, Component } from "preact";
import cn from "classnames";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";

const Home = () => (
  <div className="pa4 dg w-90 center min-h-100 pv6 tc">
    <TextField outlined label="name" />
    <TextField outlined label="room" />
    <Button raised>Login</Button>
  </div>
);

export default Home;
