export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
