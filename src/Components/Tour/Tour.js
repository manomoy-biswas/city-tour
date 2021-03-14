import React, {useState} from 'react';
import "./Tour.scss"

function Tour(props) {
  const { id, city, img, name, info } = props.tour
  const { handleChange } = props
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="city" />
        <span className="close-btn" onClick={() => handleChange(id)}>
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>info {" "} 
          <span onClick={()=>setShowInfo(!showInfo)}>
            <i className="fas fa-caret-square-down"/>
          </span>
        </h5>
      </div>
      {showInfo && <p>{info}</p>} 
    </article>
  )
}

export default Tour
