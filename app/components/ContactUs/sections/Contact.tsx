"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import SubTitle from "../../common/SubTitle";
import { contactData } from "@/public/types/contactData";
import { assets } from "@/public/assets/assets";



const Contact  = ({ data }: { data: contactData }) => {


  return (
    <>
      <section className="pt-[50px] md:pt-[70px] xl:pt-[140px]  overflow-hidden relative ">
        <div className="container">
          <div className="  mb-10 lg:mb-[94px]">
            <div className="relative tracking-[3px] max-w-[75ch]">
              <SubTitle titleText={data.title} color="text-black" />
            </div>
          </div>
        </div>

        <motion.div className="" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} >
          <div className="w-full h-[350px] lg:h-[610px]  overflow-hidden">
            <iframe
              src={data.map}
              width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </motion.div>

      </section>
      <section className=" ">
        <div className="container">
          <div className=" py-[20px] md:py-[70px] xl:py-[140px]  border-b border-secondary/60 ">
            <div>
              {/* {data.map((item, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center">
                  {item.details.map((detail, detailIndex) => (
                    <motion.div variants={moveUp(detailIndex * 0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={detailIndex} className="py-[25px] text-center lg:border-r border-secondary/40 h-full last:border-r-0 flex flex-col justify-center items-center">
                      <Image src={detail.icon} alt="phone" className="mx-auto mb-5" />
                      <h3 className="text-18 font-bold text-secondary mb-2">{detail.title}</h3>
                      <p className="text-20 font-normal text-secondary opacity-75 leading-[1.6] max-w-[25ch]  ">{detail.content}</p>
                    </motion.div>
                  ))}
                </div>
              ))} */}
              <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center">
               
                  <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-[25px] text-center lg:border-r border-secondary/40 h-full last:border-r-0 flex flex-col justify-center items-center">
                    <Image src={assets.location} alt="phone" className="mx-auto mb-5" />
                    <h3 className="text-18 font-bold text-secondary mb-2">UAE</h3>
                    <p className="text-20 font-normal text-secondary opacity-75 leading-[1.6] max-w-[25ch]  ">{data.address}</p>
                  </motion.div>
                  <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-[25px] text-center lg:border-r border-secondary/40 h-full last:border-r-0 flex flex-col justify-center items-center">
                    <Image src={assets.email} alt="phone" className="mx-auto mb-5" />
                    <h3 className="text-18 font-bold text-secondary mb-2">Email</h3>
                    <p className="text-20 font-normal text-secondary opacity-75 leading-[1.6] max-w-[25ch]  ">{data.email}</p>
                  </motion.div>
                  <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-[25px] text-center lg:border-r border-secondary/40 h-full last:border-r-0 flex flex-col justify-center items-center">
                    <Image src={assets.phone} alt="phone" className="mx-auto mb-5" />
                    <h3 className="text-18 font-bold text-secondary mb-2">Phone</h3>
                    <p className="text-20 font-normal text-secondary opacity-75 leading-[1.6] max-w-[25ch]  ">{data.phone}</p>
                  </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
