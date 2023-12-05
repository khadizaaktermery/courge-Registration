import './App.css'
import Header from './components/Header'
import Blogs from './components/blogs/blogs'
import { useState } from 'react';
import Courses from './components/Courses/Courses';

function App() {
  // const [courses,setCourses] =useState ([]);
  const [courseName,setCourseName] = useState([]);
   
  // const handleAddToCourse = blog =>{
  //   const newCourses =[...courses,blog];
  //   setCourses(newCourses);
  // }
  const handleAddToCourseName =blog =>{
    if(courseName.includes(blog)){
      alert('allready added')

    }
    else{
      const newCoursesName = [...courseName,blog];
      setCourseName(newCoursesName);
   

    }

  }

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto '>
{/* <Blogs  handleAddToCourse = {handleAddToCourse} > </Blogs>  
    */}
   <Blogs handleAddToCourseName = {handleAddToCourseName}></Blogs>
    
   
   <Courses courses={courseName} ></Courses>
    </div>
    </>
  )
}

export default App
