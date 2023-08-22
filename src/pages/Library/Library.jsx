import { useSelector } from "react-redux";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayerItem";
import CategoryList from "../../components/CategoryList/CategoryList";
import { getSelectedCategory } from "../../redux/selectors";

import { StyledContainer } from "../../components/Container/StyledContainer";
import { useEffect, useState } from "react";
export default function Library() {
  const [musicData, setMusicData] = useState([]);

  const category = useSelector(getSelectedCategory);

  useEffect(() => {
    fetch("musicData.json")
      .then((response) => response.json())
      .then((data) => {
        setMusicData(data);
      });
  }, []);

  const handleTogglePlay = (clickedData) => {
    const updatedAudioData = musicData.map((data) => {
      if (data === clickedData) {
        return { ...data, isPaused: !data.isPaused };
      }
      return { ...data, isPaused: true };
    });
    setMusicData(updatedAudioData);
  };

  const filteredMusic = musicData.filter((track) =>
    category !== "all" ? track.category === category : track
  );

  return (
    <>
      <CategoryList />
      <StyledContainer>
        {filteredMusic.map((data, index) => (
          <AudioPlayer
            key={index}
            data={data}
            onTogglePlay={handleTogglePlay}
          />
        ))}
      </StyledContainer>
    </>
  );
}
