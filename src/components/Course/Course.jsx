
const Course = ({course}) => {
const {course_name}=course;
    return (
        <div className="bg-gray-100 m-1 pr-6">
       
        <h3>{course_name}</h3>

      
        </div>
    );
};

export default Course;