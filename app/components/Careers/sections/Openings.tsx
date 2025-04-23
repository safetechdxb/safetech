"use client";

import SubTitle from "../../common/SubTitle";


interface PlatformsItem {
  id: number;
  doctitle: string;
  size: string;
  category: string;
}

interface PlatformsSectionProps {
  title: string;
  data: PlatformsItem[];
}


const Openings: React.FC<PlatformsSectionProps> = ({ data,title }) => {


  return (
    <section className="py-[50px] md:py-[70px] xl:py-[140px] overflow-hidden relative">
      <div className="container">

      <div className="relative tracking-[3px]  mb-4 lg:mb-[30px]">
          <SubTitle titleText={title} color="text-black" />
            </div>
            <div>
              {data.map((item) => (
                <div
                  key={item.id}
                  className="md:flex justify-between group items-center border-b border-[#1E1E1E66] border-dashed mb-7 pb-7 md:mb-[30px] md:pb-[30px]"
                >
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <p className="text-24 text-secondary group-hover:text-[#E11F27] transition-all duration-300">
                      {item.doctitle}
                    </p>
                  </div>

                </div>
              ))}
            </div>

      </div>
    </section>
  );
};

export default Openings;
