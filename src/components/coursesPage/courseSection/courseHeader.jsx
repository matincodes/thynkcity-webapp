const courseHeader = (e) => {
  return (
    <div className="space-y-1 p-5 font-work-sans px-14">
      <span className="text-main-color font-medium text-[20px]">
        {e.spanTitle}
      </span>

      <h1 className="text-[36px] text-header-color font-bold tracking-normal">
        {e.title}
      </h1>

      <h2 className="text-[26px] text-header-color font-bold tracking-normal">
        {e.courses}
      </h2>

      <p className="text-[#667085] leading-6 font-normal">{e.paragraph}</p>
    </div>
  );
};

export default courseHeader;
