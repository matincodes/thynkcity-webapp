const Slider = () => {
  return (
    <div className="flex flex-col place-content-center items-center space-y-2 p-3">
      <div className=" p-4 flex items-center place-content-center space-x-[8px]">
        <span className="w-[40px] h-[10px] rounded-md bg-main-color"></span>
        <span className="w-[10px] h-[10px] rounded-full bg-[#D9D9D9]"></span>
        <span className="w-[10px] h-[10px] rounded-full bg-[#D9D9D9]"></span>
      </div>

      <a
        href="/"
        className="border border-[#D0D5DD] p-button rounded-lg bg-[#F9FAFB] mb-4"
      >
        Explore All Program
      </a>
    </div>
  );
};

export default Slider;
