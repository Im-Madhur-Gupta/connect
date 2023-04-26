import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useAudio, useRoom, useVideo } from "@huddle01/react/hooks";
import { toast } from "react-hot-toast";

import LocalStreamPlayer from "@/components/LocalStreamPlayer";
import MediaControls from "@/components/MediaControls";
import Button from "@/components/ui/Button";
import { useEventListener } from "@huddle01/react";
import { MeetingContext } from "@/contexts/MeetingContext";

const Lobby = () => {
  const router = useRouter();

  const { setIsVideoOn, setIsAudioOn } = React.useContext(MeetingContext);
  const { fetchAudioStream, stopAudioStream } = useAudio();
  const { fetchVideoStream, stopVideoStream } = useVideo();
  const { joinRoom, isRoomJoined } = useRoom();

  useEffect(() => {
    if (isRoomJoined) {
      toast.success("Joined room successfully");
      router.push("/room");
    }
  }, [isRoomJoined]);

  // handling camera and mic events for lobby to update the meeting state
  useEventListener("lobby:cam-on", () => {
    setIsVideoOn(true);
  });

  useEventListener("lobby:cam-off", () => {
    setIsVideoOn(false);
  });

  useEventListener("lobby:mic-on", () => {
    setIsAudioOn(true);
  });

  useEventListener("lobby:mic-off", () => {
    setIsAudioOn(false);
  });

  return (
    <div className="flex flex-col items-center justify-start mt-12">
      <LocalStreamPlayer additionalClassNames="w-[36vw] min-h-[40vh]" />
      <MediaControls
        startVideoStream={fetchVideoStream}
        isStartVideoStreamCallable={fetchVideoStream.isCallable}
        stopVideoStream={stopVideoStream}
        startAudioStream={fetchAudioStream}
        isStartAudioStreamCallable={fetchAudioStream.isCallable}
        stopAudioStream={stopAudioStream}
      />
      <Button isDisabled={!joinRoom.isCallable} onClick={joinRoom}>
        Join Room
      </Button>
    </div>
  );
};

export default Lobby;
