export const Hero2 = () => {
  return (
    <div className="flex justify-center items-center h-[556px] w-[1440px]">
      <div className=" py-[96px] px-[80px] flex gap-[48px] ">
        <div>
          <h2 className="text-6xl  font-inter text-[#111827]">
            Hi, I’m Tom 👋
          </h2>
          <h3 className="w-[600px] h-[96px] mt-[10px] text-[#4B5563] text-[16px]">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </h3>
          <div className="gap-[8px] mt-[48px] flex  text-gray-600">
            <img src="./Icon copy.png" alt="" />
            <h2>Ulaanbaatar, Mongolia</h2>
          </div>
          <div className="flex gap-[8px]  text-gray-600">
            <img
              className="w-[8px] h-[8px] mt-[8px] ml-2"
              src="./icon-dot-emerald-500.png"
              alt=""
            />
            <h2 className="ml-2">Available for new projects</h2>
          </div>
          <div className="flex gap-[6px] mt-[48px]">
            <img src="./Icon Button copy 2.png" alt="" />
            <img src="./Icon Button.png" alt="" />
            <img src="./Icon Button copy.png" alt="" />
          </div>
        </div>
        <div className="w-[568px] flex justify-end ">
          <img className="h-[360px]" src="./tom.png" alt="" />
        </div>
      </div>
    </div>
  );
};
