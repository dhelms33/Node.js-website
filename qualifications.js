import React, { useState, useEffect } from 'react';

function Qualifications() {
  const [qualifications, setQualifications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/qualifications/')
      .then((response) => response.json())
      .then((data) => setQualifications(data));
  }, []);

  return (
    <div>
      <h2>Qualifications</h2>
      <ul>
        {qualifications.map((qualification, index) => (
          <li key={index}>{qualification.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Qualifications;
