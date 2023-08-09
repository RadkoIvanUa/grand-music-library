import AudioPlayer from "../../components/AudioPlayer/AudioPlayerItem";

export default function Library() {
  return (
    <ul>
      <li>
        <AudioPlayer
          audioSrc={
            "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
          }
        />
      </li>
      <li>
        <AudioPlayer
          audioSrc={
            "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
          }
        />
      </li>
    </ul>
  );
}
