import MainPage from "../../components/mainPage/mainPage";
import TeachPage from "../../components/teachPage/teachPage";
import Nav from "../nav/nav";

const Home = () => {
    return ( 
        <div className="flex flex-col">
            <Nav/>
            <MainPage />
            <TeachPage />
        </div>
     );
}
 
export default Home;