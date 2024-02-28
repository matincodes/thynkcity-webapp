import BrownBg from "../../assets/img/brown-bg.svg";
import BrownCircle from "../../assets/img/brown-circle.svg";
import YoungStudent from "../../assets/img/young-student.svg";

const MainPage = () => {
    return ( 
        <div className="flex font-work-sans items-center justify-center">
            <div className="w-2/4 flex flex-col">
                <h1 className="text-5xl font-semibold">
                    Empowering Africa: Innovation, Thrive, <span>Excel</span>
                </h1>
                <p className="w-4/5 py-4">
                    Rigorous programmes. Real-world skills. Lifelong career acceleration.
                </p>
                <button className="bg-[#AD7933] w-2/6 rounded-md text-white py-3">
                    Get Started Today
                </button>
            </div>
            <div className="relative">
                <div>
                    <img src={BrownBg} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default MainPage;