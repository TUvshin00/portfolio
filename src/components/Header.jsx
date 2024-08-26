import { HeaderButton } from "./HeaderButton/Index.jsx";
import { MenuIcon, SunIcon } from "./svg/Index.jsx";

export const Header = () => {
  return (
    <main className="w-full lg:max-w-[1280px] lg:w-full">
      <div className="lg:container lg:px-[80px] lg:py-[16px] p-4 ">
        <div className="px-8">
          <div className="flex items-center justify-between ">
            <div className="text-gray-900 font-normal text-[30px]">Tuvshin</div>
            <div className="">
              <div className="lg:flex items-center gap-6 hidden">
                <HeaderButton text={"About"} />
                <HeaderButton text={"Work"} />
                <HeaderButton text={"Testimonials"} />
                <HeaderButton text={"Contact"} />
                <div className="w-[1px] h-6 border border-solid bg-gray-100"></div>
                <div className="flex gap-6">
                  <SunIcon />
                  <button className="py-[6px] px-4 flex justify-center items-center gap-2 rounded-xl bg-gray-900">
                    <p className="text-base text-gray-50 font-medium">
                      Download CV
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <MenuIcon />
          </div>
        </div>
      </div>
    </main>
  );
};
