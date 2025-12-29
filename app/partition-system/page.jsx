import Image from "next/image";

export const metadata = {
  title: "Partition System",
  description: `Genix MEP Design Consultant is very pleased to launch a new series of Wall
  Partition System a Healthier Solution for Hospital Room
  Partitions. Fabric curtain systems in healthcare facilities are
  built to provide privacy to patients. If you need to segment
  office space in your facility, wall off an area for better
  environmental protection or divide plant space from floor to
  ceiling, our wall partitioning systems are suitable for all
  forms of partitioning.`,
};

const PartitionSystemPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/partitionsystem1.png"
          alt="services"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">
            CLEAN ROOM <br />
            PARTITIONS
          </h1>
          <p className="text-[#4D5053]">Home / SERVICES:</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <section className="mb-24">
          <h2 className="text-[#CDA274] text-5xl uppercase text-center mb-12">
            Wall partition system
          </h2>

          <div className="flex gap-10 justify-center">
            <div className="text-[#4D5053] text-xl flex-[0_0_50%] leading-10">
              <p>
                Genix MEP Design Consultant is very pleased to launch a new
                series of Wall Partition System a Healthier Solution for
                Hospital Room Partitions. Fabric curtain systems in healthcare
                facilities are built to provide privacy to patients. If you need
                to segment office space in your facility, wall off an area for
                better environmental protection or divide plant space from floor
                to ceiling, our wall partitioning systems are suitable for all
                forms of partitioning. In addition to effectively mediating the
                acoustics between rooms and inside each of them, the partitions,
                which are necessary for subdividing the space, must be
                particularly resistant to impact, fire, and humidity.
              </p>
            </div>
            <div className="relative flex-[0_0_50%]">
              <Image
                src="/partitionsystem2.png"
                alt="partition system"
                className="object-contain"
                fill
              />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-[#CDA274] text-5xl uppercase text-center mb-12">
            Ceiling partition system
          </h2>

          <div className="flex gap-10 justify-center">
            <div className="relative flex-[0_0_50%]">
              <Image
                src="/partitionsystem3.png"
                alt="partition system"
                className="object-contain"
                fill
              />
            </div>
            <div className="text-[#4D5053] text-xl flex-[0_0_50%] leading-10">
              <p>
                Genix MEP Design Consultant is very pleased to launch a new
                series of Wall Partition System a Healthier Solution for
                Hospital Room Partitions. Fabric curtain systems in healthcare
                facilities are built to provide privacy to patients. If you need
                to segment office space in your facility, wall off an area for
                better environmental protection or divide plant space from floor
                to ceiling, our wall partitioning systems are suitable for all
                forms of partitioning. In addition to effectively mediating the
                acoustics between rooms and inside each of them, the partitions,
                which are necessary for subdividing the space, must be
                particularly resistant to impact, fire, and humidity.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="mb-24">
          <h2 className="text-[#CDA274] text-5xl uppercase text-center mb-12">
            Doors and accessories
          </h2>
          <p className="text-[#4D5053] text-xl leading-10 mb-8">
            We may configure the door to suit unique dimensions, color&apos;s
            and accessories such as door automatics, glass openings, adaptation
            for access control systems, etc. Hospital doors are expected to have
            smooth surfaces. Dirt-collecting joints and valves make routine
            cleaning difficult. There is a major chance that the door may be
            struck by hospital beds or other. Therefore, doors and frames must
            be constructed to withstand daily effects. Materials used in the
            door must be able to tolerate washing with different forms of
            chemicals without causing damage. A sophisticated range of automatic
            doors and barrier systems for the healthcare sector has been
            established with a keen desire to encourage and enable greater
            environmental control, allowing for an easy, touch-free and hygienic
            operation.
          </p>
          <div className="h-[500px] flex gap-8 justify-center">
            <div className="relative flex-[0_0_50%]">
              <Image
                src="/partitionsystem4.png"
                alt="partition system"
                className="object-contain"
                fill
              />
            </div>
            <div className="relative flex-[0_0_50%]">
              <Image
                src="/partitionsystem5.png"
                alt="partition system"
                className="object-contain"
                fill
              />
            </div>
          </div>
        </section> */}

        <section className="mb-24">
          <h2 className="text-[#CDA274] text-5xl uppercase text-center mb-12">
            Modular Clean Room Panels
          </h2>
          <p className="text-[#4D5053] text-xl leading-10 mb-8">
            The interpretation of a cleanroom can differ from industry to
            industry and from customer to customer, with each application
            designed to meet the unique needs of the specific requirements of
            the business. With our vast understanding and thorough knowledge of
            the industry, we are engaged in designing, trading and selling
            Modular Clean Room Panels. Basically, this is intended for air
            ingress in the room. By keeping track of recent industry trends, we
            are delivering an outstanding selection of Clean Room Doors During
            the production phase, this product is tested at any point of the
            manufacturing process, thereby balancing international standard on
            the market.
          </p>

          <div className="relative w-full h-[650px]">
            <Image src="/partitionsystem6.png" alt="partition system" fill />
          </div>
        </section>
      </div>
    </>
  );
};

export default PartitionSystemPage;
