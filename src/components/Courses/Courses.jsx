import Course from "../Course/Course";
const Courses = ({courses}) => {
    return (
        <div className="bg-gray- p-4">
            <h2 className="text-2xl">Course Name :{courses.length}</h2>
        {
         courses.map((course,idx) =><Course key={idx} 
         course={course}></Course>)
        }
        </div>
    );
};

export default Courses;