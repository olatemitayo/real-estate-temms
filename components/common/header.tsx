import { SVGProps, useState } from "react";

import { LinkList } from "../database";
import clsx from "clsx";

type AvailableProps = "xmlns" | "width" | "height" | "viewBox";
type OmittedProps = Omit<SVGProps<SVGSVGElement>, AvailableProps>;

export function Close(props: OmittedProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
      ></path>
    </svg>
  );
}

export function Hamburger(props: OmittedProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M7.95 11.95h32m-32 12h32m-32 12h32"
      />
    </svg>
  );
}

function House(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5.063em"
      height="3.813em"
      fill="none"
      viewBox="0 0 81 61"
      {...props}
    >
      <path fill="#0A0B3B" d="M81 22.765L58.67.5 0 60.267h81V22.765z" />
      <path
        fill="#FFBB50"
        d="M81 35.452L58.67 13.187 11.45 60.267H81V35.452z"
      />
      <path
        fill="#fff"
        d="M57.893 32.85h-6.362v6.344h6.362V32.85zM66.165 32.85h-6.362v6.344h6.362V32.85zM57.893 41.098h-6.362v6.343h6.362v-6.343zM66.164 41.098h-6.362v6.343h6.362v-6.343z"
      />
      <path
        fill="#0A0B3B"
        d="M32.16 13.187l.285 24.023-10.147.081-.032-24.104h9.895z"
      />
    </svg>
  );
}

export function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between p-5 bg-white ">
      <div className="flex items-end gap-3.5">
        <House className="text-[clamp(6px,1vw,.75rem)]" />
        <h2 className="text-[clamp(1.25rem,1vw,2.25em)] font-bold text-jacarta leading-tight">
          ProperLand
        </h2>
      </div>
      <LinkList className="hidden md:flex" />
      <div className="relative md:hidden">
        <button
          onClick={() => setVisible(!visible)}
          className={clsx(
            "p-2 rounded-lg text-base",
            visible
              ? "bg-gray-200 text-cetacean-blue"
              : "hover:bg-gray-200 hover:text-cetacean-blue"
          )}
        >
          <Close
            className={clsx("duration-300", visible ? "scale-125" : "scale-0")}
          />
          <Hamburger
            className={clsx("duration-300", visible ? "scale-0" : "scale-125")}
          />
        </button>

        {visible && (
          <LinkList className="absolute grid gap-3 px-4 py-3 bg-white rounded-lg shadow-xl -right-5 top-12" />
        )}
      </div>
    </div>
  );
}
