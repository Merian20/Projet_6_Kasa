import React, { useState } from 'react';
import './encart.scss';
import Vector from './../../assets/Vector.png'
//import Accordion from 'react-bootstrap/Accordion';

function Encart({ title, content, children }) { /*children pour des éléments plus complexes, props moins complexes*/
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='encart-body'>
      <div className="encart">
        <h3>{title}</h3>
        <div className="arrow-container" onClick={toggleExpand}>
          <img src={Vector} alt="Arrow Right" className={isExpanded ? 'rotate' : ''} />
        </div>
      </div>
      {isExpanded && (
          <div className={`expanded-content ${isExpanded ? 'expanded' : ''}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Encart;