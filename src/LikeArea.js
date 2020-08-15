import React, { useState } from 'react';

function LikeArea() {
  const [likeCount, setLikeCount] = useState(10);

  function increaseLikeHandler() {
    setLikeCount(function (prev) {
      return prev + 1;
    });
  }

  function decreaseLikeHandler() {
    setLikeCount((prev => {
      if (prev > 0) {
        return prev - 1;
      }
      return 0;
    }));
  }

  return (
    <div className='Right'>
      <button className='btn' onClick={increaseLikeHandler}><i className="fa fa-thumbs-o-up"></i></button>
      <button className='btn' onClick={decreaseLikeHandler}><i className="fa fa-thumbs-o-down"></i></button>
      <h2>This Page is liked {likeCount} Times</h2>
    </div>
  );
}

export default LikeArea;