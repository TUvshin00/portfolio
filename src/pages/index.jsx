import {
  Header,
  Hero2,
  Introduce,
  Introduce2,
  Introduce3,
  Introduce4,
  End,
  End2,
} from "../components/index";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      {/* <Hero2 /> */}

      {/* <Introduce /> */}
      {/* <Introduce2 /> */}
      <Introduce3 />
      {/* <Introduce4 /> */}
      {/* <End />
      <End2 /> */}
    </div>
  );
}
