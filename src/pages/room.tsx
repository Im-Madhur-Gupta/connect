import { useEffect } from "react";

import { useAudio, useRoom, useVideo } from "@huddle01/react/hooks";

import MediaControls from "@/components/MediaControls";
import LocalStreamPlayer from "@/components/LocalStreamPlayer";

const Room = () => {
  const {
    stream: audioStream,
    produceAudio,
    stopProducingAudio,
    isProducing: isProducingAudio,
    isLoading: isLoadingAudio,
  } = useAudio();
  const {
    stream: videoStream,
    produceVideo,
    stopProducingVideo,
    isProducing: isProducingVideo,
    isLoading: isLoadingVideo,
  } = useVideo();
  const { isRoomJoined } = useRoom();

  console.log("isRoomJoined", isRoomJoined);

  console.log("produceAudio.isCallable", produceAudio.isCallable);
  console.log("produceVideo.isCallable", produceVideo.isCallable);
  console.log("isLoadingAudio", isLoadingAudio);
  console.log("isLoadingVideo", isLoadingVideo);
  console.log("isProducingAudio", isProducingAudio);
  console.log("isProducingVideo", isProducingVideo);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // producing audio and video if they were enabled in the lobby
      if (produceVideo.isCallable) {
        produceVideo(videoStream);
      }
      if (produceAudio.isCallable) {
        produceAudio(audioStream);
      }
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {/* incoming streams */}
      <div className="flex"></div>

      {/* local stream */}
      <LocalStreamPlayer />

      {/* <MediaControls /> */}
    </div>
  );
};

export default Room;
