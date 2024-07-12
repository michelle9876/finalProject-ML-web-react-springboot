// components/Subject.js

import React from 'react';

const Subject = ({ title }) => {
  return (
    <div className="subject-container">
      <h1 className="subject-title">{title}</h1>
    </div>
  );
}

export default Subject;
