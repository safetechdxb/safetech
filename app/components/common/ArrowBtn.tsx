import Link from "next/link";
interface ArrowBtnProps {
  btnText: string;
  btnLInk: string;
  border?: boolean;
}

const ArrowBtn = ({ btnText, btnLInk, border }: ArrowBtnProps) => {
  return ( 
    <Link href={btnLInk} className={`flex items-center gap-3 mt-4 bg-transparent hover:text-white transition duration-300 py-2 w-fit group ${border ?"border-b-2 border-primary":""}`}>
      <span className={`text-red-600 font-semibold uppercase group-hover:text-secondary transition-color duration-200 ${border ? "text-14" :"text-12"}`}>{btnText}</span>
      <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
        <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM18.2361 6.53033C18.529 6.23744 18.529 5.76256 18.2361 5.46967L13.4632 0.696699C13.1703 0.403806 12.6954 0.403806 12.4025 0.696699C12.1096 0.989592 12.1096 1.46447 12.4025 1.75736L16.6452 6L12.4025 10.2426C12.1096 10.5355 12.1096 11.0104 12.4025 11.3033C12.6954 11.5962 13.1703 11.5962 13.4632 11.3033L18.2361 6.53033ZM1 6.75H17.7058V5.25H1V6.75Z" fill="#E11F27" />
      </svg>
   </Link>
   );
}
 
export default ArrowBtn;