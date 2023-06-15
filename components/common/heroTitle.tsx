import clsx from "clsx";

interface HeroTitleProps {
  text?: string;
  heading?: string;
}

export function HeroTitle({ text, heading }: HeroTitleProps) {
  return (
    <div>
      <div className="grid gap-5 ">
        <div
          className={clsx(
            "flex items-center justify-center self-start gap-2 max-w-max",
            "bg-gradient-to-r from-[#F3D1C1] to-[#FFB28D] px-[10px] py-[5px]"
          )}
        >
          <img src="/Icons/home.svg" alt="" />
          <h5 className="text-[#B16642] ">{text}</h5>
        </div>
        <h1 className="text-[#3B3A5D] text-h1 font-bold max-w-[32rem] ">
          {heading}
        </h1>
      </div>
    </div>
  );
}
