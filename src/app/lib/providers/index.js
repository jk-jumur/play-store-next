"use client";
import InstalledAppsProvider from "@/context/install.context";




const Providers = ({children}) => {
      return  <InstalledAppsProvider>
          {children}
      </InstalledAppsProvider>
      
};

export default Providers;