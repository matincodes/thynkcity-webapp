import Nav from "../../../routes/nav/nav";
import CoursesHeader from "../courses-header/courses-header";
import SectionCard from "../section-card/section-card";

const CoursesSection = () => {
    const propsArray =[
        {childtype : "engineering"},
        {childtype : "design"},
        {childtype : "data"}
    ]

    return ( 
        <div>
            <Nav/>
            <CoursesHeader/>
            {propsArray.map((props,index) => (
                <SectionCard key={index} {...props}/>
            ))}
        </div>
     );
}
 
export default CoursesSection;