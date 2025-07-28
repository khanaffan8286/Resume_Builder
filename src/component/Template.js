import "../css/Tempstylec.css";

import Templatecard from "./Templatecard";
import Templatecarddata from "./Templatecarddata";
import { Link } from 'react-router-dom';
import React,{useState} from 'react'

const Template = () => {
  const [file, setFile]= useState(null);
  return (
    <div>
      <div className="ssample-container">
        <h1 className="sample-heading" > Template </h1>
        <div className="sample-container">
            {Templatecarddata.map((val, ind) => {
                return(
                  <Link to='/resumeb'>
                    <Templatecard
                    key = {ind}
                    imgsrc ={val.imgsrc}/>
                    </Link>
                    
                )
            })}
        </div>  
    </div>
    </div>
  )
}

export default Template;
