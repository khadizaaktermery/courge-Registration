
const Course = ({course}) => {
const {course_name}=course;
    return (
        <div className="bg-gray-100 mt-2 rounded-lg m-1 pr-2">
       
        <h3>{course_name}</h3>

      
        </div>
    );
};

export default Course;