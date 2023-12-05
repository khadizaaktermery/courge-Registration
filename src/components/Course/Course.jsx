
const Course = ({course}) => {
const {course_name}=course;
    return (
        <div>
            <h3 className="text-2xl bg-slate-200 p-4 m-4 rounded-xl">{course_name}</h3>
        </div>
    );
};

export default Course;