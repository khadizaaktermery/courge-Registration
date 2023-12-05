import Course from "../Course/Course";
const Courses = ({courses}) => {
    console.log(courses)
    return (
        <div className="w-1/5 bg-gray-300 ml-4 mt-2 pt-4">
            <h2 className="text-center">Course Name :{courses.length}</h2>
        {
         courses.map((course,idx) =><Course key={idx} 
         course={course}></Course>)
        }
        </div>
    );
};

export default Courses;