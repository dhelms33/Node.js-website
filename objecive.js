import React, { useState, useEffect } from 'react';

function Objective() {
  const [objective, setObjective] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/objective/')
      .then((response) => response.json())
      .then((data) => setObjective(data[0].content));
  }, []);

  return (
    <div>
      <h2>Objective</h2>
      <p>{objective}</p>
    </div>
  );
}

export default Objective;
