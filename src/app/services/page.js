import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const featuredServices = services;

const Services = () => {
  return (
    <div>
      {/* Services Hero */}
      <section className="bg-jerry-950 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Jerry Concept Organization offers a comprehensive range of computer services to meet all your digital needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Our Services Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;ve simplified our process to ensure you receive quick, effective service every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-jerry-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Visit Our Center</h3>
              <p className="text-gray-600">
                Stop by our cyber café during business hours or make an appointment for specialized services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-jerry-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discuss Your Needs</h3>
              <p className="text-gray-600">
                Our staff will help you identify the right service for your specific requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-jerry-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Results</h3>
              <p className="text-gray-600">
                We deliver high-quality results efficiently, ensuring your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer competitive rates for all our services with flexible payment options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-jerry-300">
              <h3 className="text-xl font-semibold mb-4 text-center">Basic Services</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">₦500</span>
                <span className="text-gray-600">/hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Internet Browsing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Computer Usage
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Basic Printing (Black & White)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-jerry-700 transform scale-105 z-10">
              <div className="absolute top-0 right-0 bg-jerry-700 text-white text-xs uppercase font-semibold py-1 px-2 rounded-bl">Popular</div>
              <h3 className="text-xl font-semibold mb-4 text-center">Standard Services</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">₦2,000</span>
                <span className="text-gray-600">/service</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Document Processing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Color Printing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Basic Graphic Design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Scanning Services
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-jerry-300">
              <h3 className="text-xl font-semibold mb-4 text-center">Premium Services</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">₦5,000+</span>
                <span className="text-gray-600">/service</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Advanced Graphic Design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Computer Repair
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Audio/Video Editing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-jerry-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  IT Consultation
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            * Prices may vary based on specific requirements and project complexity. Contact us for a detailed quote.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-jerry-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Our Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our center today or contact us to learn more about how we can assist with your computer and tech needs.
          </p>
          <a href="/contact" className="btn btn-primary bg-white text-jerry-700 hover:bg-gray-100 inline-block">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
