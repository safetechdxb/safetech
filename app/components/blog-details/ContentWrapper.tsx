interface Props {
  mainImg?: string | StaticImageData;
  mainDesc?: string;
  galleryImgs?: string[];
  subDesc1?: string;
  subDesc2?: string;
}
import { StaticImageData } from "next/image";
import Image from "next/image";
const ContentWrapper = ({mainImg,mainDesc,galleryImgs,subDesc1,subDesc2}:Props) => {
  return ( 
    <div className="flex flex-col gap-10">
      {mainImg && (
        <Image src={mainImg} alt="Blog Main Image" width={1920} height={1080} className="w-full h-auto object-cover" />
      )}
      {
        mainDesc && (
          <p className="text-secondary text-20 leading-[1.3] font-normal">
            {mainDesc}
          </p>
        )
      }
      {
        galleryImgs && galleryImgs.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 mt-4">
            {galleryImgs.map((img, index) => (
              <Image key={index} src={img} alt={`Gallery Image ${index + 1}`} width={1920} height={1080} className="w-full h-auto object-cover" />
            ))}
          </div>
        )
      }
     <div className="flex flex-col gap-7">
        {
          subDesc1 && (
            <p className="text-secondary text-20 leading-[1.3] font-normal mb-0">
              {subDesc1}
            </p>
          )
        }
        {
          subDesc2 && (
            <p className="text-secondary text-20 leading-[1.3] font-normal mb-0">
              {subDesc2}
            </p>
          )
        }
     </div>
    </div>
   );
}
 
export default ContentWrapper;