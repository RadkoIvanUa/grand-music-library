/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Card, IconButton, Slider } from "@mui/material";
import { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useTheme } from "@mui/material/styles";
import ReactPlayer from "react-player";
import { BsCloudDownload } from "react-icons/bs";

// eslint-disable-next-line react/prop-types

export default function AudioPlayer({ data, onTogglePlay }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const theme = useTheme();
  theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

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
    <>
      <p style={{ color: "#fff" }}>{data.title}</p>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
          padding: "10px",
        }}
      >
        <ReactPlayer
          url={data.src}
          playing={!data.isPaused}
          ref={audioRef}
          height={0}
          width={0}
          onDuration={(duration) => {
            setDuration(duration);
          }}
          onProgress={(process) => {
            setCurrentTime(process.playedSeconds);
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => onTogglePlay(data)}>
            {data.isPaused ? (
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            ) : (
              <PauseIcon sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>
        </Box>
        <p style={{ fontSize: 20, paddingTop: 8 }}>
          {formatDuration(currentTime)}
        </p>
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
              padding: 0,
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
        <p style={{ fontSize: 20, paddingTop: 8 }}>
          {formatDuration(duration)}
        </p>
        <IconButton>
          <a
            href={data.src}
            style={{
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            download
          >
            <BsCloudDownload color="red" />
          </a>
        </IconButton>
      </Card>
    </>
  );
}
