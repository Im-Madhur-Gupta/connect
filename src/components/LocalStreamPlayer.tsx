import React, { useEffect } from "react";
import { useEventListener } from "@huddle01/react";
import { useVideo } from "@huddle01/react/hooks";

type LocalStreamPlayerProps = {
  additionalClassNames?: string;
};

const LocalStreamPlayer: React.FunctionComponent<LocalStreamPlayerProps> = ({
  additionalClassNames = "",
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const { stream: videoStream } = useVideo();

  useEffect(() => {
    if (videoStream && videoRef.current) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream]);

  return (
    <div
      className={`w-[36vw] border-2 border-primary rounded-xl ${additionalClassNames}`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        className="w-full h-full rounded-xl"
      />
    </div>
  );
};

export default LocalStreamPlayer;
