export const Introduce3 = () => {
  return (
    <div className="lg:w-full bg-gray-50">
      <div className="flex justify-center lg:w-full">
        <div className=" flex flex-col  gap-[48px] items-center lg:py-24 lg:px-20 py-16 px-4">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-gray-600 w-[105px] h-[28px]  rounded-lg border-2 bg-gray-200 flex justify-center ">
              Experience
            </h2>
            <h2 className="text-[#4B5563] text-[20px]">
              Here is a quick summary of my most recent experiences:
            </h2>
          </div>
          <div className=" p-4 rounded-xl gap-4  lg:gap-12 flex flex-col  h-auto bg-[#FFFFFF]  lg:py-8 lg:px-8">
            <div className="lg:flex items-start justify-start   gap-[48px] w-[210px]">
              <img src="./logo-upwork.png" alt="" />
            </div>
            <div className="flex flex-col-reverse gap-4 ">
              <div className="lg:flex flex-col justify-center w-[384px] gap-4">
                <h2 className="text-gray-900 text-[20px]  font-Inter font-semibold">
                  Sr.Frontend Developer
                </h2>
                <ul className="list-disc ml-5 flex flex-col gap-1 text-gray-600 font-normal">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li> Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-gray-700">Nov 2021 - Present</h2>
              </div>
            </div>
          </div>
          <div className=" gap-12 flex  h-auto bg-[#FFFFFF]  w-[896px] py-8 px-8">
            <div className="flex items-start justify-start   gap-[48px] w-[210px]">
              <img src="./logo-upwork.png" alt="" />
            </div>
            <div className="flex flex-col justify-center w-[384px] gap-4">
              <h2 className="text-gray-900 text-[20px]  font-Inter font-semibold">
                Team Lead
              </h2>
              <ul className="list-disc ml-5 flex flex-col gap-1 text-gray-600 font-normal">
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li> Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-700">Jul 2017 - Oct 2021</h2>
            </div>
          </div>
          <div className=" gap-12 flex  h-auto bg-[#FFFFFF]  w-[896px] py-8 px-8">
            <div className="flex items-start justify-start   gap-[48px] w-[210px]">
              <img src="./logo-upwork.png" alt="" />
            </div>
            <div className="flex flex-col justify-center w-[384px] gap-4">
              <h2 className="text-gray-900 text-[20px]  font-Inter font-semibold">
                Full Stack Developer
              </h2>
              <ul className="list-disc ml-5 flex flex-col gap-1 text-gray-600 font-normal">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-700">Nov 2021 - Present</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
