import { IoBookOutline } from "react-icons/io5";
const Blog = ({blog, handleAddToCourseName}) => {
const {img,course_name,details,price,credit} = blog;
    return (
        <div className="mb-4">
           <img src = {img} alt=""/> 
           <h1 className="text-2xl">{course_name}</h1>
           <p>{details}</p>
           <div className="flex">
            <p className="">$ {price}</p>
            <div className="flex">
            <button 
            className="ml-4 mr-2"><IoBookOutline 
            /></button>
            <span>credit {credit}hr</span>
</div> 
</div> 
            <button
            onClick={()=>handleAddToCourseName(blog)}
             className="bg-blue-600 text-white w-[280px] h-[40px] mt-4 ">Select</button>
        </div>
    );
};

export default Blog;