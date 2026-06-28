import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data.json');
        const data = await res.json();
        
        setTimeout(() => {
          setApps(data);
          setLoading(false);
        }, 3500);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
  return { apps, loading }; 
};

export default useApps;