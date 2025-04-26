import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <div key={service.title} className="flex justify-center">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="/services"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            View All Services
          </a>
          </div>
      </div>
    </section>
  );
}
