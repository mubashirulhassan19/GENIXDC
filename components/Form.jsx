"use client";

import Image from "next/image";
import { useState } from "react";

export const Form = () => {
  const [details, setDetails] = useState({
    name: "",
    product: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!details.name || !details.email || !details.product) {
      return;
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    const data = await response.json();

    setDetails({
      name: "",
      product: "",
      email: "",
      phone: "",
      description: "",
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <h2 className="text-5xl font-bold text-[#292F36] text-center mb-28">
        We love meeting new people <br /> and helping them.
      </h2>

      <div className="flex gap-8 mb-28">
        <div className="bg-[#F4F0EC] shrink-0 flex-[0_0_30%] rounded-[50px] p-8 flex flex-col gap-8">
          <div className="flex gap-6 items-center">
            <div className="bg-white rounded-full overflow-hidden p-2">
              <Image
                src="/envelope.svg"
                alt="envelope"
                width={24}
                height={24}
              />
            </div>
            <p className="text-[#4D5053]">info.genixdc@gmail.com</p>
          </div>
          <div className="flex gap-6 items-center">
            <div className="bg-white rounded-full overflow-hidden p-2">
              <Image src="/phone.svg" alt="phone" width={24} height={24} />
            </div>
            <p className="text-[#4D5053]">
              +91-9032372607 <br />
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <div className="bg-white rounded-full overflow-hidden p-2">
              <Image src="/globe.svg" alt="globe" width={24} height={24} />
            </div>
            <p className="text-[#4D5053]">genixdc.com</p>
          </div>
          <div className="flex justify-start gap-x-8 items-center mb-10">
            <Image src="/facebook.svg" alt="facebook" width={16} height={16} />
            <Image src="/linkedin.svg" alt="linkedin" width={20} height={20} />
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />
          </div>
        </div>

        <div className="flex-1">
          <form>
            <div className="flex flex-wrap gap-x-4 justify-center mb-16">
              <input
                className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[45%] placeholder:text-[#777] placeholder:font-medium text-xl px-2 py-4"
                placeholder="Name"
                value={details.name}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />
              <input
                className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[45%] placeholder:text-[#777] placeholder:font-medium text-xl px-2 py-4"
                placeholder="Product interested in"
                value={details.product}
                onChange={(e) =>
                  setDetails({ ...details, product: e.target.value })
                }
              />
              <input
                className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[45%] placeholder:text-[#777] placeholder:font-medium text-xl px-2 py-4 mt-8"
                placeholder="Email"
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
              <input
                className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[45%] placeholder:text-[#777] placeholder:font-medium text-xl px-2 py-4 mt-8"
                placeholder="Phone"
                value={details.phone}
                onChange={(e) =>
                  setDetails({ ...details, phone: e.target.value })
                }
              />
              <input
                className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[93%] placeholder:text-[#777] placeholder:font-medium text-xl mt-16 px-2 py-4"
                placeholder="Hello, I'm interested in..."
                value={details.description}
                onChange={(e) =>
                  setDetails({ ...details, description: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                className="focus:outline-none bg-[#000] rounded-xl px-12 py-5 text-white flex gap-3 items-center"
                onClick={handleSubmit}
              >
                Send Now
                <Image
                  src="/arrow-right.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
