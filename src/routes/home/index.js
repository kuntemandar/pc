import { h, Component, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import { route } from "preact-router";
import Header from "../../components/header";
import Footer from '../../components/footer';
import { getCredentials } from '../../utils'
const Home = () => {
  const credentials = JSON.parse(getCredentials()) || {}
  const [name, setName] = useState(credentials.name || '')
  const [room, setRoom] = useState(credentials.room || '')

  // if user is logged out because of inactivity, we can recoonect 
  useEffect(() => room && name && route(`/chat?name=${name}&room=${room}`),[])
  
  return (
    <Fragment>
    <div data-e2e='app-container' style={{minHeight: '92vh'}}>
      <Header />
      <form type='submit'
        data-e2e='main-container'
        style={{ borderTop: "4px solid darkblue", borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px'}}
        className="w-80 pa4 mt5 dg center gg4 bg-white tc"
      >
        <label data-e2e='sign-in-label' className='f4'>Login in to your room</label>
        <input
          data-e2e='name-input'
          id="name"
          placeholder='name'
          className="pl2 ba br3 bg-transparent h2p5"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          data-e2e='room-input'
          id="room"
          placeholder='room'
          className="pl2 ba br3 bg-transparent h2p5"
          onChange={(event) => setRoom(event.target.value)}
        />
        <button
          data-e2e='login-button'
          className="br3 ba bg-purple white h3"
          onClick={(e) => {
            if (!name || !room) {
              e.preventDefault();
            } else {
              route(`/chat?name=${name}&room=${room}`);
            }
          }}
        >
          Login
        </button>
        <a dat-e2e='create-class-button' className='underline dark-blue' href='#'>Create a new Classroom</a>
      </form>
    </div>
    <Footer />
    </Fragment>
  );
};

export default Home;
