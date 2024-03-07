import Arrow from "../../../assets/img/courses/course1.svg";
import Star from "../../../assets/img/courses/star.svg";

const card = (e) => {
  return (
    <div className="shadow-xl flex flex-col place-content-between p-4">
      <div className=" basis-[50%] overflow-hidden rounded-lg flex">
        <img src={e.image} alt="image" className="w-full object-cover" />
      </div>

      <div className="space-y-1 p-1 font-work-sans  flex flex-col">
        <span className="text-main-color font-medium text-[15px]">
          {e.title}
        </span>

        <h2 className="text-[19px] text-header-color font-bold tracking-normal flex place-content-between items-center">
          {e.courses}

          <img src={Arrow} className="w-[20px]" />
        </h2>

        <p className="text-[#667085] leading-6 font-normal">{e.paragraph}</p>

        <div className="flex space-x-2 items-center ">
          <span className="text-main-color font-medium text-[15px]">
            {e.rating}
          </span>

          {[...Array(5)].map((image, index) => (
            <img key={index} src={Star} alt="star" className="w-[16px]" />
          ))}
          <p className="text-[#969696]">({e.value})</p>
        </div>
      </div>

      <div className="p-5 px-0 flex  items-center place-content-between font-inter">
        <div className="flex items-center">
          <div className="w-[40px]  h-[40px] rounded-full grid">
            <img
              src={e.avatar}
              alt="Avatar Img"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className=" mx-2">
            <p className="text-[14px] text-[#101828] font-[500]">{e.name}</p>
            <p className="text-sm text-[#667085]">{e.number}</p>
          </div>
        </div>

        <h1 className=" text-[22px] font-bold tracking-wide text-main-color">
          {e.price}
        </h1>
      </div>
    </div>
  );
};

export default card;
