"use client";

import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { footerItems } from "@/constants";

export const Footer = () => {
  return (
    <footer>
      {/* 
        On mobile: stack columns (flex-col), reduce padding to avoid overflow.
        On md and above: use original layout (flex-row), larger padding.
      */}
      <div className="py-16 px-4 md:px-20 flex flex-col md:flex-row gap-8">
        <div className="md:mr-20">
          <div className="mb-5">
            <Image
              src="/genixdclogo.png"
              alt="Genix MEP Design Consultant Logo"
              width={80}
              height={80}
              className="mb-3"
            />
            <p className="text-[#292F36] text-[30px] leading-8 font-bold">
              <span>Genix MEP</span> <br />
              <span>Design Consultant</span>
            </p>
          </div>
          <p className="text-[#4D5053] leading-7 mb-5">
            It is a long established fact that a reader <br /> will be
            distracted lookings.
          </p>
          <div className="flex gap-x-8 items-center">
            <Link href="/">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={12}
                height={12}
              />
            </Link>
            <Link href="/">
              <Image
                src="/linkedin.svg"
                alt="Linked In"
                width={16}
                height={22}
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={17}
                height={23}
              />
            </Link>
          </div>
        </div>

        {/* Use flex-col on mobile so columns stack, avoiding horizontal overflow */}
        <div className="flex flex-col md:flex-row gap-6 flex-1 justify-evenly">
          {footerItems.map((el, index) => (
            <div key={index}>
              <p className="text-[#292F36] font-bold mb-6">{el.item}</p>
              <div className="flex flex-col gap-y-6 items-start">
                {el.subItems.map((sub, i) => (
                  <Link
                    key={i}
                    href={sub.link.toString()}
                    className="text-[#4D5053] uppercase border-b border-b-white hover:border-b-black"
                  >
                    {sub.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <p className="text-[#292F36] font-bold mb-6">Contact</p>
            <div className="text-[#4D5053] leading-7 flex flex-col gap-y-5">
              <span>
                No.204, 3-6-290/12/2 ,<br /> Old MLA quarters Road,
                <br /> Hyderguda, Hyderabad
                <br /> 500029{" "}
              </span>
              <a
                href="mailto:info.genixdc@gmail.com"
                className="border-b border-b-white hover:border-b-black"
              >
                info.genixdc@gmail.com
              </a>
              <span>+91-9032372607</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 border-t border-t-[#E5E5E5]">
        <p className="text-[#4D5053] pt-8 text-center">
          Copyright © Genix MEP Design Consultant, 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
};
