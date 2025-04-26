
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-jerry-100 rounded-full p-3 text-jerry-700">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
            <p className="text-gray-600">123 Tech Street, City Name, State</p>
            <p className="text-gray-600">Nigeria</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-jerry-100 rounded-full p-3 text-jerry-700">
            <Phone size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
            <p className="text-gray-600">+234 123 456 7890</p>
            <p className="text-gray-600">+234 987 654 3210</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-jerry-100 rounded-full p-3 text-jerry-700">
            <Mail size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
            <p className="text-gray-600">info@jerryconcept.com</p>
            <p className="text-gray-600">support@jerryconcept.com</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-semibold text-gray-900 mb-3">Hours of Operation</h4>
        <div className="space-y-1">
          <p className="flex justify-between">
            <span className="text-gray-600">Monday - Friday:</span>
            <span className="text-gray-900">8:00 AM - 6:00 PM</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600">Saturday:</span>
            <span className="text-gray-900">9:00 AM - 4:00 PM</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600">Sunday:</span>
            <span className="text-gray-900">Closed</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
