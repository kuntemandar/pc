import { h, Component } from "preact";
import { useState, useEffect } from 'preact/hooks'
import io from "socket.io-client";
import InfoBar from '../../components/InfoBar'
import Messages from '../../components/Messages'
import Input from '../../components/Input'
import TextContainer from '../../components/TextContainer'

let socket;

export default ({ matches, url }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://classroom-messenger.herokuapp.com/';
  
    useEffect(() => {
      const { name, room } = matches
  
      socket = io(ENDPOINT);
  
      setRoom(room);
      setName(name)
  
      socket.emit('join', { name, room }, (error) => {
        if(error) {
         // alert(error);
        }
      });
    }, [ENDPOINT, url]);
    
    useEffect(() => {
      socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
      });
      
      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
  }, []);
  
    const sendMessage = (event) => {
      event.preventDefault();
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
      }
    }

    return (
        <div data-e2e='chat-container'>
          <div className='conatiner flex flex-column justify-between h3'>
          <InfoBar room={room} />
          <div className='min-h-80 overflow-y-auto'><Messages messages={messages} name={name} /></div>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          {/* <TextContainer users={users}/> */}
          </div>
        </div>
      );
}