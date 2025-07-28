import React, { useState } from 'react'
import "./resin.css"
// import { Scrollbars } from 'react-custom-scrollbars';
// import Draggable from 'react-draggable';
// import Resumeou from './Resumeou';
// import Skill  from './Skill';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

 
const Resumein = () => {
  const [basicinfo , setbasicinfo] = useState([
    {
      id: "",
      firstname: "" , 
      lastname: "" , 
      email: "" , 
      phone: "" , 
      country: "" , 
      city: ""
    }
  ]);

  const [summary , setsummary] = useState([]);

  const [education , setEducation ]=useState([
    {
    school : "", 
    degree:"" , 
    startdate: "", 
    enddate:"", 
    ecity : "",
    description : "" 
   }]);

   const addEdu = () => {
    setEducation([...education, {
      school : "", 
      degree:"" , 
      startdate: "", 
      enddate:"", 
      ecity : "",
      description : "" 
    }])
    };
    
  const removeedu=(i) => {
    const newedu = [...education]
    newedu.splice(i, 1)
    setEducation (newedu)
    };

  const educhange = (e , i) => {
      // const [name,value] = e.target;
      const newedu=[...education]
      newedu[i][e.target.name]= [e.target.value]
      setEducation(newedu)
    }; 

  const [workexp , setworkexp ]=useState([
    {
    jobtitle : "",  
    startdate: "", 
    enddate:"", 
    wcity : "",
    description : "" 
   }]);

   const addWork = () => {
    setworkexp([...workexp, {
      jobtitle : "",  
      startdate: "", 
      enddate:"", 
      wcity : "",
      description : "" 
    }])
    };

  const removework=(i) => {
    const newwork = [...workexp]
    newwork.splice(i, 1)
    setworkexp (newwork)
    };

  const workchange = (e , i) => {
      // const [name,value] = e.target;
      const newwork=[...workexp]
      newwork[i][e.target.name]= [e.target.value]
      setworkexp(newwork)
    };  

  const [skills, setskills] = useState([
    {
        skill:""     
    }
   ]);

   const addskill =()=>{
    setskills([...skills , {skill : ""}]);
   };

  const removeskill = (index) => {
    const list=[...skills];
    list.splice(index,1);
    setskills(list)
   }

  const skillchange = (e , index) =>{
    const {name,value} = e.target;
    const list=[...skills];
    list[index][name]= value;
    setskills(list);
   }

  const [project , setproject ]=useState([
    {
    projecttitle : "", 
    link: "" , 
    startdate: "", 
    enddate:"", 
    description : "" 
   }]);

  const addProject = () => {
    setproject([...project, {
      projecttitle : "", 
      link: "" , 
      startdate: "", 
      enddate:"", 
      description : "" 
    }])
    };
  const removeproj=(i) => {
    const newproj = [...project]
    newproj.splice(i, 1)
    setproject (newproj)
    };
  const projectchange = (e , i) => {
      // const [name,value] = e.target;
      const newproj=[...project]
      newproj[i][e.target.name]= [e.target.value]
      setproject(newproj)
    };  

  const [others , setothers] = useState([{
    title:"",
    name:"",
    description:""
  }]);

  const addOthers = () => {
    setothers([...others, {
      title:"",
      name:"",
      description:"" 
    }])
    };
  const removeothers=(i) => {
    const newother = [...others]
    newother.splice(i, 1)
    setothers (newother)
    };
  const otherschange = (e , i) => {
      // const [name,value] = e.target;
      const newother=[...others]
      newother[i][e.target.name]= [e.target.value]
      setothers(newother)
    };  


    const [loader , setLoader] = useState(false);

  
    const downloadPdf = () => {
      const capture = document.querySelector('.res-show');
      setLoader(true);
      html2canvas (capture).then((canvas)=> {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader (false);
      doc.save('receipt.pdf');
      })
    }

  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });


  return (
    <div>
      <div className='resume'>
        <form className='resume resume-details'>
          <div className='basic-details'>
            <h1>Basic Details</h1>
            <label> firstname : </label>
              <input 
              value={basicinfo.firstname}  
              type="text"
              minlength="4" maxlength="8" size="10"
              pattern='[a-z]'
              required="required"
              onChange = {e => setbasicinfo({...basicinfo, 'firstname': e.target.value})}
              />
              
            <label> lastname : </label>
              <input
              value={basicinfo.lastname}  
              type="text"
              pattern="[a-zA-Z]"
              required="required"
              onChange = {e => setbasicinfo({...basicinfo, 'lastname': e.target.value})}
              />
              <br></br>
            <label> email : </label>
              <input
              value={basicinfo.email}  
              type="email"
              required="required"
              pattern="[^ @]*@[^ @]*"
              onChange = {e => setbasicinfo({...basicinfo, 'email': e.target.value})}
              />
              
           
            <label> phone : </label>
              <input
              value={basicinfo.phone}  
              type="phone" 
              pattern='[0-9]'
              required="required"
             
              onChange = {e => setbasicinfo({...basicinfo, 'phone': e.target.value})}
              />
             <br></br>
            
            <label> Country : </label>
              <input
              value={basicinfo.country}    
              type="text"
              pattern="[a-zA-Z]"
              required="required"
              onChange = {e => setbasicinfo({...basicinfo, 'country': e.target.value})}
              />
             
            <label> city : </label>
              <input
              value={basicinfo.city}  
              type="text"
              pattern="[a-zA-Z]"
              required="required"
              onChange = {e => setbasicinfo({...basicinfo, 'city': e.target.value})}
              />
          </div>

          <div className='summary-details'>
            <h1> Summary</h1>
            <label> Summary : </label>
              <input 
              value={summary}  
              type="textarea"
              minlength="40"
              
              required="required"
              onChange = {e => setsummary( e.target.value)}
              />
          </div>

          <div className='education-details'>
            <h1>Education Details</h1>
            
            {education.map((edu,i) => (
              <div key={i}>
              <label> College : </label>
                <input 
              value={edu.school}  
              type="text"
              name='school'
              pattern="[a-zA-Z]"
              required="required"
              onChange = {(e) => educhange(e, i)}
              />
              
            <label> Degree : </label>
              <input
              value={edu.degree}  
              type="text"
              name='degree'
              pattern="[a-zA-Z]"
              required="required"
              onChange = {(e) => educhange(e, i)}
              />
              <br></br>
              <label> Start & end Date : </label>
              <input
              value={edu.startdate}  
              type="month"
              name='startdate'
              onChange = {(e) => educhange(e, i)}
              />
              <input
              value={edu.enddate}  
              type="month"
              name='enddate'
              onChange = {(e) => educhange(e, i)}
              />
             
              
              <br></br>
  
            <label> city : </label>
              <input
              value={edu.ecity}  
              type="text"
              name='ecity'
              pattern="[a-zA-Z]"
              required="required"
              onChange = {(e) => educhange(e, i)}
              />
              
              <label> CGPA </label>
              <input
              value={edu.description}    
              type="textarea"
              name='description'
              pattern="[0-9]"
              required="required"
              rows="4"
              onChange = {(e) => educhange(e, i)}
              />

              {education.length>1 && (
                <button type="button" onClick={()=>removeedu(i)}>
                    Remove project
                </button>
              )}
              </div>
            ))}
             <button type='button' onClick={addEdu} > add</button>
          </div>

          <div className='work-details'>
            <h1>Work Experience</h1>

            {workexp.map((workk, i) => (
              <div key ={i}>
                <label> Job title : </label>
                <input 
              value={workk.jobtitle}  
              type="text"
              name='jobtitle'
              pattern="[a-zA-Z]"
              required="required"
              onChange = {(e) => workchange(e, i)}
              /><br></br>
            
            <label> Start & end Date : </label>
              <input
              value={workk.startdate}  
              type="month"
              name='startdate'
              onChange = {(e) => workchange(e, i)}
              />
              <input
              value={workk.enddate}  
              type="month"
              name='enddate'
              onChange = {(e) => workchange(e, i)}
              />
            <br></br>
            
            <label> city : </label>
              <input
              value={workk.wcity}  
              type="text"
              pattern="[a-zA-Z]"
              required="required"
              name='wcity'
              onChange = {(e) => workchange(e, i)}
              />
              <label> Description : </label>
              <input
              value={workk.description}    
              type="textarea"
              pattern="[a-zA-Z]"
              required="required"
              name='description'
              onChange = {(e) => workchange(e, i)}
              />
              {workexp.length>1 && (
                <button type="button" onClick={()=>removework(i)}>
                    Remove project
                </button>
              )}
              
              </div>
              
            ))}
            <button type='button' onClick={addWork} > add</button>
              
          </div>

          <div className='project-details'>
            <h1> Project</h1>
            
            {project.map((proj , i) => (
            <div key={i}>
              <label> project title : </label>
              <input 
              value={proj.projecttitle}  
              type="text"
              pattern="[a-zA-Z]"
              required="required"
              name='projecttitle'
              onChange = {(e) => projectchange(e, i)}
              // onChange = {e => setproject({...project, 'projecttitle': e.target.value})}
              />
              
              <label> Link : </label>
              <input 
              value={proj.link}  
              type="link"
              name='link'
              placeholder="https://example.com" pattern="https://.*"  required 
              onChange = {(e) => projectchange(e, i)}
              />
              <br></br>
              <label> Start & end Date : </label>
              <input
              value={proj.startdate}  
              type="month"
              name='startdate'
              onChange = {(e) => projectchange(e, i)}
              />
              <input
              value={proj.enddate}  
              type="month"
              name='enddate'
              onChange = {(e) => projectchange(e, i)}
              />
           
              <br></br>

              <label> Description : </label>
              <input
              value={proj.description}    
              type="textarea"
              name='description'
              pattern="[a-zA-Z]"
              required="required"
              onChange = {(e) => projectchange(e, i)}
              />

              {project.length>1 && (
                <button type="button" onClick={()=>removeproj(i)}>
                    Remove project
                </button>
              )}

              </div>
          
            ))}  
            
            <button type='button' onClick = {addProject}>Add project</button>
          </div>

          <div className='skill-details'>
            <h1> Skills</h1>
            <label> Skills : </label>
            {skills.map((singleskill, index) => (
             <div key={index} >
            
              <input     
              value={singleskill.skill}   
              name='skill'
              id='skill'
              type="text"
              onChange = {(e) => skillchange(e, index)}
              />

              {skills.length - 1 === index && skills.length <10 &&
              (<button type='button' onClick={addskill}>
                Add
              </button>) 
              }

              {skills.length>1 && (
                <button type="button" onClick={()=>removeskill(index)}>
                    -
                </button>
              )

              }
             </div>     
            ))}
              {/* <Skill/> */}
          </div>

          <div className='others-details'>
            <h1> Others</h1>
            {others.map((other, i) => (
             <div key={i} >

             <label> Title : </label>
              <input     
              value={other.title}   
              name='title'
              type="text"
              pattern="[a-zA-Z]"
              required="required"
              onChange = {(e) => otherschange(e, i)}
              />

              <label> Name  : </label>
              <input     
              value={other.name}   
              name='name'
              type="text"
              pattern="[a-zA-Z]"
              required="required"
              onChange = {(e) => otherschange(e, i)}
              />
              <br></br>

              <label> Description : </label>    
              <input     
              value={other.description}   
              name='description'
              type="text"
              pattern="[a-zA-Z]"
              required="required"
              onChange = {(e) => otherschange(e, i)}
              />


              {others.length>1 && (
                <button type="button" onClick={()=>removeothers(i)}>
                    remove
                </button>
              )}
             </div>     
            ))}
            <button type='button' onClick={addOthers}>
                Add
              </button>
          </div>

          <div className='empty'>

          </div>
          <div className='empty'>

          </div>

          
        </form>
        

        <div className=' res-box'>
        
          {/* <button>select template </button>  */}
          <button
          onClick={downloadPdf}
          disabled = {!(loader === false)}
          > 
            {loader ? (
              <span> Downloading</span>
            ): (
              <span > Download</span>
            )}
          </button>
          <button onClick={() => {
        handlePrint(null, () => contentToPrint.current);
      }}>
             Download Resume
          </button>
          {/* <Scrollbars style={{ height: 600 }}> */}
          <div ref={contentToPrint} className='res-show'>
            
            {/* <h3>{basicinfo.firstname + basicinfo.lastname }sanket jaiswar</h3> */}
            
            <section>
            {/* <Draggable bounds ={{left:-200 , right:200 , top: 0 , bottom:50}}> */}
            <h1 className='name' >{basicinfo.firstname  } {basicinfo.lastname}</h1>
            {/* </Draggable> */}
            </section>
            <section>
            
            {/* <Draggable> */}
          
            <p className='email'>  <ul  className="list-titles" >
      		 <li>Email</li>
      		 <li>Phone</li>
      		 <li>City</li>
      		 < li>Country</li>
           </ul>{basicinfo.email}<br></br> {basicinfo.phone} <br></br> {basicinfo.city}<br></br>{basicinfo.country}</p>
            {/* </Draggable> */}
            </section><br></br>


            
   

            <section><h1 className='summmary'>Summary</h1><p>{summary}</p></section><br></br>

            <hr></hr>

            <section>
            <h2 className='summmary'>Education details</h2>
            
            {education.map((edu,index)=>(
              <ul key={index} >
                {/* {edu.school && <li>{edu.school}</li>} */}
                College: &nbsp;&nbsp;{edu.school}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
                Year :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{edu.startdate }&nbsp;-&nbsp;{edu.enddate}<br></br>
                Degree: &nbsp;&nbsp;{edu.degree}  <br></br>
                
                CGPA -{edu.description}<br></br>
                City :&nbsp;&nbsp;{edu.ecity}
              </ul>
            ))}
            </section>  <br></br>

            <hr></hr>

            <section>
            <h2 className='summmary'>  Work details</h2>
            {workexp.map((workk,index)=>(
              <ul key={index}>
                {/* {singleskill.skill && <li>{singleskill.skill}</li>} */}
                Job :&nbsp;&nbsp;{workk.jobtitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {workk.startdate}&nbsp;-&nbsp; {workk.enddate}<br></br>
                
                City :&nbsp;&nbsp;{workk.wcity}<br></br>
                Description :&nbsp;&nbsp;{workk.description}
              </ul>
            ))}
            </section><br></br>
<hr></hr>
            

            <section>
            <h2 className='summmary'> project details</h2>
            {project.map((proj,index)=>(
              <ul key={index}>
                {/* {singleskill.skill && <li>{singleskill.skill}</li>} */}
                Project :&nbsp;&nbsp;{proj.projecttitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {proj.startdate}&nbsp;-&nbsp;{proj.enddate}<br></br>
                Link :&nbsp;&nbsp;{proj.link}<br></br>
                Description :&nbsp;&nbsp;{proj.description}
               
              </ul>
            ))}
            </section><br></br>

            <hr></hr>

            <section>
            <h2 className='summmary'> Skills</h2>
            {skills.map((singleskill,index)=>(
              <ul key={index} className='skills'>
                {/* {singleskill.skill && <li>{singleskill.skill}</li>} */}
                {singleskill.skill}
              </ul>

            ))}
            </section> 

            <hr></hr>

            <section>
            <h2 className='summmary'> others</h2>

            {others.map((other,index)=>(
              <ul key={index}>
                {/* {singleskill.skill && <li>{singleskill.skill}</li>} */}
                Title :&nbsp;&nbsp;{other.title}<br></br>
                Name :&nbsp;&nbsp;{other.name}<br></br>
                Description :&nbsp;&nbsp;{other.description}
              </ul>

            ))}
            </section> <br></br> <br></br>  
             
                    
          </div>
          {/* </Scrollbars> */}
          
          
          
        
        </div>
      </div>
    </div>
    
  )
}

export default Resumein

