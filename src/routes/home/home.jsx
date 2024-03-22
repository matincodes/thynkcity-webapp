import MainPage from "../../components/mainPage/mainPage";
import PopularCourse from "../../components/popularCourse/popularCourse";
import TeachPage from "../../components/teachPage/teachPage";
import Nav from "../nav/nav";

const Home = () => {
    return ( 
        <div className="flex flex-col">
            <Nav/>
            <MainPage />
            <TeachPage />
            <PopularCourse />
        </div>
     );
}
 
export default Home;