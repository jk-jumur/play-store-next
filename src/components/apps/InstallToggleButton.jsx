"use client";

import { InstalledAppsContext } from "@/context/install.context";
import { useContext } from "react";
import { toast } from "react-toastify";



const InstallToggleButton = ({app}) => {
      const {installedApps, setInstalledApps} = useContext(InstalledAppsContext);
      console.log(installedApps,  "something");

      const handleInstallNow = () => {
           console.log("Handle install now");
           setInstalledApps([...installedApps, app]);
           toast.success(`${app.title} is succsessfully installed!`)
      }

      const isInstalled = installedApps.find((installedApp)  => installedApp.id === app.id)
       console.log({ isInstalled, app }, 'isInstalled');
    return (
        <button disabled={isInstalled ? true : false } className={`btn  ${isInstalled ? "opacity" : "bg-purple-400"}  text-white`} onClick={handleInstallNow}>Install Now</button>
    );
};

export default InstallToggleButton;