import MainPage from "../../components/mainPage/mainPage";
import Nav from "../nav/nav";

const Home = () => {
    return ( 
        <div className="flex flex-col">
            <Nav/>
            <MainPage/>
        </div>
     );
}
 
export default Home;