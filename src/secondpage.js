import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { Button } from '@material-ui/core';
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import Data from "./pageTwo.json";
import './pageTwo.css';


const SecondPage=()=> {

  let second_page_score=new Array();
  const [ value1, setValue1 ] = useState(0);
  const [ value2, setValue2 ] = useState(0);
  const [ value3, setValue3 ] = useState(0);
  const [ value4, setValue4 ] = useState(0);
  const [ value5, setValue5 ] = useState(0);
  const [ value6, setValue6 ] = useState(0);
  const [ value7, setValue7 ] = useState(0);
  const [ value8, setValue8 ] = useState(0);
  const [ value9, setValue9 ] = useState(0);
  const [ value10, setValue10 ] = useState(0);

  second_page_score.push(value1);
  second_page_score.push(value2);
  second_page_score.push(value3);
  second_page_score.push(value4);
  second_page_score.push(value5);
  second_page_score.push(value6);
  second_page_score.push(value7);
  second_page_score.push(value8);
  second_page_score.push(value9);
  second_page_score.push(value10);

  var percentage=0;
  //if a question is attempted(score !=0) progress bar moves by 10 
  for (let score of second_page_score)
  {
    if(score!=0)
    {
      var percentage = percentage + 10   
    }
  }
  return (
    <div className="div">
      <div className='ProgressBar_Div'>
      <ProgressBar
        percent={percentage}
        fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
      <p>Assessment Progress</p>
      </div>
      <p className="para">
        {Data.map(post =>{
          return (<p style={{backgroundColor:"#e6e6e6"}}> {post.Question1}</p>)
        })}
      </p>
      <RangeSlider
        value={value1}
        max = {10}
        onChange={changeEvent => setValue1(changeEvent.target.value)}
      />


      <p className="para">
        {Data.map(post =>{
          return (<p style={{backgroundColor:"#e6e6e6"}}> {post.Question2}</p>)
        })}
      </p>
      <RangeSlider
        value={value2}
        max = {10}
        onChange={changeEvent => setValue2(changeEvent.target.value)}
      />


      <p className="para">
        {Data.map(post =>{
          return (<p style={{backgroundColor:"#e6e6e6"}}> {post.Question3}</p>)
        })}
      </p>
      <RangeSlider
         value={value3}
         max = {10}
         onChange={changeEvent => setValue3(changeEvent.target.value)}
      />

      
      <p className="para">
        {Data.map(post =>{
         return (<p style={{backgroundColor:"#e6e6e6"}}> {post.Question4}</p>)
        })}
      </p>
      <RangeSlider
        value={value4}
        max = {10}
        onChange={changeEvent => setValue4(changeEvent.target.value)}
      />

      <p className="para">
        {Data.map(post =>{
        return (<p style={{backgroundColor:"#e6e6e6"}}> {post.Question5}</p>)
        })}
      </p>
      <RangeSlider
        value={value5}
        max = {10}
        onChange={changeEvent => setValue5(changeEvent.target.value)}
      />

      <p className="para">
        {Data.map(post =>{
        return (<p style={{backgroundColor:"#e6e6e6"}}> {post.Question6}</p>)
        })}
      </p>
      <RangeSlider
        value={value6}
        max = {10}
       onChange={changeEvent => setValue6(changeEvent.target.value)}
     />


      <p className="para">
        {Data.map(post =>{
         return (<p style={{backgroundColor:"#e6e6e6"}}> {post.Question7}</p>)
        })}
      </p>
      <RangeSlider
        value={value7}
        max = {10}
        onChange={changeEvent => setValue7(changeEvent.target.value)}
      />

      <p className="para">
        {Data.map(post =>{
         return (<p style={{backgroundColor:"#e6e6e6"}}> {post.Question8}</p>)
        })}
      </p>
      <RangeSlider
        value={value8}
        max = {10}
        onChange={changeEvent => setValue8(changeEvent.target.value)}
      />

      <p className="para">
        {Data.map(post =>{
          return (<p style={{backgroundColor:"#e6e6e6"}}> {post.Question9}</p>)
        })}
      </p>
        <RangeSlider
         value={value9}
         max = {10}
         onChange={changeEvent => setValue9(changeEvent.target.value)}
        />
                
       <p className="para">
         {Data.map(post =>{
           return (<p style={{backgroundColor:"#e6e6e6"}}> {post.Question10}</p>)
         })}
       </p>
       <RangeSlider
         value={value10}
         max = {10}
         onChange={changeEvent => setValue10(changeEvent.target.value)}
       />
       <div className='Btn_Div'>
       <Button 
        style={{backgroundColor: "#0073d8",color:"white",marginLeft: '80px'}} 
        href="http://localhost:3000/firstpage">BACK
       </Button>

       <Button 
        style={{backgroundColor: "#0073d8",color:"white",marginLeft:'150px'}}
        href="http://localhost:3000/thirdpage">NEXT
       </Button> 
       </div>    
    </div>
  );
}

export default SecondPage;
