
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const MyLink = ({href, children}) => {
    const pathname = usePathname();
    console.log(pathname,  "pathname");
    console.log(href, "href")
    return (
        <Link  href={href} 
       className={`pb-4 font-semibold  ${pathname === href ? "border-b-3 border-purple-500" : ""}`}>{children}</Link>
    );
};

export default MyLink;