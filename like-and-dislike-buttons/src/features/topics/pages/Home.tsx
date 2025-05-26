import { useState } from 'react';
import LikeOrDislikeButtons from '../components/LikeOrDislikeButtons';

function Topics() {
  const [likeCount, setLikeCount] = useState(100);
  const [dislikeCount, setDislikeCount] = useState(20);

  const handleIncreaseLikes = () => {
    setLikeCount(prevCount => prevCount + 1);
  };

  const handleIncreaseDisikes = () => {
    setDislikeCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{width: '100vw', height: '100vh'}}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ width: '300px' }}>
      <LikeOrDislikeButtons likeCount={likeCount} dislikeCount={dislikeCount} />
      <div style={{ marginTop: '4rem', fontSize: '0.75rem' }}>
        <button onClick={handleIncreaseLikes}>Mock Increase Likes from API (+1)</button>
        <button onClick={handleIncreaseDisikes}>Mock Increase Dislikes from API (+1)</button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Topics;
