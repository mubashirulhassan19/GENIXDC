import { mepServices2 } from "@/constants";
import Image from "next/image";

export const metadata = {
  title: "HVAC",
  description: ` Our Air-Conditioning Team works for multiple applications viz.
  comfort cooling systems, process cooling, clean rooms, Labs, Data
  Centre&apos;s, General & basement ventilation, exhaust,
  pressurization of staircase, etc.`,
};

const HvacPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image src="/hvac1.png" alt="hvac" fill className="object-contain" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">HVAC</h1>
          <p className="text-[#4D5053]">Home / HVAC:</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <div className="text-[#4D5053] text-xl mb-12 leading-10">
          <p className="mb-6">
            Our Air-Conditioning Team works for multiple applications viz.
            comfort cooling systems, process cooling, clean rooms, Labs, Data
            Centre&apos;s, General & basement ventilation, exhaust,
            pressurization of staircase, etc.
          </p>
          <p className="mb-6">
            Genix MEP Design Consultant Team, with its dedicated team
            experienced in Planning and Project Execution offers complete
            solution to every single client across the Nation.{" "}
          </p>
          <p className="mb-6">
            Our infrastructure along with Technical Capability, meet any
            challenges and thereby provide seamless services and sustainable
            solutions.{" "}
          </p>
          <p className="mb-6">
            We provide complete HVAC Solutions for various Industries:
            Residential, Commercial, Institutional, Medical, IT & Non-IT,
            Industrial projects, Health Sector, Corporates, Retail and
            Hospitality Industries.
          </p>
        </div>

        <div>
          <ul className="text-xl text-[#4D5053] leading-10 list-disc ml-16 mb-28">
            <li>HVAC – Heating, Ventilation & Air Conditioning</li>
            <li>
              Air Conditioning System like chillers, Fan Coil Unit, Handling
              Units & Package Units
            </li>
            <li>
              Ducted Split Units and Decorative Split Units for Residential &
              Commercial Buildings and Hospitals & Shopping Malls
            </li>
          </ul>
        </div>

        <div className="relative w-full h-[800px] mb-28">
          <Image src="/hvac2.png" alt="hvac2" fill className="object-contain" />
        </div>

        <div className="mb-28">
          <div className="flex justify-center gap-x-6">
            {mepServices2.map((el, index) => (
              <div
                key={index}
                className={
                  index === 0 ? "border-r-2 border-r-[#CDA274] pr-16" : "pl-16"
                }
              >
                <h3 className="text-[#292F36] font-bold text-4xl mb-4">
                  {el.heading}
                </h3>
                <div className="flex flex-col gap-y-4">
                  {el.texts.map((subEl, i) => (
                    <div key={i} className="text-lg flex gap-x-4">
                      <span className="text-[#CDA274]">{i + 1}</span>
                      <span className="text-[#4D5053]">{subEl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-28">
          <h3 className="text-[#292F36] font-bold text-4xl text-center leading-10 mb-8">
            We love Art of work. <br />
            That&apos;s how we got here.
          </h3>
          <p className="text-[#4D5053] text-xl text-center mb-8">
            It is a long established fact that a reader will be <br />{" "}
            distracted by the of readable content .
          </p>
          <div className="flex justify-center">
            <button className="focus:outline-none bg-[#292F36] text-white uppercase flex gap-x-4 items-center px-8 py-4 rounded-xl">
              Get In Touch{" "}
              <Image
                src="/arrow-right.svg"
                alt="Arrow Right"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HvacPage;
