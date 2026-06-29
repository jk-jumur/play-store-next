import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";


const DashboardLayout = ({children}) => {
    return (
        


  
        <div className="flex gap-3 justify-between">
             <div className=" h-screen w-[250px] bg-purple-300 text-purple-500 flex  flex-col items-center justify-center font-bold text-5xl ">
                 Sidebar
                 <Link href={'/'}><button className="btn  btn-primary    flex  gap-4">Home <BsArrowRight/></button></Link>
             </div>
            {children}
        </div>
    );
};



export default DashboardLayout;