import { ReactNode, useEffect, useState } from "react";
import { defaultState, MusicContext, MusicState } from "./MusicContext";

interface Props {
  // MusicProviderProps
  children: ReactNode;
}

export const MusicProvider=({children}: Props) => {
    const [state, setState] = useState<MusicState>({
        ...defaultState,
        currentTrackIndex: 0,
        audioPlayer: new Audio(defaultState.tracks[0].file),
    });

    useEffect(() => {
        return () => {
            state.audioPlayer.pause();
        };
    }, [state.audioPlayer]);

    return(<MusicContext.Provider value={[state, setState]}>
        {children}
    </MusicContext.Provider>)
}