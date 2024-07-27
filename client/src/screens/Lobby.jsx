import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    < div className="">
    <Navbar />
    <div className="h-screen w-screen">
     
      <div className="h-full w-full flex justify-center items-center gap-5">
     <h1>Lobby</h1>
   
      <form onSubmit={handleSubmitForm}>
        <div>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          value={email}
          className="border-black border-2 rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <br />
        <label htmlFor="room">Room Number</label>
        <input
          className="border-black border-2 rounded-md"

          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button>Join</button>
      </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LobbyScreen;
