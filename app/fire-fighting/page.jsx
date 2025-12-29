import { IncludeServices } from "@/components/IncludeServices";
import Image from "next/image";

export const metadata = {
  title: "Fire Fighting Services",
  description: `At Genix MEP Design Consultant, we&apos;re dedicated to ensuring the safety and security
  of our communities through our comprehensive fire fighting services.
  With a team of highly trained professionals and state-of-the-art
  equipment, we are committed to preventing, managing, and extinguishing
  fires to protect lives and property.`,
};

const FireFightingPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image src="/ff1.png" alt="ff1" fill className="object-contain" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">
            Fire Fighting
          </h1>
          <p className="text-[#4D5053]">Home / Fire Fighting:</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <p className="text-xl leading-10 text-[#4D5053] mb-10 text-center">
          At Genix MEP Design Consultant, we&apos;re dedicated to ensuring the
          safety and security of our communities through our comprehensive fire
          fighting services. With a team of highly trained professionals and
          state-of-the-art equipment, we are committed to preventing, managing,
          and extinguishing fires to protect lives and property. The Fire
          Fighting team covers Fire hydrant and sprinkler systems, Wet & Dry
          Riser systems, Gas Suppression Systems, Fire extinguishers, Fire alarm
          and Voice Evacuation Systems We know where to plug in the system and
          thereby providing you the comfort working & Living Environment.
        </p>

        <div className="flex justify-center gap-x-24 items-center mb-16">
          <ul className="list-disc text-xl leading-10 text-[#4D5053]">
            <li>Fire alarm system</li>
            <li>Fire hose reel system</li>
            <li>Fire pump sets</li>
            <li>Fire extinguishers</li>
          </ul>
          <ul className="list-disc text-xl leading-10 text-[#4D5053]">
            <li>(DCP & CO2)</li>
            <li>Sprinkler system</li>
            <li>Dry/ wet riser valve system</li>
            <li>Emergency Lighting System</li>
          </ul>
        </div>

        <div className="text-[#4D5053] text-xl leading-10 flex flex-col gap-y-7 mb-28">
          <h4>Our Services</h4>

          <p>
            <span className="text-[#EB682C]">
              Fire Prevention and Risk Assessment:
            </span>
            Our experts conduct thorough assessments to identify potential fire
            hazards and develop strategies to minimize risks in residential,
            commercial, and industrial settings.
          </p>
          <p>
            <span className="text-[#EB682C]">
              Fire Suppression and Emergency Response:
            </span>
            We offer swift and effective emergency response services, utilizing
            the latest firefighting techniques and equipment to contain and
            extinguish fires promptly.
          </p>
          <p>
            <span className="text-[#EB682C]">Fire Safety Training:</span>
            Education is key to preventing fire-related emergencies. Our team
            provides tailored training programs to educate individuals and
            organizations on fire safety measures, evacuation procedures, and
            the proper use of fire extinguishing equipment.
          </p>
          <p>
            <span className="text-[#EB682C]">
              Fire Equipment Inspection and Maintenance:
            </span>
            Regular maintenance and inspection of fire safety equipment are
            crucial. We ensure that fire alarms, extinguishers, sprinkler
            systems, and other safety devices are in optimal working condition.
          </p>
          <p>
            <span className="text-[#EB682C]">
              Consultation and Compliance Services:
            </span>
            We provide consultation services to ensure compliance with local
            fire safety regulations and standards. Our team assists in
            developing fire safety plans and protocols.
          </p>
          <div>
            <p className="text-[#EB682C]">Get in Touch</p>
            <p>
              Whether you require fire prevention measures, emergency response
              services, or fire safety training, Genix MEP Design Consultant is
              here to help. Contact us today to discuss your fire safety needs
              and discover how we can safeguard your environment against fire
              hazards.
            </p>
          </div>
          <p>
            Feel free to tailor this content to better suit your company&apos;s
            unique services and mission.
          </p>
        </div>

        <div className="relative w-full h-[800px] mb-28">
          <Image src="/ff2.png" alt="ff2" fill className="object-contain" />
        </div>

        <IncludeServices />
      </div>
    </>
  );
};

export default FireFightingPage;
