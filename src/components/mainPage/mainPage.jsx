import BrownBg from "../../assets/img/brown-bg.svg";
import BrownCircle from "../../assets/img/brown-circle.svg";
import YoungStudent from "../../assets/img/young-student.svg";
import LaptopIcon from  "../../assets/img/laptop-icon.svg";
import PersonIcon from "../../assets/img/person-icon.svg";
import ProgressCircle from "../../assets/img/progress-circle.svg";
import "./mainPage.css";

const MainPage = () => {
    return ( 
        <div className="flex font-work-sans items-center justify-center w-screen px-8 py-10 z-20 bg-white">
            <div className="w-2/4 flex flex-col">
                <h1 className="text-6xl font-normal font-berlin">
                    Empowering Africa: Innovation, Thrive, <span className="text-[#AD7933]">Excel</span>
                </h1>
                <p className="w-4/5 py-4">
                    Rigorous programmes. Real-world skills. Lifelong career acceleration.
                </p>
                <button className="bg-[#AD7933] w-2/6 rounded-md text-white py-3">
                    Get Started Today
                </button>
            </div>
            <div className="pl-20 pt-5 w-2/4 relative z-10">
                <div className="w-[90%] inset-0">
                    <img src={BrownBg} alt=""/>
                </div>
                <div className="absolute w-[55%] top-16 left-36 inset-0">
                    <img src={YoungStudent} alt="" />
                </div>
                <div className="absolute w-[80%] top-5 right-14">
                    <img src={BrownCircle} alt="" />
                </div>
                <div className="absolute bottom-36 -left-10 border border-[hsl(34,54%,44%)] rounded-xl bg-[#F5F5F4] z-20 shadow-2xl">
                    <div className="flex p-5">
                        <img src={LaptopIcon} alt=""  className="bg-[#AD7933] rounded-xl px-2 mr-6"/>
                        <div className="font-inter">
                            <h4 className="font-bold text-[#101828] text-3xl">100+</h4>
                            <p className="text-gray-400">Video Courses</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 right-0 border border-[hsl(34,54%,44%)] rounded-xl bg-[#F5F5F4] z-20 shadow-2xl">
                    <div className="flex p-5">
                        <img src={PersonIcon} alt=""  className="bg-[#AD7933] rounded-xl px-2 mr-6"/>
                        <div className="font-inter">
                            <p className="text-gray-400">Tutors</p>
                            <h4 className="font-bold text-[#101828] text-3xl">30+</h4>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 border border-[hsl(34,54%,44%)] rounded-xl bg-[#F5F5F4] z-20">
                    <div className="flex flex-col items-center justify-center  p-2">
                        <img src={ProgressCircle} alt="" className="w-[85%]"/>
                        <div className="font-inter text-center">
                            <h4 className="font-bold text-[#101828] text-3xl">50+</h4>
                            <p className="text-gray-400">Online Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MainPage;