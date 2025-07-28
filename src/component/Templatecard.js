

import React,{useState} from 'react';




const Templatecard = (props) => {

  const [file, setFile]= useState(null);


  return (
    <div>     
      <div className="sample-card">
               
                {/* { <button>
                <img src={props.imgsrc} alt="Examples" />
                </button> } */}
                
                <img src={props.imgsrc} alt="Examples" id='myImg' />
       
       </div>     
    </div>
  )
}

export default Templatecard;
