const page = () => {
  return (
    <div className="text-white max-w-screen min-h-screen z-[-1] mt-[100px] flex">
      <div></div>
      <div className=" px-[160px] bg-white w-full">
        <div className=" flex flex-col text-[50px] font-[eczar] mt-[200px] w-full text-[#a19f94] font-bold">
          <span>Let&apos;s build something great</span>
          <span>Create a project with us today</span>
        </div>
        <div className=" w-full bg-[url('/backgroundcolorabout.jpg')] h-[300px] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default page;
