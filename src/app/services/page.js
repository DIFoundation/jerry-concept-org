import Head from 'next/head';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | CyberZone</title>
        <meta name="description" content="Explore all services and prices at CyberZone cyber café." />
      </Head>

      <main className="pt-24 bg-white min-h-screen px-6">
        <section className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services & Prices</h1>
          <p className="text-gray-600 mb-12">
            Browse our full list of offerings and see what suits your needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map(service => (
              <div
                key={service.id}
                className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition text-left"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-blue-600 font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
