"use client";

import Container from "@/components/layout/page-layout";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const IMAGES = [
  {
    id: 1,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 2,
    src: "/home/png/transporting-meeting2.png",
  },
  {
    id: 3,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 4,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 5,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 6,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 7,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 8,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 9,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 10,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 11,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 12,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 13,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 14,
    src: "/home/png/transporting-meeting1.png",
  },
  {
    id: 15,
    src: "/home/png/transporting-meeting1.png",
  },
];

const TransportingRenderImages = ({
  visible,
}: {
  visible: number;
  setVisible: (val: number) => void;
}) => {
  return (
    <ul
      className={cn(
        "grid grid-cols-5 gap-3 transition-all duration-500",
        visible > 5 ? "translate-y-0" : "-translate-y-40"
      )}
    >
      {IMAGES?.slice(0, visible)?.map(({ id, src }) => (
        <li
          key={id}
          className={cn("mx-auto relative", {
            "before:h-full before:w-full before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-t before:from-[#091242] before:via-[#3C3C3C00] before:before:to-transparent":
              visible <= 5,
          })}
        >
          <Image
            src={src}
            alt="transporting section img"
            width={215}
            height={273}
          />
        </li>
      ))}
    </ul>
  );
};

const Transporting = () => {
  const [visible, setVisible] = useState(5);

  return (
    <div className="space-y-48">
      <h2 className="font-semibold text-4xl text-center">
        Transporting Across The World
      </h2>

      <div
        className={cn(
          "p-10 bg-gradient-to-r from-dark-blue via-[#384572] to-dark-blue space-y-12"
        )}
      >
        <Container className="space-y-10">
          <TransportingRenderImages visible={visible} setVisible={setVisible} />
          <button
            className={cn(
              "text-base font-semibold text-dark-blue py-5 px-14 bg-white rounded-lg block mx-auto transition-all duration-500",
              visible > 5 ? "translate-y-0" : "-translate-y-32"
            )}
            onClick={() =>
              setVisible(visible === IMAGES?.length ? 5 : IMAGES?.length)
            }
          >
            {visible === IMAGES?.length ? "Less work" : "More work"}
          </button>
        </Container>
      </div>
    </div>
  );
};

export default Transporting;
