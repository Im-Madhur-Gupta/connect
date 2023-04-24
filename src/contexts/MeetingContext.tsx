import React, { createContext, useState } from "react";

type MeetingContextType = {
  isVideoOn: boolean;
  setIsVideoOn: React.Dispatch<React.SetStateAction<boolean>>;
  isAudioOn: boolean;
  setIsAudioOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const MeetingContext = createContext({} as MeetingContextType);

type MeetingContextProviderType = {
  children: React.ReactNode;
};

const MeetingContextProvider: React.FC<MeetingContextProviderType> = ({
  children,
}) => {
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);

  return (
    <MeetingContext.Provider
      value={{ isVideoOn, setIsVideoOn, isAudioOn, setIsAudioOn }}
    >
      {children}
    </MeetingContext.Provider>
  );
};

export { MeetingContext, MeetingContextProvider };
