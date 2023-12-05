import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Blogs.css"
const Blogs = ({handleAddToCourseName}) => {
    const [blogs,setBlogs] = useState([]);
     
    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="blogs-container w-4/5 p-2">
            {
            blogs.map((blog,idx) =><Blog key ={idx} blog 
            = {blog} handleAddToCourseName ={handleAddToCourseName}
             ></Blog>)  

            }
        </div>
    );
};

export default Blogs;