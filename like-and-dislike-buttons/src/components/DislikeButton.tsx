import React from 'react';
import ReactionButtons from './ReactionButtons';
import { ReactionButtonTypeProps } from '../types';

type DislikeButtonProps = ReactionButtonTypeProps;

const DislikeButton: React.FC<DislikeButtonProps> = props => {
  return (
    <ReactionButtons
      label="Dislike"
      buttonClassName="dislike-button"
      activeButtonClassName="disliked"
      counterClassName="dislike-counter"
      {...props}
    />
  );
};

export default DislikeButton;
