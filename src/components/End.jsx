export const End = () => {
  return (
    <div className="max-w-[1440px] max-h-[560px]">
      <div className="lg:py-24 lg:px-20 px-4 py-16 flex flex-col gap-6">
        <div className="flex flex-col items-center  gap-[16px]">
          <h2 className=" flex justify-center text-gray-600 w-[105px] h-[28px]  rounded-lg border-2 bg-gray-200">
            Get in touch
          </h2>
          <h2 className="text-gray-600 font-normal text-[20px] max-w-[500px] max-h-[56px]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </h2>
        </div>
        <div className="flex justify-center flex-col gap-2 ">
          <div className="flex justify-center gap-[20px] mt-[48px]">
            <img
              className="lg:size-[30px] size-[24px]"
              src="./Icon copy 3.png"
              alt=""
            />
            <h2 className="font-semibold text-base lg:text-4xl ">
              tom@pinecone.mn
            </h2>
            <img
              className="size-[24px] lg:size-[35px] "
              src="./Icon Button copy 3.png"
              alt=""
            />
          </div>
          <div className="flex justify-center gap-[20px]">
            <img
              className="lg:size-[30px]  size-[24px]"
              src="./Icon copy 4.png"
              alt=""
            />
            <h2 className="font-semibold text-base lg:text-4xl">
              +976 88112233
            </h2>
            <img
              className="lg:size-[35px] size-[24px] "
              src="./Icon Button copy 3.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center flex-col gap-2 ">
          <div>
            <h2 className="text-base text-gray-400 ">
              You may also find me on these platforms!
            </h2>
          </div>
          <div className="flex mt-[8px]">
            <img src="./Icon Button copy 2.png" alt="" />
            <img src="./Icon Button.png" alt="" />
            <img src="./Icon Button copy.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
