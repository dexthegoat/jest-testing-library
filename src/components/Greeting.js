import React, { useState } from 'react';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={() => setChangedText(!changedText)}>Change Text!</button>
    </div>
  );
};

export default Greeting;
