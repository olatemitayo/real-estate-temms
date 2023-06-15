import Image from "next/image";

import { Header, HeroTitle } from "@/components";

function Opening() {
  return (
    <header
      style={{ backgroundImage: "url('/Company/aboutBg.svg')" }}
      className="px-[clamp(10px,5vw,16rem)] lg:px-[clamp(20px,10vw,16rem)] bg-center bg-no-repeat bg-cover"
    >
      <div className="grid gap-24 pt-24 pb-32 mx-auto max-w-[87.5rem]">
        <Header />
        <HeroTitle text="ABOUT PROPERLAND" heading="About Our Real Estate" />
      </div>
    </header>
  );
}

function About() {
  return (
    <>
      <Opening />

      {/* vintro section  */}
      <div className="w-[80%] mx-auto">
        <figcaption className="w-[40%] relative">
          <Image src="/Company/vintroImg.svg" alt="" fill />
        </figcaption>
        <div className="w-[60%]"></div>
      </div>
    </>
  );
}

export default About;
