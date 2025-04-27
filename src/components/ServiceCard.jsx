import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ServiceCard = ({ title, description, icon: Icon, className }) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 h-full flex flex-col",
      className
    )}>
      <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="text-blue-700" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
