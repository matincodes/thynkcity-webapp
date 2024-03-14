import EngineeringCourses from "../engineering-courses/engineering-courses";
import DesignCourses from "../design-courses/design-courses";
import DataCourses from "../data-courses/data-courses";

const SectionCard = ({childtype}) => {
    return ( 
        <div>
            <div className="space-y-1 p-5 font-work-sans px-14">
                <p className="text-main-color font-medium text-[20px]">
                    Explore Courses
                </p>
                <h2 className="text-[36px] text-header-color font-bold tracking-normal">
                {childtype === "engineering" ? (
                    "Engineering Department"
                  ) : childtype === "design" ? (
                    "Product & Design Department"
                  ) : (
                    "Data Department"
                  )}
                </h2>
                <p className="text-[#667085] leading-6 font-normal">
                    These courses are the talk of the town, it might just be the one for you
                </p>
            </div>
            <div>
                {childtype === "engineering" ? (
                    <EngineeringCourses />
                    ) : childtype === "design" ? (
                    <DesignCourses />
                    ) : (
                    <DataCourses />
                )}
            </div>
        </div>
     );
}
 
export default SectionCard;