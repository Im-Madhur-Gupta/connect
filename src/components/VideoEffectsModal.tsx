import {
  Pipeline,
  VirtualBackgroundProcessor,
  GaussianBlurBackgroundProcessor,
} from "@twilio/video-processors";

import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { useVideo } from "@huddle01/react/hooks";

type VideoEffectsModalProps = {
  setShowModal: (showModal: boolean) => void;
};

const selectedOptionStyles = "text-primary border-primary";

const VideoEffectsModal: React.FunctionComponent<VideoEffectsModalProps> = ({
  setShowModal,
}) => {
  const { stream: videoStream } = useVideo();

  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    (async () => {
      if (selectedOption === "blur") {
        const blurBackground = new GaussianBlurBackgroundProcessor({
          assetsPath: "",
          pipeline: Pipeline.WebGL2,
          debounce: true,
        });

        await blurBackground.loadModel();
        videoStream.getVideoTracks().forEach((track) => {
          blurBackground.processFrame(track);
        });
      }
      //   if (selectedOption === "custom-bg") {

      //   }
    })();
  }, [selectedOption]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none p-6">
            <div className="flex">
              <div
                className={`text-secondary border-2 border-secondary text-lg py-2 px-4 rounded-md ${
                  selectedOption === "blur" ? selectedOptionStyles : ""
                }`}
                onClick={() => setSelectedOption("blur")}
              >
                Blur
              </div>
              <div
                className={`text-secondary border-2 border-secondary text-lg py-2 px-4 rounded-md ${
                  selectedOption === "custom-bg" ? selectedOptionStyles : ""
                }`}
                onClick={() => setSelectedOption("custom-bg")}
              >
                Custom Background
              </div>
            </div>

            <div className="flex items-center justify-end rounded-b mt-8">
              <Button
                additionalClassNames="text-base mx-2"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
              <Button
                additionalClassNames="text-base mx-2"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default VideoEffectsModal;
