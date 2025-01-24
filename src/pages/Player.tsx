import { IconButton, Typography, Box } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

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
      </Box>
    </div>
  );
};

export default Player;
