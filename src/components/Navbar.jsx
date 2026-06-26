


// import Link from 'next/link';
// import logoImg from '../../assets/image/logo.png'
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import MyLink from './shared/Navbar/MyLink';


const Navbar = () => {

    const navItems = [
      {
        path:"/",
        text:"Home",
      },
      {
        path:"/apps",
        text:"Apps",
      },

      {
        path:"/installation",
        text:"Installation",
      },
      {
        path: "/dashboard",
        text: "Dashboard",
      }
    ]
    return (
        
             <nav className=" bg-white shadow ">
                  <div className="flex  justify-between  items-center  gap-4  py-[5px]    container  mx-auto">

                {/* <Image
                  src={logoImg}
                   alt="logo"
                   className="w-[50px]" /> */}

                   <Image 
                   src="https://img.magnific.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"

                     alt="play-store-app"

                     height={50}

                     width={50}

                     className=""/>
                  <ul className="flex justify-center items-center gap-5">

                      {
                        navItems.map((item, index) => <MyLink key={index} href={item.path}>{item.text}</MyLink>
                        )
                      }
                     

                  </ul>
                  <button className="btn bg-purple-600 text-white"> <FaGithub />Contribute</button>
                  </div>
           

             </nav>
        
    );
};



export default Navbar;