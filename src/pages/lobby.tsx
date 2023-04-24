import React from "react";
import { useRouter } from "next/router";

import { useRoom, useVideo } from "@huddle01/react/hooks";
import { useEventListener } from "@huddle01/react";

import MediaControls from "@/components/MediaControls";
import Button from "@/components/ui/Button";
import { toast } from "react-hot-toast";

const Lobby = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const router = useRouter();
  const { stream: videoStream } = useVideo();
  const { joinRoom } = useRoom();

  useEventListener("lobby:cam-on", () => {
    if (videoStream && videoRef.current) {
      videoRef.current.srcObject = videoStream;
      videoRef.current.play();
    }
  });

  useEventListener("room:joined", () => {
    toast.success("Joined room successfully");
    router.push("/room");
  });

  return (
    <div className="flex flex-col items-center justify-start mt-12">
      <div className="w-[40vw] border-2 border-primary rounded-xl">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-full h-full rounded-xl"
        />
      </div>
      <MediaControls />
      <Button isDisabled={!joinRoom.isCallable} onClick={joinRoom}>
        Join Room
      </Button>
    </div>
  );
};

export default Lobby;
