import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Link from "next/link";
import { ChevronRight, MoveRight } from 'lucide-react';
import { Facebook,Linkedin,Instegram,youtube } from 'lucide-solid';
const Footer = () => {
  return (
    <footer className="bg-secondary pt-[140px] border-t-4 border-t-primary px-0">
      <div className="container mx-auto py-4">
        <div className="flex gap-4">
          <div className="flex flex-col w-1/3">
            <Image src={assets.logo} alt="Logo" width={200} height={200} className="mb-20" />
            <p className="text-white/50 text-18 font-normal leading-[1.3] max-w-[80%]">Safe Tech, a subsidiary of UNEC, delivers innovative construction solutions with advanced precast, prestress, and GRC products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-[5em] w-full">
            <div>
              <h3 className="text-white text-18 font-bold uppercase mb-8">Quick links</h3>
              <ul className="flex flex-col gap-4">
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">About Us</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">News</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-18 font-bold uppercase mb-8">Connect</h3>
              <ul className="flex flex-col gap-4">
                <li className="text-white flex gap-2 items-center"><span className="text-primary  "><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Call Us</Link></li>
                <li className="text-white flex gap-2 items-center"><span className="text-primary  "><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Enquiry Form</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-18 font-bold uppercase mb-8">Address</h3>
              <p className="text-white text-16 leading-[1.3] font-normal ">Safe Tech Precast <br />
                Building Manufacturing LLC <br />
                National Industries Park, <br />
                PO Box 18337 <br />
                Dubai, UAE</p>
            </div>
            <div>
              <h3 className="text-white text-18 font-bold uppercase mb-8">Products</h3>
              <ul className="flex flex-col gap-4">
                <li className="text-white flex gap-2 items-center"><span className="text-primary">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Precast</Link></li>
                <li className="text-white flex gap-2 items-center"><span className="text-primary">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Prestress</Link></li>
                <li className="text-white flex gap-2 items-center"><span className="text-primary">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Hollow Core</Link></li>
                <li className="text-white flex gap-2 items-center"><span className="text-primary">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Troughs</Link></li>
                <li className="text-white flex gap-2 items-center"><span className="text-primary">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">GRC</Link></li>
                <li className="text-white flex gap-2 items-center"><span className="text-primary">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Steel Reinforcement</Link></li>
                <li className="text-white flex gap-2 items-center"><span className="text-primary">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Modular Prefeb</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-18 font-bold uppercase mb-8">Legal</h3>
              <ul className="flex flex-col gap-4">
                <li className="text-white flex gap-2 items-center"><span className="text-primary  "><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">About Us</Link></li>
                <li className="text-white flex gap-2 items-center"><span className="text-primary  "><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">News</Link></li>
                <li className="text-white flex gap-2 items-center"><span className="text-primary  "><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-18 font-bold uppercase mb-8">Newsletter</h3>
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-16">
                  <input type="email" name="email" id="email" placeholder="Email" className="text-white/50 fw-normal text-16 focus:outline-0 focus:border-0 placeholder:text-white/50 placeholder:text-16 placeholder:font-normal" />
                  <button className="flex gap-3 text-white/50 text-16 leading-[1.3] font-normal">Subscribe <MoveRight/></button>
                </div>
                <div>
                  <ul className="flex border-1 border-primary w-fit">  
                    <li className="border-r border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200"><Link href="#"><Image src={assets.facebook} alt="Facebook" width={12} height={16.62} className="flex w-auto" /></Link></li>
                    <li className="border-r border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200"><Link href="#"><Image src={assets.linkedin} alt="LinkedIn" width={12} height={15.71} className="flex w-auto" /></Link></li>
                    <li className="border-r border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200"><Link href="#"><Image src={assets.instagram} alt="Instagram" width={14} height={14} className="flex w-auto" /></Link></li>
                    <li className="border-r border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200"><Link href="#"><Image src={assets.youtube} alt="Twitter" width={12} height={10.6} className="flex w-auto" /></Link></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-15 py-10">
        <div className="container">
          <div className="flex justify-between items-center">
            <p className="text-white/50">2024 Safetech. All Rights reserved</p>
            <ul className="flex gap-4">
              <li><Link href="#" className="border-r border-white/10 text-white/50 last:border-none">Privacy policy</Link></li>
              <li><Link href="#" className="border-r border-white/10 text-white/50 last:border-none">Terms of use</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;