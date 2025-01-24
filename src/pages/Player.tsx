import { IconButton, Typography, Box } from "@mui/material";
import { useMusicPlayer } from "../hooks/useMusicPlayer";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from "@mui/icons-material/SkipNext";


const Player = () => {
  const music = useMusicPlayer();

  return (
    <div>
      <h1>Player Page</h1>
      <p>Music player controls will go here</p>
      <Typography>{music.currentTrackName}</Typography>
      <Box>
        <IconButton onClick={music.playPreviousTrack} size="large">
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={music.togglePlay} size="large">
          {music.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton onClick={music.playNextTrack} size="large">
          <SkipNextIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default Player;
