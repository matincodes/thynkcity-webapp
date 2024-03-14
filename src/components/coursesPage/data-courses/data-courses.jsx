import { design } from "../../../data/courses";
import CourseCard from "../course-card/course-card";
const DataCourses = () => {
    return ( 
        <div className="flex items-center place-content-center mb-11">
            <div>
                <div className="p-12 pb-0 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 space-x-3 ">
                    {design.map((course) => {
                        return (
                            <CourseCard
                                key={course.id}
                                image={course.image}
                                title={course.title}
                                courses={course.course}
                                paragraph={course.paragraph}
                                rating={course.rating}
                                value={course.value}
                                avatar={course.avatar}
                                name={course.name}
                                number={course.enrolledNo}
                                price={course.price}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default DataCourses;