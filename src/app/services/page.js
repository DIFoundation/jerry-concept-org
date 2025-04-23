import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} price={service.price} />
        ))}
      </div>
    </section>
  );
}
