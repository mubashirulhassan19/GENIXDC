import { mepServices2 } from "@/constants";
import Image from "next/image";

export const metadata = {
  title: "Plumbing Services",
  description: `Your home&apos;s plumbing system is an essential part of your daily
  life. From providing clean water for drinking and bathing to
  draining waste and sewage, your plumbing system works tirelessly
  behind the scenes to keep your home comfortable and functional.
  However, when plumbing problems arise, they can quickly disrupt your
  routine and cause significant inconvenience.`,
};

const PlumbingPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/plumbing1.png"
          alt="plumbing1"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">Plumbing</h1>
          <p className="text-[#4D5053]">Home / (PHE):</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <h2 className="text-[#EB682C] text-4xl font-semibold text-center mb-12">
          Expert Plumbing Services for Your Home
        </h2>

        <div className="text-[#4D5053] text-xl leading-10 mb-16">
          <p className="mb-6">
            Your home&apos;s plumbing system is an essential part of your daily
            life. From providing clean water for drinking and bathing to
            draining waste and sewage, your plumbing system works tirelessly
            behind the scenes to keep your home comfortable and functional.
            However, when plumbing problems arise, they can quickly disrupt your
            routine and cause significant inconvenience.
          </p>
          <p>
            At Genix MEP Design Consultant, we understand the importance of
            having a reliable and experienced plumber you can trust. We offer a
            comprehensive range of plumbing services to meet your needs, from
            routine maintenance and repairs to major installations and
            replacements. Our team of skilled and licensed plumbers is dedicated
            to providing you with the highest quality service and customer
            satisfaction.
          </p>
        </div>

        <div className="text-[#4D5053] text-xl leading-10 mb-16">
          <p className="mb-6">
            Our experienced & skilled plumbing team provides the cost-effective
            solutions for water & drainage systems according to the govt.
            authority requirements, building requirements and the plumbing
            standards.
          </p>
          <p>
            The very essential service in any type of building is the PHE. Our
            expert team handles projects with Internal and external pipe lines,
            drainage, water supply, RWH, RO and STP. The combination of
            Firefighting & PHE services enables us to provide the greatest
            advantage to all our customers as a single source and single point
            of contact for all their critical needs.
          </p>
        </div>

        <div>
          <ul className="list-disc text-xl leading-10 text-[#4D5053] ml-16">
            <li>Drinking water supplies</li>
            <li>Rainwater system</li>
            <li>Drainage Sanitary Appliances</li>
            <li>Surface water Collection Systems</li>
            <li>Irrigation Systems</li>
            <li>STP</li>
          </ul>
        </div>

        <div className="relative w-full h-[800px] mb-28">
          <Image
            src="/plumbing2.png"
            alt="plumbing2"
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

export default PlumbingPage;
