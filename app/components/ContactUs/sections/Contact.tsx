"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import SubTitle from "../../common/SubTitle";

interface DetailedItem {
  icon: string;
  title: string;
  content: string;
}
interface PlatformsItem {
  id: number;
  title: string;
  tag: string;
  workingtitle: string;
  workingtime: string;
  workingdetails: string;
  details: DetailedItem[];
}

interface PlatformsSectionProps {
  data: PlatformsItem[];
  title: string;
}

const Contact: React.FC<PlatformsSectionProps> = ({ data, title }) => {


  return (
    <>
      <section className="pt-[50px] md:pt-[70px] xl:pt-[140px]  overflow-hidden relative ">
        <div className="container">
          <div className="  mb-10 lg:mb-[94px]">
            <div className="relative tracking-[3px] max-w-[75ch]">
              <SubTitle titleText={title} color="text-black" />
            </div>
          </div>
        </div>

        <motion.div className="" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} >
          <div className="w-full h-[350px] lg:h-[610px]  overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.421142856065!2d55.07073510000001!3d24.9177192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0d00286daea9%3A0xfadbfb050a4e973d!2sSafeTech%20Precast%20Building%20Manufacturing%20LLC!5e0!3m2!1sen!2sin!4v1745479077278!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </motion.div>

      </section>
      <section className=" ">
        <div className="container">
          <div className=" py-[20px] md:py-[70px] xl:py-[140px]  border-b border-secondary/60 ">
            <div>
              {data.map((item, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center">
                  {item.details.map((detail, detailIndex) => (
                    <motion.div variants={moveUp(detailIndex * 0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={detailIndex} className="py-[25px] text-center lg:border-r border-secondary/40 h-full last:border-r-0 flex flex-col justify-center items-center">
                      <Image src={detail.icon} alt="phone" className="mx-auto mb-5" />
                      <h3 className="text-18 font-bold text-secondary mb-2">{detail.title}</h3>
                      <p className="text-20 font-normal text-secondary opacity-75 leading-[1.6] max-w-[25ch]  ">{detail.content}</p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
