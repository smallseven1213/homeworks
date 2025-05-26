import React from 'react';
import ReactionButtons from './ReactionButtons';
import { ReactionButtonTypeProps } from '../types';

type LikeButtonProps = ReactionButtonTypeProps;

const LikeButton: React.FC<LikeButtonProps> = props => {
  return (
    <ReactionButtons
      label="Like"
      buttonClassName="like-button"
      activeButtonClassName="liked"
      counterClassName="likes-counter"
      {...props}
    />
  );
};

export default LikeButton;
