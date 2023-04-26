import React, { useEffect } from "react";

import { useVideo } from "@huddle01/react/hooks";

import { MeetingContext } from "@/contexts/MeetingContext";

import { MdTagFaces } from "react-icons/md";

type LocalStreamPlayerProps = {
  additionalClassNames?: string;
};

const LocalStreamPlayer: React.FunctionComponent<LocalStreamPlayerProps> = ({
  additionalClassNames = "",
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const { isVideoOn } = React.useContext(MeetingContext);
  const { stream: videoStream } = useVideo();

  useEffect(() => {
    if (isVideoOn && videoStream && videoRef.current) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream, isVideoOn]);

  console.log("isVideoOn local", isVideoOn);

  return (
    <div
      className={`w-[36vw] min-h-[40vh] flex items-center justify-center border-2 border-primary rounded-xl ${additionalClassNames}`}
    >
      {isVideoOn ? (
        <video ref={videoRef} autoPlay muted className="w-full rounded-xl" />
      ) : (
        <MdTagFaces className="w-14 h-14 text-primary" />
      )}
    </div>
  );
};

export default LocalStreamPlayer;
