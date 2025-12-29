import { mepServices2 } from "@/constants";
import Image from "next/image";

export const metadata = {
  title: "Electrical Services",
  description: `We are one of the leading electrical services providers in south
  Asia, we believe in assisting our clients in designing,
  coordinating, and executing projects varying in size and scope. Genix MEP Design Consultant
  takes pride in extending its in-house capabilities to the
  electrification system domain as an elite Class I Consultant.`,
};

const ElectricalPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/electrical1.png"
          alt="electrical"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">ELECTRICAL</h1>
          <p className="text-[#4D5053]">Home / Electrical:</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <div className="text-[#4D5053] text-2xl leading-10 mb-24">
          <p className="mb-2">
            We are one of the leading electrical services providers in south
            Asia, we believe in assisting our clients in designing,
            coordinating, and executing projects varying in size and scope.
            Genix MEP Design Consultant Power takes pride in extending its
            in-house capabilities to the electrification system domain as an
            elite Class I Consultant.
          </p>
          <p className="mb-2">
            Our Electrical division is an independent business vertical
            functioning across South India, catering to the HT and LT
            requirements of our clients in the residential, commercial,
            hospitality and industrial segments. We at Genix MEP Design
            Consultant have execution capabilities for solutions in HT, LT, DG,
            UPS/Inverter and ELV Systems to address requirements across
            industries.
          </p>
          Our team of electrical engineers provides the best solution for less
          energy consumption and right light distribution to all areas. The team
          manages the end-to-end activities related to electrical includes DB
          dressing, load schedule preparations and the drawings for authority
          approvals.
        </div>

        <div className="text-[#4D5053] text-2xl leading-10 mb-24">
          <ul className="list-disc ml-16">
            <li>H.V. & L.V. Transformers.</li>
            <li>Switchgears.</li>
            <li>Laying & Termination of H.V. Cables.</li>
            <li>Testing of Transformer, Relays & Cables.</li>
            <li>Digital Fault monitor & recorders etc.</li>
            <li>
              Small power and lighting works for Industrial and Commercial
              buildings.
            </li>
            <li>
              Internal and External lighting Plant lighting, Emergency lighting.
            </li>
          </ul>
        </div>

        <div className="relative w-full h-[600px] mb-28">
          <Image
            src="/electrical2.png"
            alt="electrical"
            fill
            className="object-contain"
          />
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

export default ElectricalPage;
