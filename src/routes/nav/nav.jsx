import { Link } from "react-router-dom";
import Logo from "../../assets/img/thynkcity-logo.png";

const Nav = () => {
    return ( 
        <div className="flex items-center justify-between p-5 px-7 font-work-sans">
            <div>
                <Link to="/">
                    <img src={Logo} alt="Thynkcity Logo" className="w-36"/>
                </Link>
            </div>
            <div>
                <Link to="/" className="pr-2">
                    Home
                </Link>
                <Link to="courses" className="px-2">
                    Courses
                </Link>
                <Link to="partnership" className="px-2">
                    Partnership
                </Link>
                <Link to="about-us" className="px-2">
                    About Us
                </Link>
                <Link to="careers" className="px-2">
                    Careers
                </Link>
            </div>
            <div>
                <Link to="login" className="py-3 px-4 mr-2 rounded-md text-white bg-[#AD7933]">
                    Apply Now
                </Link>
                <Link to="sign-in">
                    Sign In
                </Link>
            </div>
        </div>
     );
}
 
export default Nav;