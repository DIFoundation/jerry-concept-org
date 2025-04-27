import { Button } from "@/components/ui/button";
import Link from "next/link";

const CourseCard = ({ title, description, duration, level, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">
            {level}
          </span>
          <span className="text-gray-600 text-sm">
            {duration}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
          <Link href="/contact?course=enrollment">Enroll Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
