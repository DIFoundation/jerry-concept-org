
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { courses } from "@/data/training";

const featuredCourses = courses;

const Training = () => {
  return (
    <div>
      {/* Training Hero */}
      <section className="bg-jerry-950 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Training Programs</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Enhance your skills with our comprehensive tech training courses designed for all experience levels.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                image={course.image}
                duration={course.duration}
                level={course.level}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Training Programs?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our courses are designed to provide you with practical skills and knowledge that employers are looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-jerry-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jerry-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of practical experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-jerry-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jerry-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-gray-600">
                Practical exercises and projects that reinforce theoretical concepts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-jerry-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jerry-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Morning, evening, and weekend classes to accommodate your busy schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-jerry-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jerry-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Recognized Certification</h3>
              <p className="text-gray-600">
                Receive a certificate upon course completion to boost your resume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Schedule */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Upcoming Course Schedule</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our upcoming training sessions and secure your spot today.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-jerry-700 text-white">
                  <th className="px-6 py-4">Course</th>
                  <th className="px-6 py-4">Start Date</th>
                  <th className="px-6 py-4">Schedule</th>
                  <th className="px-6 py-4">Duration</th>
                  <th className="px-6 py-4">Fee</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium">Basic Computer Skills</td>
                  <td className="px-6 py-4">May 15, 2025</td>
                  <td className="px-6 py-4">Mon & Wed, 10AM-12PM</td>
                  <td className="px-6 py-4">4 weeks</td>
                  <td className="px-6 py-4">₦25,000</td>
                  <td className="px-6 py-4">
                    <Button asChild size="sm" className="bg-jerry-700 hover:bg-jerry-800">
                      <Link href="/contact?course=basic">Enroll</Link>
                    </Button>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Microsoft Office Suite</td>
                  <td className="px-6 py-4">June 1, 2025</td>
                  <td className="px-6 py-4">Tue & Thu, 2PM-4PM</td>
                  <td className="px-6 py-4">6 weeks</td>
                  <td className="px-6 py-4">₦35,000</td>
                  <td className="px-6 py-4">
                    <Button asChild size="sm" className="bg-jerry-700 hover:bg-jerry-800">
                      <Link href="/contact?course=office">Enroll</Link>
                    </Button>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium">Graphic Design</td>
                  <td className="px-6 py-4">May 20, 2025</td>
                  <td className="px-6 py-4">Sat, 10AM-2PM</td>
                  <td className="px-6 py-4">8 weeks</td>
                  <td className="px-6 py-4">₦50,000</td>
                  <td className="px-6 py-4">
                    <Button asChild size="sm" className="bg-jerry-700 hover:bg-jerry-800">
                      <Link href="/contact?course=design">Enroll</Link>
                    </Button>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Web Development</td>
                  <td className="px-6 py-4">June 10, 2025</td>
                  <td className="px-6 py-4">Mon, Wed & Fri, 4PM-6PM</td>
                  <td className="px-6 py-4">12 weeks</td>
                  <td className="px-6 py-4">₦75,000</td>
                  <td className="px-6 py-4">
                    <Button asChild size="sm" className="bg-jerry-700 hover:bg-jerry-800">
                      <Link href="/contact?course=web">Enroll</Link>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
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
      <section className="py-20 px-4 bg-jerry-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Skills?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enrolling in our courses is the first step toward achieving your tech career goals.
          </p>
          <Button asChild size="lg" className="bg-white text-jerry-700 hover:bg-gray-100">
            <Link href="/contact">Enroll Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Training;
