import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaStar } from "react-icons/fa";


const AppCard = ({ app }) => {
  return (
    <Link  href={`/apps/${app.id}`} className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image
          src={app.image}
          alt={app.title}
          height={200}        
          width={200}
          className="h-[200px]  w-auto"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>

        <div className="flex justify-between items-center gap-4">
          <span className="bg-green-100 text-green-500 flex items-center gap-3 py-1 px-3 font-semibold rounded-md">
            <FaDownload /> {app.downloads}
          </span>

          <span className="bg-orange-100 text-orange-500 flex items-center gap-3 py-1 px-3 font-semibold rounded-md">
            <FaStar /> {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;