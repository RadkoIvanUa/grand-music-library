import AudioPlayer from "../../components/AudioPlayer/AudioPlayerItem";

import music from "../../music/Adventure.mp3";

import { StyledContainer } from "../../components/Container/StyledContainer";
import { useState } from "react";
export default function Library() {
  const initialAudioData = [
    {
      title: "Elephant",
      src: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
      isPaused: true,
    },
    { title: "Epic Adventure", src: music, isPaused: true },
    {
      title: "Elephant",
      src: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
      isPaused: true,
    },
  ];

  const [audioData, setAudioData] = useState(initialAudioData);

  const handleTogglePlay = (clickedData) => {
    const updatedAudioData = audioData.map((data) => {
      if (data === clickedData) {
        return { ...data, isPaused: !data.isPaused };
      }
      return { ...data, isPaused: true };
    });
    setAudioData(updatedAudioData);
  };

  return (
    <StyledContainer>
      {audioData.map((data, index) => (
        <AudioPlayer key={index} data={data} onTogglePlay={handleTogglePlay} />
      ))}
    </StyledContainer>
  );
}
