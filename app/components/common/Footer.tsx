import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Link from "next/link";
import { ChevronRight, MoveRight } from 'lucide-react';
const Footer = async() => {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/home`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <footer className="bg-secondary pt-140 border-t-4 border-t-primary px-0">
      <div className="container mx-auto py-4">
        <div className="lg:flex gap-4">
          <div className="flex flex-col w-full lg:w-1/3">
            <Image src={assets.logo} alt="Logo" width={200} height={100} className="object-contain h-10 w-fit lg:h-[100px] mb-8 lg:mb-20 brightness-0 invert-100" />
            <p className="text-white/50 text-18 font-normal leading-[1.3] lg:max-w-[80%] mb-8 ">
            Safe Tech, a subsidiary of UNEC, delivers innovative construction solutions with advanced precast, prestress, and GRC products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  gap-y-15 lg:gap-y-[5em] w-full lg:w-2/3">
            <div className="group/box">
              <h3 className="text-white text-18 font-bold uppercase mb-8 group-hover/box:text-primary">Quick links</h3>
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight className="" /></span><Link href="about" className="text-16 leading-[1.3] font-normal">About Us</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight /></span><Link href="careers" className="text-16 leading-[1.3] font-normal">Careers</Link></li>
              </ul>
            </div>
            <div className="group/box">
              <h3 className="text-white text-18 font-bold uppercase mb-8 group-hover/box:text-primary">Connect</h3>
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group">
                  <span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight />
                  </span><Link href="contact-us" className="text-16 leading-[1.3] font-normal">Contact Us</Link>
                </li>
                {/* <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group">
                  <span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight />
                  </span><Link href="contact-us/#enq-form" className="text-16 leading-[1.3] font-normal">Enquiry Form</Link>
                </li> */}
              </ul>
            </div>

            <div className="group/box">
              <h3 className="text-white text-18 font-bold uppercase mb-8 group-hover/box:text-primary">Products</h3>
              <ul className="flex flex-col gap-2 lg:gap-4">
                {
                  data.data.products.items.map((product: { title: string,url:string }, index: number) => (
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group" key={index}><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform">
                      <ChevronRight /></span><Link href={`products${product.url}`} className="text-16 leading-[1.3] font-normal">{product.title}</Link></li>
                  ))
                }
                {/* <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Prestress</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Hollow Core</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Troughs</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">GRC</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Steel Reinforcement</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform">
                  <ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Modular Prefeb</Link></li> */}
              </ul>
            </div>
            <div className="group/box">
              <h3 className="text-white text-18 font-bold uppercase mb-8 group-hover/box:text-primary">Legal</h3>
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">QHSE Policy</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Code of Conduct</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Equal Opportunity Policy</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Modern Slavery Policy</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Whistleblowing Policy</Link></li>
                <li className="text-white flex gap-2 items-center hover:text-white/80 duration-200 transition-colors group"><span className="text-primary group-hover:translate-x-0.5 duration-200 transition-transform"><ChevronRight /></span><Link href="#" className="text-16 leading-[1.3] font-normal">Data Protection Policy</Link></li>
              </ul>
            </div>
            </div>
            <div className=" mt-15 lg:mt-0 flex lg:flex flex-col md:grid  md:grid-cols-2   md:flex-row  lg:flex-col gap-4 gap-y-15 lg:gap-y-[5em] w-full lg:w-1/3">

            <div className="group">
              <h3 className="text-white text-18 font-bold uppercase mb-8 group-hover/box:text-primary">Address</h3>
              <p className="text-white text-16 leading-[1.3] font-normal ">Safe Tech Precast <br />
                Building Manufacturing LLC <br />
                National Industries Park, <br />
                PO Box 18337 <br />
                Dubai, UAE</p>
            </div>
            <div className="group">
              <h3 className="text-white text-18 font-bold uppercase mb-8 group-hover/box:text-primary">Newsletter</h3>
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-16  ">
                  <input type="email" name="email" id="email" placeholder="Email" className="text-white/50 fw-normal text-16 focus:outline-0 focus:border-0 placeholder:text-white/50 placeholder:text-16 placeholder:font-normal" />
                  <button className="flex gap-3 text-white/50 text-16 leading-[1.3] font-normal hover:text-white cursor-pointer">Subscribe <MoveRight/></button>
                </div>
                <div>
                  <ul className="flex border-1 border-primary w-fit">
                    <li className="border-r border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200"><Link href="#">
                    <Image src={assets.facebook} alt="Facebook" width={12} height={16.62} className="flex w-full h-[13px] object-contain 2xl:w-auto" /></Link></li>
                  <li className="border-r border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200"><Link href="https://www.linkedin.com/company/safetech-precast-building-manufacturing-llc">
                    <Image src={assets.linkedin} alt="LinkedIn" width={12} height={15.71} className="flex w-full h-[13px] object-contain 2xl:w-auto" /></Link></li>
                    <li className="border-r border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200"><Link href="#">
                    <Image src={assets.instagram} alt="Instagram" width={14} height={14} className="flex w-full h-[13px] object-contain 2xl:w-auto" /></Link></li>
                    <li className="border-r border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200"><Link href="#">
                    <Image src={assets.youtube} alt="Twitter" width={12} height={10.6} className="flex w-full h-[13px] object-contain 2xl:w-auto" /></Link></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-15 py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50">2025 Safetech. All Rights reserved</p>
            <ul className="flex ">
              <li className="border-r border-white/50 pr-4 last:border-none"><Link href="#" className="text-white/50 block">Privacy policy</Link></li>
              <li className="border-r border-white/50 pl-4 last:border-none"><Link href="#" className="text-white/50 block">Terms of use</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;