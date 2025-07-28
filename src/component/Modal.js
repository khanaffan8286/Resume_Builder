import React from 'react'
import "../css/Samplestyle.css";

const Modal = ({clickedImg  , setClickedImg}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains("dismiss")){
            setClickedImg(null);
        }
    }
  return (
    <div>
    <div className='overlay dismiss' onClick={handleClick}>
        <img src={clickedImg} alt=' '/>
        <span className='dismiss' onClick={handleClick}>
            X
        </span>
      
      this isn modeal
    </div>
    this isn modealthis isn modealthis isn modeal
    </div>
  )
}

export default Modal
