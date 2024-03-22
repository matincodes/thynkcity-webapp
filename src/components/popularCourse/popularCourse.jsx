import { design } from "../../data/courses";
import CourseCard from "../coursesPage/course-card/course-card";

const PopularCourse = () => {
    return ( 
        <div>
        <div className="space-y-1 p-5 font-work-sans px-14">
                <p className="text-main-color font-medium text-[20px]">
                    Explore Courses
                </p>
                <h2 className="text-[36px] text-header-color font-bold tracking-normal">
                    Our Most Popular Courses
                </h2>
                <p className="text-[#667085] leading-6 font-normal">
                    These courses are the talk of the town, it might just be the one for you
                </p>
            </div>
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
        </div>
     );
}
 
export default PopularCourse;