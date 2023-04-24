import React from "react";
import { useRouter } from "next/router";

import { useLobby } from "@huddle01/react/hooks";
import { toast } from "react-hot-toast";
import axios from "axios";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

const GetStartedPage = () => {
  const router = useRouter();
  const { joinLobby } = useLobby();
  const roomIdInputRef = React.useRef<HTMLInputElement>(null);

  const joinRoomHandler = () => {
    const roomId = roomIdInputRef.current?.value;

    if (!roomId) {
      return toast.error("Please enter a room Id");
    }

    joinLobby(roomId);

    router.push(`/lobby`);
  };

  const createRoomHandler = async () => {
    try {
      const { data } = await axios.get("/api/create-room");
      toast.success("Room created successfully");

      const roomId = data.roomId;
      console.log(roomId);

      joinLobby(roomId);

      router.push(`/lobby`);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="page-container w-1/2 mx-auto mt-10 flex flex-col justify-start items-center">
      <Heading additionalClassNames="text-6xl">Get Started</Heading>
      <div className="w-full h-fit flex items-center justify-evenly mt-16">
        <Button
          additionalClassNames="w-1/3 h-fit"
          isDisabled={!joinLobby.isCallable}
          onClick={createRoomHandler}
        >
          Create a new room
        </Button>
        <div className="w-1 h-96 bg-color-primary" />
        <div className="w-1/3 flex flex-col items-center">
          <input
            ref={roomIdInputRef}
            type="text"
            placeholder="Room ID"
            className="custom-input focus:outline-0 mb-8 w-72 p-3 text-lg rounded-xl"
          />
          <Button isDisabled={!joinLobby.isCallable} onClick={joinRoomHandler}>
            Join Lobby
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
