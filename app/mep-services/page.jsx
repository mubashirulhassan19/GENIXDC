import { mepServices2 } from "@/constants";
import Image from "next/image";

export const metadata = {
  title: "MEP SERVICES",
  description: `Genix MEP Design Consultant renders MEP focused services to various sectors like
  Education, Health care, Banks, Sports club, Real estate, Shopping
  malls etc., by efficiently maintaining their facilities. We have
  technical experts who are most experienced in similar industries.
  Our aim is to provide high standards of quality engineering services
  as the best MEP Consultant.`,
};

const MepServices = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/mepservices1.png"
          alt="services"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">MEP</h1>
          <p className="text-[#4D5053]">Home / MEP SERVICES:</p>
        </div>
      </div>

      <div className="max-w-[1200px] px-3 mx-auto">
        <div className="text-2xl leading-[45px] mb-16">
          <p className="text-[#CDA274]">
            As a MEP Consultant, Genix MEP Design Consultant is comprised of
            professionals with comprehensive experience specialized in MEP
            installation, operations and maintenance.
          </p>
          <p className="text-[#4D5053] mb-16">
            Genix MEP Design Consultant renders MEP focused services to various
            sectors like Education, Health care, Banks, Sports club, Real
            estate, Shopping malls etc., by efficiently maintaining their
            facilities. We have technical experts who are most experienced in
            similar industries. Our aim is to provide high standards of quality
            engineering services as the best MEP Consultants. Electrical, Low
            Current, Drainage, Water Supply, Fire Alarm, Fire Fighting, LPG, and
            HVAC for Residential & Industrial buildings
          </p>
          <p className="text-[#4D5053]">
            MEP services are essential to the design and operation of all types
            of buildings, from residential to commercial to industrial. MEP
            engineers design and implement the systems that provide heating,
            ventilation, air conditioning, plumbing, lighting, power, and fire
            protection. Comfort and safety: MEP systems play a vital role in
            providing a comfortable and safe environment for building occupants.
            For example, HVAC systems regulate indoor temperature and humidity,
            while fire protection systems help to prevent and extinguish fires.
            Efficiency and sustainability: MEP systems can help to improve the
            energy efficiency and sustainability of buildings. For example,
            variable speed drives can be used to reduce the energy consumption
            of HVAC systems, while solar panels can be used to generate
            electricity on-site. Compliance: MEP systems must comply with a
            variety of codes and regulations. MEP engineers ensure that the
            systems they design meet all applicable requirements
          </p>
        </div>

        <div className="relative h-[900px] w-full mb-16">
          <Image
            src="/mepservices2.png"
            alt="mep services"
            fill
            className="object-cover"
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

export default MepServices;
