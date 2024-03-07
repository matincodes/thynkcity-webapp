import CourseHeader from "./courseHeader";
import CourseCard from "./courseCard";

const courseDetails = [
  {
    section: "Explore Courses",
    title: "Development Courses",
    text: "These courses are the talk of the town, it might just be the one for you",
  },
];

const [header] = courseDetails;

const sectionCard = () => {
  return (
    <div className="flex flex-col">
      <CourseHeader
        spanTitle={header.section}
        title={header.title}
        paragraph={header.text}
      />

      <CourseCard />
    </div>
  );
};

export default sectionCard;
