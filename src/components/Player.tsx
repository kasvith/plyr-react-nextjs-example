import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { useEffect, useRef } from "react";

export interface PlayerProps {
  provider: "vimeo" | "youtube";
  url: string;
  onEnded?: (event: Plyr.PlyrEvent) => void;
  onPlay?: (event: Plyr.PlyrEvent) => void;
  onPause?: (event: Plyr.PlyrEvent) => void;
}

export default function Player({
  url,
  provider,
  onEnded,
  onPlay,
  onPause,
}: PlayerProps) {
  const playerRef = useRef<HTMLDivElement | null>(null);
  const plyr = useRef<Plyr | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      return;
    }
    if (plyr.current) return;
    plyr.current = new Plyr(playerRef.current!, {
      clickToPlay: true,
      vimeo: {},
    });

    plyr.current.on("ended", (event) => {
      onEnded?.(event);
    });
    plyr.current.on("play", (event) => {
      onPlay?.(event);
    });
    plyr.current.on("pause", (event) => {
      onPause?.(event);
    });

    return () => {
      plyr.current?.destroy();
      plyr.current = null;
    };
  }, [onPlay, onEnded, onPause]);

  return (
    <div
      id="player"
      ref={playerRef}
      data-plyr-provider={provider}
      data-plyr-embed-id={url}
    ></div>
  );
}
