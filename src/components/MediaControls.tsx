import React from "react";

import { MdMic, MdMicOff, MdVideocamOff, MdVideocam } from "react-icons/md";
import { useAudio, useVideo } from "@huddle01/react/hooks";
import { useEventListener } from "@huddle01/react";

import IconButton from "./ui/IconButton";

const MediaControls = () => {
  const { fetchAudioStream, stopAudioStream } = useAudio();

  const { fetchVideoStream, stopVideoStream } = useVideo();

  const [isAudioOn, setIsAudioOn] = React.useState(false);
  const [isVideoOn, setIsVideoOn] = React.useState(false);

  console.log("isVideoOn", isVideoOn);
  console.log("isAudioOn", isAudioOn);

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
    <div className="flex">
      <IconButton
        isDisabled={
          isAudioOn ? !stopAudioStream.isCallable : !fetchAudioStream.isCallable
        }
      >
        {isAudioOn ? (
          <MdMic
            className="w-full h-full text-primary bg-secondary p-3 rounded-full"
            onClick={() => {
              stopAudioStream();
            }}
          />
        ) : (
          <MdMicOff
            className="w-full h-full bg-red-600 text-secondary p-3 rounded-full"
            onClick={() => {
              fetchAudioStream();
            }}
          />
        )}
      </IconButton>

      <IconButton
        isDisabled={
          isVideoOn ? !stopVideoStream.isCallable : !fetchVideoStream.isCallable
        }
      >
        {isVideoOn ? (
          <MdVideocam
            className="w-full h-full text-primary bg-secondary p-2.5 rounded-full"
            onClick={() => {
              stopVideoStream();
            }}
          />
        ) : (
          <MdVideocamOff
            className="w-full h-full text-secondary bg-red-600 p-3 rounded-full"
            onClick={() => {
              fetchVideoStream();
            }}
          />
        )}
      </IconButton>
    </div>
  );
};

export default MediaControls;
