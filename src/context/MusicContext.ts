// can be used in the entire app
import { createContext, Dispatch, SetStateAction } from "react";

export const defaultState = {
  // inferring the type from defaultState
  audioPlayer: new Audio(), // in JS to run music
  tracks: [
    {
      name: "Sinister",
      file: "/sinister.mp3",
    },
    {
      name: "Stomp",
      file: "/stomp.mp3",
    },
    {
      name: "Underwater",
      file: "/underwater.mp3",
    },
  ],
  currentTrackIndex: null as number | null,
  isPlaying: false as boolean,
} as const;

export type MusicState = typeof defaultState; // take default state and create me a type called music state from this - we inferred the type from this

export type MusicContextType = [
  MusicState,
  Dispatch<SetStateAction<MusicState>>
];
// action   function    data
// similar (works same) like: const [musicState, setMusicState] = useState<MusicState>()

export interface MusicPlayerHook { // interface can be extended and have subtypes
  playTrack: (index: number) => void;
  togglePlay: () => void;
  currentTrackIndex: number | null;
  currentTrackName: string | null;
  trackList: typeof defaultState.tracks; // same as MusicState["tracks"];
  isPlaying: boolean;
  playPreviousTrack: () => void;
  playNextTrack: () => void;
}

export const MusicContext = createContext<MusicContextType>([defaultState, () => null]); // we want it to be null
