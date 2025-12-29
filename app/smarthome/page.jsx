import Image from "next/image";

export const metadata = {
  title: "Smart Home Automation",
  description: `Genix MEP Design Consultant aims to ﬁll the void of smart automation in their customer lives.
  We offer smart retroﬁt solutions which bring efﬁciency, security,
  accessibility and affordability. In combination with those beneﬁts, we
  bring comfort, convenience and luxury to every home, corporate ofﬁce
  or hospitality, be it a new or pre-constructed building.`,
};

const SmarthomePage = () => {
  return (
    <>
      <section className="mt-[-128px] mb-16 relative h-[100vh] w-full flex items-center justify-center">
        <Image src="/sh1.png" alt="Smart Home" fill className="z-1" />
        <h1 className="text-white text-9xl font-bold z-20">
          Smart Home <br /> Automation
        </h1>
      </section>

      <div className="max-w-[1200px] mx-auto px-3">
        <p className="text-xl leading-10 text-[#2B2B2B] text-center mb-16">
          Genix MEP Design Consultant aims to ﬁll the void of smart automation
          in their customer lives. We offer smart retroﬁt solutions which bring
          efﬁciency, security, accessibility and affordability. In combination
          with those beneﬁts, we bring comfort, convenience and luxury to every
          home, corporate ofﬁce or hospitality, be it a new or pre-constructed
          building.
        </p>

        <section className="mb-28">
          <h2 className="text-[#101010] font-bold text-center text-2xl mb-10">
            Transform Your Living Space with Smart Home Automation
          </h2>

          <div className="text-lg leading-10">
            <p>
              In today&apos;s fast-paced world, convenience and efficiency are
              essential. That&apos;s why smart home automation is becoming
              increasingly popular among homeowners. With smart home automation,
              you can control your lights, locks, thermostat, and other devices
              using your smartphone, tablet, or voice commands.
            </p>
            <p>Benefits of Smart Home Automation:</p>
            <ul className="list-disc ml-10">
              <li>Convenience: Control your home from anywhere at any time.</li>
              <li>
                Security: Enhance the security of your home with smart locks,
                cameras, and sensors.
              </li>
              <li>
                Energy Efficiency: Save money on your energy bills by automating
                your lighting and thermostat.
              </li>
              <li>
                Peace of Mind: Enjoy peace of mind knowing that your home is
                secure and under control.
              </li>
            </ul>
          </div>
        </section>

        <section className="relative h-[600px] w-full">
          <Image
            src="/sh2.png"
            alt="Smart Home"
            fill
            className="object-contain"
          />
        </section>

        <section className="mb-28">
          <h2 className="text-[#4D5053] font-bold text-center text-3xl mb-10">
            Our Smart Home Automation Services:
          </h2>
          <div className="text-lg leading-10">
            <p>
              We offer a comprehensive range of smart home automation services
              to meet your specific needs. Our services include
            </p>
            <ul className="list-disc ml-10">
              <li>
                Smart Home System Installation: We will professionally install
                your smart home system and ensure it is working properly.
              </li>
              <li>
                Smart Device Integration: We will integrate your existing smart
                devices into your smart home system.
              </li>
              <li>
                Custom Programming: We can create custom automations to suit
                your lifestyle.
              </li>
              <li>
                Remote Monitoring and Support: We offer 24/7 remote monitoring
                and support to ensure your smart home system is always running
                smoothly.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="relative h-[600px] w-full bg-[#E7E7E7] mb-28">
        <Image
          src="/sh3.png"
          alt="Smart Home"
          fill
          className="object-contain"
        />
      </section>

      <div className="max-w-[1200px] mx-auto px-3">
        <section className="mb-28">
          <p className="text-xl leading-10 text-[#2B2B2B] text-center mb-16">
            Genix MEP Design Consultant aims to ﬁll the void of smart automation
            in their customer lives. We offer smart retroﬁt solutions which
            bring efﬁciency, security, accessibility and affordability. In
            combination with those beneﬁts, we bring comfort, convenience and
            luxury to every home, corporate ofﬁce or hospitality, be it a new or
            pre-constructed building.
          </p>
          <h2 className="text-[#4D5053] font-bold text-center text-3xl mb-10">
            Partner with Us for a Seamless Smart Home Transition
          </h2>
          <p className="text-xl leading-10 text-[#2B2B2B] text-center mb-16">
            Let us guide you through the process of transforming your home into
            a modern smart haven. Our experienced team will assess your needs,
            provide expert recommendations, and install your chosen smart home
            devices with precision and care.
          </p>
        </section>
      </div>

      <section className="relative h-[800px] w-full mb-28">
        <Image src="/sh4.png" alt="Smart Home" fill className="object-cover" />
      </section>

      <div className="max-w-[1200px] mx-auto px-3">
        <div className="relative flex gap-x-8 justify-between mb-28 h-[600px] items-center">
          <p className="flex-[0_0_50%] text-[#2B2B2B] leading-10 text-xl">
            In today&apos;s fast-paced world, we all seek ways to simplify our
            lives and make our homes more comfortable, secure, and
            energy-efficient. <br />
            Smart Living solutions offer a range of innovative technologies that
            can transform your home into a haven of convenience,
            personalization, and peace of mind.
          </p>
          <div className="relative flex-[0_0_50%] h-full">
            <Image
              src="/sh5.png"
              alt="Smart Home"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <section>
          <h2 className="text-[#4D5053] font-bold text-center text-3xl mb-10">
            Smart Hospitality : Elevate Your Guest Experience
          </h2>

          <div className="relative flex gap-x-8 justify-between mb-28 h-[600px] items-center">
            <div className="relative flex-[0_0_50%] h-full">
              <Image
                src="/sh6.png"
                alt="Smart Home"
                fill
                className="object-contain"
              />
            </div>
            <p className="flex-[0_0_50%] text-[#2B2B2B] leading-10 text-xl text-right">
              Competitive hospitality landscape, providing exceptional guest
              experiences and maximizing operational efficiency is crucial for
              success. <br /> Smart hospitality services leverage cutting-edge
              technology and data-driven insights to transform your hotel or
              resort into a haven of personalized comfort and streamlined
              operations.
            </p>
          </div>
        </section>

        <div className="text-xl text-[#2B2B2B] leading-10 -mt-20 mb-28">
          <p>Benefits of Smart Hospitality Services:</p>
          <ul className="list-disc ml-10">
            <li>Increased guest satisfaction and loyalty</li>
            <li>Enhanced operational efficiency and cost savings</li>
            <li>Improved revenue generation and profitability</li>
            <li>Strengthened brand reputation and competitive advantage</li>
          </ul>
        </div>

        <section>
          <h2 className="text-[#4D5053] font-bold text-center text-3xl mb-10">
            Elevate Your Workplace with Smart Office Solutions
          </h2>
          <div className="relative flex gap-x-8 justify-between mb-28 h-[600px] items-center -mt-20">
            <p className="flex-[0_0_50%] text-[#2B2B2B] leading-10 text-xl">
              Dynamic business landscape, staying ahead of the curve requires a
              workplace that empowers your team and adapts to your evolving
              needs. That&apos;s where our smart office solutions come in. We
              provide a comprehensive suite of technology-driven services that
              transform your office space into a hub of efficiency,
              collaboration, and innovation.
            </p>
            <div className="relative flex-[0_0_50%] h-full">
              <Image
                src="/sh7.png"
                alt="Smart Home"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <div className="text-xl text-[#2B2B2B] leading-10 -mt-20 mb-28">
          <p>Our Smart Office Services:</p>
          <ul className="list-disc ml-10">
            <li>
              Smart Workspace Design: We create functional and aesthetically
              pleasing office environments that foster creativity and
              productivity.
            </li>
            <li>
              Smart Building Automation: We implement intelligent systems to
              control lighting, temperature, and other building parameters for
              optimal comfort and energy savings.
            </li>
            <li>
              Smart Meeting Room Management: We equip meeting rooms with
              advanced technology to enhance collaboration and streamline
              presentations.
            </li>
            <li>
              Smart Security and Access Control: We safeguard your premises with
              state-of-the-art security systems and access control measures.
            </li>
            <li>
              Smart IT Infrastructure: We design and maintain a robust IT
              infrastructure to ensure seamless connectivity, data security, and
              business continuity.
            </li>
          </ul>
        </div>

        <div className="mb-28">
          <h3 className="text-3xl font-bold text-[#292F36] leading-[50px] text-center mb-10">
            Ready to transform your workplace into a smart and dynamic <br />{" "}
            hub of productivity? Contact us today to discuss your Smart <br />{" "}
            Home needs and experience the difference.
          </h3>
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

export default SmarthomePage;
