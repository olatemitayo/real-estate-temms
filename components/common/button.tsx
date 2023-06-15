import clsx from "clsx";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
}

export function Button({ text, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-[#3B3A5E] text-white px-[25px] py-[8px] rounded-md",
        className
      )}
    >
      {text}
    </button>
  );
}
