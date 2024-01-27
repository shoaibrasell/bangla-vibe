import React from 'react';

const Friend = ({ring}) => {
  return (
    <div>
      <h2>Friend</h2>
      {ring && <p><small>Ring : DiamonD</small></p>}
    </div>
  );
};

export default Friend;