import React, { useState, useEffect } from 'react';

function ContactInfo() {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/api/contact/')
      .then((response) => response.json())
      .then((data) => setContactInfo(data[0]));
  }, []);

  return (
    <div>
      <h2>Contact Information</h2>
      <p>Phone: {contactInfo.phone}</p>
      <p>Email: {contactInfo.email}</p>
      <p><a href={contactInfo.linkedin}>LinkedIn</a></p>
      <p><a href={contactInfo.github}>GitHub</a></p>
    </div>
  );
}

export default ContactInfo;
