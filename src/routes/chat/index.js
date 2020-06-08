import { h, Component } from "preact";
import { useState, useEffect } from "preact/hooks";
import io from "socket.io-client";
import InfoBar from "../../components/InfoBar";
import Messages from "../../components/Messages";
import Input from "../../components/Input";
import TextContainer from "../../components/TextContainer";
import { route } from "preact-router";
let socket;

export default ({ matches, url }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:5000"; 
  //const ENDPOINT = 'https://classroom-messenger.herokuapp.com/';

  const joinRoom = (name, room) => {
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
        socket.disconnect();
      }
      console.log("joined");
    });
  };
  useEffect(() => {
    const { name, room } = matches;

    socket = io.connect(ENDPOINT, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
    });

    socket.on("disconnect", function (e) {
      console.log("Got disconnect!", e);

      if (e === "io client disconnect") {
        console.log("user close event");
        route('/')
      } else if(socket.io.connecting.indexOf(socket) === -1){
        //you should renew token or do another important things before reconnecting
        socket.connect();
      }
    });

    setRoom(room);
    setName(name);

    joinRoom(name, room);
    socket.on("reconnect", () => joinRoom(name, room));
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message.trim().toLowerCase() === "/question") {
      setMessages((messages) => [...messages, message]);
      setMessage('')
    }
    else if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const disconnect = () => {
    console.log("calling disconnect");
    socket.disconnect();
  };

  return (
    <div data-e2e="chat-container">
      <div className="conatiner flex flex-column justify-between h3">
        <InfoBar room={room} disconnect={disconnect} />
        <div className="min-h-80 overflow-y-auto">
          <Messages messages={messages} name={name} sendMessage={sendMessage} />
        </div>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        {/* <TextContainer users={users}/> */}
      </div>
    </div>
  );
};
