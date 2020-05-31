import { h, Component } from "preact";
import { useState } from 'preact/hooks'
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";
import { route } from 'preact-router';

const Home = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
  <div className="pa4 dg w-90 center min-h-100 pv6 tc">
    <div></div>
    <TextField outlined label="name" onChange={(event) => setName(event.target.value)}/>
    <TextField outlined label="room" onChange={(event) => setRoom(event.target.value)}/>
    <Button onClick={e => {
      if(!name || !room) {
        e.preventDefault()
      } else {
        console.log('sdf')
        route(`/chat?name=${name}room=${room}`)
      }
    }} raised>Login</Button>
  </div>)
}

export default Home;
