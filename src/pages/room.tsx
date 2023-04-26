import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useAudio, usePeers, useRoom, useVideo } from "@huddle01/react/hooks";

import { MeetingContext } from "@/contexts/MeetingContext";
import MediaControls from "@/components/MediaControls";
import LocalStreamPlayer from "@/components/LocalStreamPlayer";
import IncomingStreamPlayer from "@/components/IncomingStreamPlayer";
import IconButton from "@/components/ui/IconButton";

import { MdCallEnd } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import VideoEffectsModal from "@/components/VideoEffectsModal";

const Room = () => {
  const router = useRouter();

  const { setIsVideoOn, setIsAudioOn } = React.useContext(MeetingContext);
  const {
    stream: audioStream,
    produceAudio,
    stopProducingAudio,
    isProducing: isProducingAudio,
  } = useAudio();
  const {
    stream: videoStream,
    produceVideo,
    stopProducingVideo,
    isProducing: isProducingVideo,
  } = useVideo();
  const { leaveRoom } = useRoom();
  const { peerIds, peers } = usePeers();

  const [showModal, setShowModal] = React.useState(false);

  console.log("peerIds", peerIds);
  console.log("peers", peers);

  const leaveRoomHandler = () => {
    leaveRoom();
    router.push("/get-started");
  };

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

  // handling isProducingVideo for room to update the meeting state
  useEffect(() => {
    console.log("isProducingVideo", isProducingVideo);
    if (isProducingVideo) {
      setIsVideoOn(true);
    }
    if (!isProducingVideo) {
      setIsVideoOn(false);
    }
  }, [isProducingVideo]);

  // handling isProducingAudio for room to update the meeting state
  useEffect(() => {
    console.log("isProducingAudio", isProducingAudio);
    if (isProducingAudio) {
      setIsAudioOn(true);
    }
    if (!isProducingAudio) {
      setIsAudioOn(false);
    }
  }, [isProducingAudio]);

  if (showModal) {
    return <VideoEffectsModal setShowModal={setShowModal} />;
  }

  return (
    <div className="h-page-container relative flex flex-col items-center justify-between">
      {/* incoming streams */}
      <div className="flex flex-wrap">
        {peerIds.map((peerId) => {
          const { cam: videoTrack, mic: audioTrack } = peers[peerId];
          return (
            <IncomingStreamPlayer
              peerId={peerId}
              videoTrack={videoTrack}
              audioTrack={audioTrack}
            />
          );
        })}
      </div>

      <div className="flex">
        {/* call controls */}
        <MediaControls
          startAudioStream={() => produceAudio(audioStream)}
          isStartAudioStreamCallable={produceAudio.isCallable}
          stopAudioStream={stopProducingAudio}
          startVideoStream={() => produceVideo(videoStream)}
          isStartVideoStreamCallable={produceVideo.isCallable}
          stopVideoStream={stopProducingVideo}
        />

        {/* end call button */}
        <IconButton
          isDisabled={!leaveRoom.isCallable}
          onClick={leaveRoomHandler}
        >
          <MdCallEnd className="w-full h-full text-secondary bg-red-600 p-3 rounded-full" />
        </IconButton>

        {/* video effects button */}
        <IconButton onClick={() => setShowModal(true)}>
          <CiMenuKebab className="w-full h-full text-secondary" />
        </IconButton>
      </div>

      {/* local stream */}
      <LocalStreamPlayer additionalClassNames="w-[15vw] min-h-[18vh] absolute bottom-10 right-20" />
    </div>
  );
};

export default Room;
