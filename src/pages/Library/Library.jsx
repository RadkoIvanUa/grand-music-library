import AudioPlayer from "../../components/AudioPlayer/AudioPlayerItem";

import music from "../../music/Adventure.mp3";

import { StyledContainer } from "../../components/Container/StyledContainer";
export default function Library() {
  return (
    <StyledContainer>
      <ul>
        <li>
          <AudioPlayer
            url={
              "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
            }
          />
        </li>
        <li>
          <AudioPlayer url={music} />
        </li>
      </ul>
    </StyledContainer>
  );
}
