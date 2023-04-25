import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useRoom } from "@huddle01/react/hooks";
import { toast } from "react-hot-toast";

import LocalStreamPlayer from "@/components/LocalStreamPlayer";
import MediaControls from "@/components/MediaControls";
import Button from "@/components/ui/Button";

const Lobby = () => {
  const router = useRouter();
  const { joinRoom, isRoomJoined } = useRoom();

  useEffect(() => {
    if (isRoomJoined) {
      toast.success("Joined room successfully");
      router.push("/room");
    }
  }, [isRoomJoined]);

  return (
    <div className="flex flex-col items-center justify-start mt-12">
      <LocalStreamPlayer />
      <MediaControls />
      <Button isDisabled={!joinRoom.isCallable} onClick={joinRoom}>
        Join Room
      </Button>
    </div>
  );
};

export default Lobby;
