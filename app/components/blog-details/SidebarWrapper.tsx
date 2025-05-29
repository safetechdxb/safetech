"use client"
import {motion} from "framer-motion";
import { moveLeft } from "../motionVarients";
import { assets } from "@/public/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/Blog";
import moment from "moment";

const SidebarWrapper = ({allBlogs}: {allBlogs: Blog}) => {

  return ( 
    <aside>
      <h3 className="text-[#333333] text-16 font-normal mb-[10px]">Share</h3>
      <div>
        <ul className="flex border-1 border-primary w-fit mb-10">
          <li className="border-r cursor-pointer border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200 group"><Link href="#"><Image src={assets.sharePrimary} alt="Facebook" width={12} height={16.62} className="flex w-auto fill-primary group-hover:brightness-0 group-hover:invert" /></Link></li>
          <li className="border-r cursor-pointer border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200 group"><Link href="#"><Image src={assets.facebookPrimary} alt="LinkedIn" width={12} height={15.71} className="flex w-auto fill-primary group-hover:brightness-0 group-hover:invert" /></Link></li>
          <li className="border-r cursor-pointer border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200 group"><Link href="#"><Image src={assets.linkedinPrimary} alt="Instagram" width={14} height={14} className="flex w-auto fill-primary group-hover:brightness-0 group-hover:invert" /></Link></li>
          <li className="border-r cursor-pointer border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200 group"><Link href="#"><Image src={assets.instagramPrimary} 
          alt="Twitter" width={12} height={10.6} className="flex w-auto fill-primary group-hover:brightness-0 group-hover:invert" /></Link></li>
        </ul>
        <div>
          <h3 className="text-20 font-semibold leading-[1.3] text-[#333333] mb-5">Trending Blogs</h3>
          <div>
            {allBlogs.blogs.sort(() => Math.random() - 0.5).slice(0, 3).map((blog,index) => (
              <motion.div variants={moveLeft(index * 0.3)} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }} key={index} className="flex flex-col mb-5">
                <Link href={`/blog/${blog.slug}`}>
                  <Image src={blog.coverImage} alt={blog.title} width={390} height={240} className="w-full h-[240px] object-cover mb-4" />
                </Link>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-12 font-normal leading-[1.7] text-tm-gray uppercase">{blog.category}</p>
                    <p className="text-12 font-normal leading-[1.7] text-tm-gray uppercase">{moment(blog.createdAt).format("DD MMM, YYYY")}</p>
                  </div>
                <div>
                  <Link href={`/blog/${blog.slug}`}>
                  <h4 className="text-20 font-semibold leading-[1.3]">{blog.title}</h4>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </aside>
   );
}
 
export default SidebarWrapper;