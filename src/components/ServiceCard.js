import { FaCheckCircle } from 'react-icons/fa';

export default function ServiceCard({ title, description, price }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center gap-2">
        <FaCheckCircle className="text-green-500" />
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
      <p className='bg-green-500 rounded-xl shadow-xl px-2 py-1 text-left'>{price}</p>
    </div>
  );
}
