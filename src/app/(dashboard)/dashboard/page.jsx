"use client";

import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";



import useApps from "@/components/hooks/useApps";
import { useContext } from "react";
import { InstalledAppsContext } from "@/context/install.context";

const DashboardPage = () => {
  const { installedApps = [] } = useContext(InstalledAppsContext);
  const { apps = [], loading } = useApps();

  const totalApps = apps.length;
  const installedCount = installedApps.length;
  const uninstalledAppsLength = totalApps - installedCount;

  const data = [
    { name: "Installed", value: installedCount, fill: "#0088FE" },
    { name: "Uninstalled", value: uninstalledAppsLength, fill: "#FF8042" },
  ];

  if (loading) {
    return <div className="flex items-center justify-center mt-5"><span className=" loading  loading-bars  loading-lg  bg-purple-900 "></span></div>;
  }

  return (
    <div style={{ width: "100%", maxWidth: "500px", height: "400px", margin: "auto" }}>
        <h2 className="mt-4 text-center">Installed and UnInstalled Apps</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius="60%"
            outerRadius="80%"
            cornerRadius={10}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardPage;