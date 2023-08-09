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
export default function AudioPlayer({ audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const buttonRef = useRef(null);

  const theme = useTheme();
  theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    // if (isPlaying) {
    //   handlePause();
    // } else {
    //   handlePlay();
    // }
    const currentPlayingTrack = document.querySelector(".nowPlaying");

    if (currentPlayingTrack) {
      // currentPlayingTrack.classList.remove("nowPlaying");
      handlePlay();
    } else if (!buttonRef.current.classList.contains("nowPlaying")) {
      handlePause();
    }

    buttonRef.current.classList.add("nowPlaying");
  };

  const handleSeek = (e) => {
    setCurrentTime(e.target.value);
    audioRef.current.seekTo(e.target.value);
  };

  function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  return (
    <div>
      <div>
        <p>{formatDuration(currentTime)}</p>
        <p>{formatDuration(duration)}</p>
      </div>

      <Card sx={{ display: "flex" }}>
        <ReactPlayer
          url={audioSrc}
          playing={isPlaying}
          onProgress={(process) => {
            setCurrentTime(process.playedSeconds);
          }}
          onDuration={(duration) => {
            setDuration(duration);
          }}
          width={0}
          ref={audioRef}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton onClick={handlePlayPause} ref={buttonRef}>
              {!isPlaying ? (
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              ) : (
                <PauseIcon sx={{ height: 38, width: 38 }} />
              )}
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Slider
            aria-label="time-indicator"
            size="small"
            type="range"
            min={0}
            step={1}
            max={duration}
            onChange={handleSeek}
            value={currentTime}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === "dark"
                      ? "rgb(255 255 255 / 16%)"
                      : "rgb(0 0 0 / 16%)"
                  }`,
                },
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
            }}
          />
        </Box>
      </Card>
    </div>
  );
}
