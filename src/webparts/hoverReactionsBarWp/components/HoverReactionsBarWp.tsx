import * as React from 'react';
import { useState, useRef, useCallback } from 'react';
import { HoverReactionsBar } from '@pnp/spfx-controls-react/lib/HoverReactionsBar';


const HoverReactionsBarWp: React.FC = () => {

  const [isOpenHoverReactionBar, setIsOpenHoverReactionBar] = useState(false);

  const divRefAddReaction = useRef<HTMLDivElement>(null);

const onSelectEmoji = React.useCallback(
  async (emoji?: string, emojiInfo?: any) => {
    console.log('emoji', emoji);
    console.log('emojiInfo object', emojiInfo);

    setIsOpenHoverReactionBar(false);
  },
  []
);

  return (
    <div>
      <div
        ref={divRefAddReaction}
        onClick={() => setIsOpenHoverReactionBar(true)}
        style={{ cursor: 'pointer' }}
      >
        Abrir Reações
      </div>

      <HoverReactionsBar
        isOpen={isOpenHoverReactionBar}
        onSelect={onSelectEmoji}
        onDismiss={() => setIsOpenHoverReactionBar(false)}
        target={divRefAddReaction.current as HTMLDivElement}
      />
    </div>
  );
};

export default HoverReactionsBarWp;