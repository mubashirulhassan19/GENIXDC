"use client";

import { motion } from "framer-motion";
import {
  clients,
  followOur,
  howWeWork,
  industries,
  sliderImages,
} from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const RootPage = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative md:mt-[-128px] mt-0 mb-16 flex overflow-hidden">
        {sliderImages.map((el, index) => (
          <motion.div
            key={index}
            initial={{ x: `${slide * 100}%` }}
            animate={{ x: `-${slide * 100}%` }}
            transition={{ duration: 1 }}
            className="relative h-[50vh] w-full md:h-[100vh] md:w-[100vw] flex-shrink-0"
          >
            <Image
              src={el}
              alt="Slider Images"
              fill
              className="z-[1] object-cover rounded-[0_0_150px_150px]"
            />
          </motion.div>
        ))}

        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center">
          Genix MEP Design Consultant
        </h1>
      </section>

      <div className="px-3 max-w-[1200px] mx-auto">
        <section className="mb-32">
          <div className="text-[#101010] font-bold flex flex-col items-center text-center mb-16">
            <h2 className="text-[30px] mb-6">
              Genix MEP Design Consultant is simply awesome in MEP work
            </h2>
            <p className="text-xl max-w-5xl">
              Genix MEP Design Consultant provides quality and comprehensive
              services for commercial AND RESIDENTIAL BUILDING MECHANICAL,
              ELECTRICAL AND PLUMBING SYSTEMS AT AFFORDABLE RATES. WHETHER
              YOU’RE AN ARCHITECT DESIGNING A NEW BUILDING, OR YOU’RE A
              MUNICIPALITY LOOKING TO UPDATE YOUR CURRENT FACILITIES, Genix MEP
              Design Consultant's TEAM OF EXPERIENCED WILL MAXIMIZE YOUR PROJECT
              COST, PROVIDING YOU WITH EFFICIENT, ATTRACTIVE SYSTEMS.
            </p>
          </div>

          {/* Switch to a column layout on smaller screens */}
          <div className="flex flex-col-reverse md:flex-row gap-6">
            <div className="md:flex-[0_0_55%]">
              <h3 className="text-[#101010] text-3xl mb-5 font-bold">
                OVERVIEW
              </h3>

              <div>
                <p className="mb-5">
                  WE ARE A CLIENT-ORIENTED CONTRACTING COMPANY AND FOLLOWING
                  COMPLETION OF THE PROJECT. THROUGH OUR OPERATIONS, WE PROVIDE
                  INTEGRATED SHOP DESIGN & BUILD MEP SERVICES, SMOOTH
                  FUNCTIONALITY AND EFFICIENCY FROM START TO FINISH. FROM
                  MECHANICAL, ELECTRICAL AND PLUMBING (MEP), Genix MEP Design
                  Consultant CONTINUES TO BE AT THE HELM, DRIVING THE MARKET
                  FORWARD THROUGH OUR PEOPLE, PASSION AND INNOVATION.
                </p>
                <p>
                  OUR MANAGEMENT TEAM IS QUICK TO ADJUST TO THE DEVELOPMENT OF
                  NEW TECHNOLOGIES, WHILE OUR SOFTWARE MANAGEMENT AND PERSONNEL
                  TRAINING PROCEDURES ENSURE BOTH OUR OPERATIONS AND ENGINEERING
                  OPERATIVES HAVE THE NECESSARY TOOLS TO COPE WITH THE DEMANDS
                  OF A MODERN DAY BUILDING. WE UNDERTAKE A FULL RANGE OF
                  MECHANICAL, ELECTRICAL AND PLUMBING INSTALLATIONS INCLUSIVE OF
                  SHOP DESIGN. THE COMPANY SPECIALIZES IN PROVIDING SOLUTIONS
                  WHICH COMPLY WITH THE CLIENT&apos;S SPECIFIC NEEDS
                </p>
              </div>
            </div>

            {/* On mobile, this image will appear above the text.
          On md+, it stays on the right side. */}
            <div className="relative h-[378px] md:flex-[0_0_45%]">
              <Image src="/home1.png" alt="Home 1" fill />
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[#363B41] text-4xl font-bold mb-3">
              How We Work
            </h2>
            <p className="text-[#4D5053] text-balance text-lg">
              It is a long established fact will be distracted.Lorem Ipsum is
              simply dummy text of <br /> the printing and typesetting industry.
            </p>
          </div>
        </section>

        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[#363B41] text-4xl font-bold mb-3">
              Follow Our
            </h2>
            <p className="text-[#4D5053] text-balance text-lg">
              It is a long established fact that a reader will be distracted by
              the of readable <br /> content of page lookings at its layouts
              points.
            </p>
          </div>

          <div className="flex flex-wrap gap-y-8 md:gap-x-8 md:gap-y-16 justify-center md:justify-between mb-28">
            {followOur?.map((el, index) => (
              <div
                key={index}
                className="w-full md:w-[30%] max-w-[300px] md:max-w-none"
              >
                <div className="mb-4 h-[250px] w-full md:w-[300px] relative">
                  <Image src={el.img} alt={el.text} fill />
                </div>
                <div className="flex justify-between items-center text-[#292F36] font-semibold text-2xl">
                  <p>{el.text}</p>
                  <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden bg-[#F4F0EC] flex items-center justify-center">
                    <Image
                      src="/chevron-right.png"
                      alt="Chevron Right"
                      width={6}
                      height={6}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-[#363B41] text-4xl font-bold mb-3 text-center">
              Clients
            </h2>
            <div className="flex gap-8 flex-wrap items-center justify-between">
              {clients.map((el, index) => (
                <Image
                  src={el}
                  alt="Clients"
                  key={index}
                  width={100}
                  height={50}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RootPage;
