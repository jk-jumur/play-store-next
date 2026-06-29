"use client";

import { InstalledAppsContext } from "@/context/install.context";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";




;

const InstallApps = () => {
    const { installedApps, setInstalledApps } = useContext(InstalledAppsContext)
    console.log(installedApps,  "contextApps");

    const handleUninstall = (app) => {
           const restApps = installedApps.filter((iApp) => iApp.id != app.id);
           setInstalledApps(restApps)
          toast.warning(` ${app.title}  Is uninstalled`);
        
    }
    return (
        <div className="container mx-auto my-4 ">
           

            {
                installedApps.length === 0 ? <h2 className="fon t-bold text-4xl text-center my-5">No Installed Apps Found!</h2> :  installedApps.map((app, ind) => {
                      return <div key={ind} className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-200 m-6">
                         <div className="flex gap-3 justify-center items-center">
                              <Image src={app.image}
                             alt="page img"
                             width={200} 
                             height={200}
                            className="h-auto w-100% rounded-xl"/>
                            <h2 className="font-semibold text-2xl">{app.title}</h2>
                           </div>
                         <button  onClick={() => handleUninstall(app)} className="btn bg-green-600 text-white">Uninstall</button>
                      </div>
                })
            }
        </div>
    );
};

export default InstallApps;