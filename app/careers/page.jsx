import { Form } from "@/components/Form";
import Image from "next/image";

export const metadata = {
  title: "Genix MEP Design Consultant",
  description: ` At Genix MEP Design Consultant we believe that our most important resource is our
    employees and we aim to build a challenging and rewarding work
    environment where competent people can develop and utilize their
    full potential to achieve the Company’s as well as their own
    goals.`,
};

const CareersPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/careers1.png"
          alt="careers1"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">Careers</h1>
          <p className="text-[#4D5053]">Home / Careers:</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <div className="mb-28">
          <h2 className="text-center text-5xl font-bold mb-8">
            Our Culture: Why Genix MEP Design Consultant?
          </h2>

          <div className="text-center text-xl leading-10">
            <p>
              At Genix MEP Design Consultant we believe that our most important
              resource is our employees and we aim to build a challenging and
              rewarding work environment where competent people can develop and
              utilize their full potential to achieve the Company&apos;s as well
              as their own goals.
            </p>
            <p>
              We are always looking for highly skilled, committed and
              enthusiastic people to join our workforce and in return, we offer
              an opportunity to develop your skills by working on some of the
              most prestigious construction and infrastructure projects underway
              in the Telangana.
            </p>
          </div>
        </div>

        <Form />
      </div>
    </>
  );
};

export default CareersPage;
