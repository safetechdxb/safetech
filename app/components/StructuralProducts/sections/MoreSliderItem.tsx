"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProductSliderItemProps {
  prdImg: string | StaticImageData;
  prdName: string;
  prdLink: string;
}
const MoreSliderItem = ({prdImg,prdName,prdLink}:ProductSliderItemProps) => {
  return (
    <div>
      <div className="relative w-full h-[300px] group">
        <Image src={prdImg} width={150} height={150} alt="Product Image" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 bg-off-white w-[64px] h-[64px] group-hover:w-[128px] group-hover:bg-primary duration-200 transition-all">
          <Link className="w-[64px] h-[64px] flex justify-center items-center absolute top-0 left-0 group-hover:right-0 group-hover:left-[64px] duration-200 transition-all" href={prdLink}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-45 group-hover:fill-white duration-200 transition-all">
              <path d="M0.563267 12.3762C0.270374 12.6691 0.270374 13.1439 0.563267 13.4368C0.856161 13.7297 1.33103 13.7297 1.62393 13.4368L0.563267 12.3762ZM13.6564 1.0937C13.6564 0.679489 13.3206 0.343702 12.9064 0.343702H6.15639C5.74218 0.343702 5.40639 0.679489 5.40639 1.0937C5.40639 1.50792 5.74218 1.8437 6.15639 1.8437L12.1564 1.8437L12.1564 7.8437C12.1564 8.25792 12.4922 8.5937 12.9064 8.5937C13.3206 8.5937 13.6564 8.25792 13.6564 7.8437V1.0937ZM1.62393 13.4368L13.4367 1.62403L12.3761 0.563372L0.563267 12.3762L1.62393 13.4368Z" fill="#1E1E1E" className="group-hover:fill-white" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <h3 className="text-24 font-semibold  uppercase">{prdName}</h3>
      </div>
    </div>
   );
}

export default MoreSliderItem;