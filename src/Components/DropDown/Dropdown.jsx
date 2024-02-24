import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({Title,description}) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header text-start" onClick={toggleDescription}>
        <span>{Title}</span>
        <span className={`icon ${isDescriptionVisible ? 'rotate' : ''}`}>+</span>
      </div>
      {isDescriptionVisible && (
        <div className="dropdown-content text-black text-start">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
