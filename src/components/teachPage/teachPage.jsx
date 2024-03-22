import BrownStripes from "../../assets/img/brown-stripes.svg";
import { teachData } from "../../data/teachData";
import TeachCard from "./teachCard";
const TeachPage = () => {
    return ( 
        <div>
            <div className="absolute top-[55%] right-0 overflow-hidden">
                <img src={BrownStripes} alt="" className="w-[95%]" />
            </div>
            <div className="text-center m-16">
                <h2 className="font-berlin text-4xl">What We Teach</h2>
            </div>
            <div className="grid grid-cols-3 gap-6 px-10">
                {teachData.map(data => (
                        <TeachCard 
                            subtitle={data.subtitle}
                            img={data.img}
                            title={data.title}
                        />
                    ))
                }
            </div>
        </div>
     );
}

export default TeachPage;
