interface SubTitleProps {
  titleText: string;
  color:string;
}
const SubTitle = ({titleText,color}:SubTitleProps) => {
  return ( 
    <>
      <div className="absolute top-1/2 -translate-y-1/2 h-[90%] d-flex w-[4px] bg-red-600 text-32 fw-bold"></div>
      <h2 className={`text-32 font-semibold uppercase mb-0 pl-[32px] ${color}`}>{titleText}</h2>
    </>
   );
}
 
export default SubTitle;