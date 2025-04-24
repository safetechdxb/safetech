"use client";
import { motion } from "framer-motion";

interface SubTitleProps {
  titleText: string;
  color:string;
}
const SubTitle = ({ titleText, color }: SubTitleProps) => {
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -30, transition: { duration: 0.4 } },
  };
  const lineVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    show: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
       <motion.div
  variants={lineVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
  className="origin-top absolute top-1/2 -translate-y-1/2 h-full w-[5px] bg-red-600"
>
</motion.div>
<motion.div
  variants={slideInLeft}
  initial="hidden"
  whileInView="show"
  exit="exit"
  viewport={{ once: false, amount: 0.3 }}
>
  <h2 className={`text-32 font-semibold uppercase mb-0 pl-[32px] py-[10px] leading-[1.16] ${color}`}>
    {titleText}
  </h2>
</motion.div>
    </>
   );
}

export default SubTitle;