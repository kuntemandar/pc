import { h, Component, Fragment } from "preact";
import { useState } from "preact/hooks";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";
import { route } from "preact-router";
import Header from "../../components/header";
const Home = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Fragment>
      <Header />

      <div
        style={{ borderTop: "4px solid purple" }}
        className="w-80 pa4 mt5 dg center gg4 tc"
      >
        <label className='f4'>Sign in to your classroom</label>
        <input
          id="name"
          placeholder='name'
          className="pl2 br3 bg-transparent h2p5"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          id="room"
          placeholder='room'
          className="pl2 br3 bg-transparent h2p5"
          onChange={(event) => setRoom(event.target.value)}
        />
        <button
          className="br3 bg-purple white h3"
          onClick={(e) => {
            if (!name || !room) {
              e.preventDefault();
            } else {
              console.log("sdf");
              route(`/chat?name=${name}&room=${room}`);
            }
          }}
        >
          Login
        </button>
      </div>
    </Fragment>
  );
};

export default Home;
