import ArrowRight from '../../../assets/img/arrow-right.svg'
const TeachCard = ({subtitle, img, title}) => {
    return ( 
        <div className="relative">
            <div className="rounded-3xl object-cover w-full h-full ">
                <img src={img} alt="Teach" className="rounded-xl"/>
            </div>
            <div className="absolute top-3 left-3 rounded-full bg-white">
                <p className="text-lg px-4 py-2 font-work-sans">{subtitle}</p>
            </div>
            <div className="flex justify-between items-center px-2">
                <p className="font-berlin text-xl">{title}</p>
                <img src={ArrowRight} alt="Arrow Right" />
            </div>
        </div>
     );
}
 
export default TeachCard;