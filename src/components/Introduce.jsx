export const Introduce = () => {
  return (
    <div className="w-full bg-gray-50 flex justify-center">
      <div className="w-[1440px] h-[826px] py-[96px] px-[80px] ml-[32px]">
        <div className="flex justify-center ">
          <h2 className="text-gray-600 w-[105px] h-[28px] rounded-lg border-2 bg-gray-200 flex justify-center ">
            About Me
          </h2>
        </div>
        <div className="flex  justify-between gap-[200px] mt-[100px] ">
          <img className="w-[584] h-[588px]" src="./tommy.png" alt="" />
          <div>
            <h2 className=" text-[#111827] font-semibold text-3xl">
              Curious about me? Here you have it:
            </h2>
            <h2 className="  text-[#4B5563]">
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code. Since starting my
              web development journey in 2015,.
            </h2>
            <h2>
              I've embraced challenges and kept up with the latest tech trends.
              Now in my early thirties, seven years in, I'm building
              cutting-edge web apps using Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase, and more. With a progressive mindset, I
              enjoy the entire product development process, from ideation to
              execution. Off duty, you'll find me on Twitter, tracking startup
              journeys, or unwinding. Follow me for tech insights and public
              project updates on Twitter or GitHub
            </h2>
            <h2>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
