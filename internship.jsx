import React from 'react'
import BasicExample from './card'
import CarouselPage from './About'
const Internship= () => {
  return (
    <div>
    <hr></hr><h3 style={{fontWeight:"bold",marginLeft:"43px",fontSize:"23px"}}>Trending ⚡</h3>
    <div className="d-flex align-items-center fullvHeight">
     
    <BasicExample  style={{ backgrounColor:"lightBlue"}}  imgsrc="https://cuvette.tech/app/static/media/cgipBannerTest.1bef02ff.jpg" 
   title="Full Stack Placement Guarantee Program" author="Learn from top mentors of IIT Kharagpur,Myntra and get CTC upto 25 LPA." button="View Details" ></BasicExample>
   
   <BasicExample  imgsrc="https://cuvette.tech/app/static/media/dataScience.36dd03b9.jpg" 
   title="Data Science Placement Guarantee course" author=" Course prepared by top 1% Data Scientists.Take the entrance test to get apply." button="Entrance Test" style={{backgrounColor:"#FFCCCB"}}/>
    <br></br><br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  
<CarouselPage/>
</div><div>
   <img src="https://cuvette.tech/app/static/media/referCardBg.5f0fde4d.png" style={{height:"250px", width:"250px"}}/>
   
   <BasicExample imgsrc="https://cuvette.tech/app/static/media/payAfterPlacement.22734d89.jpg" 
   title="Pay After Placement" author="This is for students who are already skilled and looking for direct placement service.Only selected students will be given a chance."
    button="View Details"/>
   
  
   </div>
</div>
  )
}

export default Internship;
