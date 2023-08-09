/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useTheme } from "@mui/material/styles";
import ReactPlayer from "react-player";

// eslint-disable-next-line react/prop-types
export default function AudioPlayer({ url }) {
  const [currentUrl, setCurrentUrl] = useState(null);
  const playerRef = useRef(null);

  const playAudio = (newUrl) => {
    if (currentUrl === newUrl) {
      return; // Не змінювати, якщо вже грає ця аудіозапис
    }

    if (playerRef.current) {
      playerRef.current.seekTo(0); // Перемотувати поточний плеєр на початок
      playerRef.current.pause(); // Призупинити відтворення поточного плеєра
    }

    setCurrentUrl(newUrl); // Оновити URL активного плеєра
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={url === currentUrl}
        controls
      />
      <button onClick={() => playAudio(url)}>Відтворити</button>
    </div>
  );
}
