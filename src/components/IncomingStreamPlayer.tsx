import React from "react";

import { Audio, Video } from "@huddle01/react/components";

import { MdTagFaces } from "react-icons/md";

type IncomingStreamPlayerProps = {
  peerId: string;
  videoTrack: MediaStreamTrack;
  audioTrack: MediaStreamTrack;
};

const IncomingStreamPlayer: React.FunctionComponent<
  IncomingStreamPlayerProps
> = ({ peerId, audioTrack, videoTrack }) => {
  return (
    <div className="w-[25vw] min-h-[30vh] flex items-center justify-center border-2 border-primary rounded-xl m-4">
      {videoTrack ? (
        <Video
          className="w-full h-full rounded-xl"
          peerId={peerId}
          track={videoTrack}
        />
      ) : (
        <MdTagFaces className="w-14 h-14 text-primary" />
      )}

      <Audio peerId={peerId} track={audioTrack} />
    </div>
  );
};

export default IncomingStreamPlayer;
