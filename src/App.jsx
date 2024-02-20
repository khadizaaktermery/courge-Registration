import './App.css'
 
import Header from './components/Header'
import Blogs from './components/blogs/blogs'
import { useState } from 'react';
import Courses from './components/Courses/Courses';
import Credits from './components/Credits/Credits';
import Remaing from './components/Remaing/Remaing';
import TotalPrice from './components/Total/TotalPrice';

function App() {
  const [courseName,setCourseName] = useState([]);
  const [remaining,setRemaing] = useState(20);
  const [credit,setCredit] = useState(0);
  const [price,setPrice] =useState(0);

   
  const handleAddToCourseName =blog =>{
    console.log(blog)
    if(courseName.includes(blog)){
      alert('already added !')

    }
    else if   (blog.credit<=remaining){
       const newCredit=credit+blog.credit;
       setCredit(newCredit)
       const newRemaining = remaining-blog.credit;
       setRemaing(newRemaining);
       const newPrice= price+blog.price;
       setPrice(newPrice);
       const newCoursesName = [...courseName,blog];
       setCourseName(newCoursesName);
 
  }
    else{ alert('you don\'t get more')
    }
  

    

  }
  

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto '>
   <Blogs handleAddToCourseName = {handleAddToCourseName}
   ></Blogs>
    <div className='w-1/5 ml-4 mt-6 pt-4 bg-gray-300'>
      <Remaing remaining={remaining} ></Remaing>
   <Courses courses={courseName} ></Courses>

   <Credits credit = {credit}></Credits>
   <TotalPrice price ={price}> </TotalPrice>
   </div>
    </div>

    </>
  )
}

export default App
