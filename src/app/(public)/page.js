// 'use client';
import Banner from "@/components/homepage/Banner";
import Stats from "@/components/homepage/Stats";
import TrendingApps from "@/components/homepage/TrendingApps";


export default function Home() {
  return (
    <div className="p-8">
         <Banner/>
         <Stats/>
         <TrendingApps from="homepage"/>

    </div>
  );
}