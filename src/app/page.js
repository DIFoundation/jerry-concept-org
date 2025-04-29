import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Image from "next/image";
import { services } from "@/data/services";
import { courses } from "@/data/training";

const featuredServices = services;
const featuredCourses = courses;

const App = () => (
    <main className="flex-grow">
      <div>
      <Hero />

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Welcome to Jerry Concept Organization</h2>
              <p className="text-gray-600 mb-4">
                Since 2015, Jerry Concept Organization has been at the forefront of providing cutting-edge computer services and technology education to our community.
              </p>
              <p className="text-gray-600 mb-6">
                Our cyber café offers a comfortable environment for all your computing needs, while our training programs are designed to equip you with in-demand tech skills for today&apos;s digital world.
              </p>
              <Button asChild className="bg-blue-700 text-white hover:bg-blue-800">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Jerry Concept Organization Facility" 
                className="rounded-lg shadow-md w-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of computer services to meet all your technological needs, from basic internet access to professional document processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-blue-700 text-white hover:bg-blue-800">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your skills with our comprehensive training programs designed to prepare you for the tech-driven future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.slice(0, 3).map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                  width={500}
                  height={300}
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {course.level}
                    </span>
                    <span className="text-gray-500 text-sm">{course.duration}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Button asChild className="w-full bg-blue-700 text-white hover:bg-blue-800">
                    <Link href={`/contact?course=${course.title}`}>Enroll Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
              <Link href="/training">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our cyber café today or enroll in one of our training programs to begin your tech journey with Jerry Concept Organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link href="/contact">Visit Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/training">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </main>
);

export default App;
