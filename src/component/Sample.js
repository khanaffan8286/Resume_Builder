import "../css/Samplestyle.css";

import Samplecard from './Samplecard';
import Samplecarddata from './Samplecarddata';
import Modal from "./Modal";

import React,{useState} from 'react'

const Sample = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentInd, setCurrentInd] = useState(null);

  const handleClick = (val, ind) => {
    setCurrentInd(ind);
    setClickedImg(val.imgsrc);
  };

  // const handleRotationRight = () => {

  //   const totalLength = Samplecarddata.length;
  //   if(currentInd +1 >= totalLength) {
  //     setCurrentInd(0);
  //     const newurl = Samplecarddata.imgsrc;
  //     setClickedImg(newurl);
  //     return;
  //   }
  //   const newIndex = currentInd + 1;
  //   const newurl = Samplecarddata.data.filter((val) => {
  //     return Samplecarddata.indexOf(val) === newIndex;
  //   })
  //   const newItem = newurl[0].imgsrc;
  //   setClickedImg(newItem);
  //   setCurrentInd(newIndex);
  // };

  // const handleRotationLeft = () => {
  //   const totalLength = Samplecarddata.length;
  //   if (currentInd === 0) {
  //     setCurrentInd(totalLength - 1);
  //     const newUrl = Samplecarddata.[totalLength - 1].imgsrc;
  //     setClickedImg(newUrl);
  //     return;
  //   }
  //   const newIndex = currentInd - 1;
  //   const newUrl = Samplecarddata.filter((val) => {
  //     return Samplecarddata.indexOf(val) === newIndex;
  //   });
  //   const newItem = newUrl[0].imgsrc;
  //   setClickedImg(newItem);
  //   setCurrentInd(newIndex);
  // };


  return (
    <div>
      <div className="ssample-container">
        <h1 className="sample-heading" > Samples </h1>
        <div className="sample-container" >
            {Samplecarddata.map((val, ind) => {
                return(
                    <Samplecard
                    key = {ind}
                    imgsrc ={val.imgsrc}  
                    onClick={() => handleClick(val,ind)}                 
                    />
                    
                )
            })}
            {clickedImg && <Modal clickedImg={clickedImg} setClickedImg={setClickedImg}/>
            }
           
         </div>  
     </div>
    </div>
    
  )
}

export default Sample;
