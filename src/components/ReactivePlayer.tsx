import { useMemo } from "react";
import Player, { PlayerProps } from "./Player";

// This is a trick to recreate the player when the url/provider changes
// trick is to force a render by changing the key of the player
export default function ReactivePlayer(props: PlayerProps) {
  const sources = useMemo(
    () => [
      {
        key: `${props.provider}:${props.url}`,
      },
    ],
    [props.url, props.provider]
  );

  return (
    <div>
      {sources.map(({ key }) => (
        <Player {...props} key={key} />
      ))}
    </div>
  );
}
