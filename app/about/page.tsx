/* eslint-disable @next/next/no-img-element */
const page = () => {
  return (
    <div className=" text-white z-[-1] md:px-[160px] min-h-screen  max-w-screen md:pt-[180px] xs:pt-[100px] bg-[url('/backgroundcolorlandingpage.png')] bg-cover bg-center bg-no-repeat">
      <div className=" flex gap-[2rem] md:text-[1.375rem] text-[#a19f94] font-[eczar]">
        <div className=" relative">
          <img src="https://res.cloudinary.com/dteuj87u5/image/upload/v1741190024/myFoto_1_h3ri4p.png" alt="MyFoto" className=" md:w-[90rem]" />
          <div className=" h-[5rem] w-[100%] bottom-0 absolute bg-[linear-gradient(to_top,black_30%,transparent_60%)]"></div>
        </div>
        <div className=" flex flex-col gap-[2rem]">
          <h1 className=" md:mt-[5rem]">Nice to meet you all.</h1>
          <div>
            <p>Hi, I&apos;m Anak Agung, a passionate Full-Stack Developer with a strong interest in building scalable and efficient web applications. Currently, I&apos;m pursuing a degree in Information Systems, where I&apos;m deepening my knowledge of software development, databases, and system architecture.</p>
            <p>
              With experience in both front-end and back-end technologies, I enjoy crafting seamless user experiences while ensuring robust and optimized server-side performance. I&apos;m always eager to learn new technologies and stay up-to-date with industry trends to improve my skills and create innovative solutions. Let&apos;s build something
              amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
