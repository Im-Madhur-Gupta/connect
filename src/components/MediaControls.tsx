import React from "react";

import { MdMic, MdMicOff, MdVideocamOff, MdVideocam } from "react-icons/md";

import IconButton from "./ui/IconButton";
import { MeetingContext } from "@/contexts/MeetingContext";

type MediaControlsProps = {
  startVideoStream: () => void;
  isStartVideoStreamCallable: boolean;
  stopVideoStream: {
    (): void;
    isCallable: boolean;
  };
  startAudioStream: () => void;
  isStartAudioStreamCallable: boolean;
  stopAudioStream: {
    (): void;
    isCallable: boolean;
  };
};

const MediaControls: React.FunctionComponent<MediaControlsProps> = ({
  startVideoStream,
  isStartVideoStreamCallable,
  stopVideoStream,
  startAudioStream,
  isStartAudioStreamCallable,
  stopAudioStream,
}) => {
  /*
    - isVideoOn and isAudioOn aren't manipulated here
    - Rather the manipulation is handled by the parent component rendering this component
    - This is because the manipulation logic depends on the parent component itself
  */
  const { isVideoOn, isAudioOn } = React.useContext(MeetingContext);

  console.log("isVideoOn", isVideoOn);
  console.log("isAudioOn", isAudioOn);

  return (
    <div className="flex">
      <IconButton
        isDisabled={
          isAudioOn ? !stopAudioStream.isCallable : !isStartAudioStreamCallable
        }
        onClick={() => {
          if (isAudioOn) {
            stopAudioStream();
          }
          if (!isAudioOn) {
            startAudioStream();
          }
        }}
      >
        {isAudioOn ? (
          <MdMic className="w-full h-full text-primary bg-secondary p-3 rounded-full" />
        ) : (
          <MdMicOff className="w-full h-full bg-red-600 text-secondary p-3 rounded-full" />
        )}
      </IconButton>

      <IconButton
        isDisabled={
          isVideoOn ? !stopVideoStream.isCallable : !isStartVideoStreamCallable
        }
        onClick={() => {
          if (isVideoOn) {
            stopVideoStream();
          }
          if (!isVideoOn) {
            startVideoStream();
          }
        }}
      >
        {isVideoOn ? (
          <MdVideocam className="w-full h-full text-primary bg-secondary p-2.5 rounded-full" />
        ) : (
          <MdVideocamOff className="w-full h-full text-secondary bg-red-600 p-3 rounded-full" />
        )}
      </IconButton>
    </div>
  );
};

export default MediaControls;
