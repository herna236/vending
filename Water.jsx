import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Water = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Add One</button>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Water;
