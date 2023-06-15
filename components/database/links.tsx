import Link from "next/link";
import React, { ComponentProps } from "react";
import { Button } from "../common";
import clsx from "clsx";

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Properties", link: "/properties" },
  { name: "Pages", link: "/pages" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

export function LinkList({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      {...props}
      className={clsx(
        "md:gap-[clamp(5px,2vw,2.5rem)] md:items-center",
        className
      )}
    >
      {links.map((item) => {
        const isCTA = item.name === "Contact";
        return (
          <Link
            key={item.name}
            className="hover:text-cetacean-blue text-quick-silver w-min"
            href={item.link}
          >
            {isCTA ? (
              <Button text={item.name} className="w-full md:w-auto px-12" />
            ) : (
              <li>{item.name}</li>
            )}
          </Link>
        );
      })}
    </ul>
  );
}
