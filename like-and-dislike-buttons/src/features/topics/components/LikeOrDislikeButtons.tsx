import React, { useState } from 'react';
import LikeButton from '../../../components/LikeButton';
import DislikeButton from '../../../components/DislikeButton';

interface LikeOrDislikeButtonsProps {
  likeCount?: number;
  dislikeCount?: number;
}

const LikeOrDislikeButtons: React.FC<LikeOrDislikeButtonsProps> = ({
  likeCount = 100,
  dislikeCount = 25,
}) => {
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(null);

  const handleLikeClick = () => {
    if (userReaction === 'like') {
      setUserReaction(null);
    } else {
      setUserReaction('like');
    }
  };

  const handleDislikeClick = () => {
    if (userReaction === 'dislike') {
      setUserReaction(null);
    } else {
      setUserReaction('dislike');
    }
  };

  const displayedLikeCount = userReaction === 'like' ? likeCount + 1 : likeCount;
  const displayedDislikeCount = userReaction === 'dislike' ? dislikeCount + 1 : dislikeCount;

  return (
    <div className="reaction-buttons-container">
      <LikeButton
        currentNumber={displayedLikeCount}
        isToggle={userReaction === 'like'}
        onClick={handleLikeClick}
      />
      <span style={{width: '1rem', display: 'inline-block'}}/>
      <DislikeButton
        currentNumber={displayedDislikeCount}
        isToggle={userReaction === 'dislike'}
        onClick={handleDislikeClick}
      />
    </div>
  );
};

export default LikeOrDislikeButtons;
