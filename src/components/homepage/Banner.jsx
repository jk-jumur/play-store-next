import bannerImg from '@/assets/image/hero.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="min-h-[80vh]  text-center space-y-8 pt-[50px]">
           <h2 className="text-4xl font-bold text-[#]">We Build <br /> <span className="text-purple-500 text-4xl font-bold"
           >Productive</span> Apps </h2>
           <p className="text-gray-400 max-w-[50%] mx-auto">AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
             <div className="flex justify-center gap-4">

                <button className="btn"><IoLogoGooglePlaystore />Play Store</button>
               <button className="btn"><FaAppStoreIos className="bg-sky-400"/>App Store</button>
             </div>

             <Image
             src={bannerImg} 
             alt="" 
             className="mx-auto"/>
           
        </div>
    );
};

export default Banner;