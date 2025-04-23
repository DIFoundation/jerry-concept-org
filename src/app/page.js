import Head from "next/head";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>CyberZone Cyber Café</title>
        <meta
          name="description"
          content="Fast internet, gaming, printing and tech access in one place."
        />
      </Head>

      <div>
        <main className="pt-24 bg-gradient-to-br from-gray-100 to-white">
          {/* Hero Section */}
          <section className="text-center px-6 py-20">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Welcome to CyberZone
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Your one-stop cyber café for high-speed internet, gaming,
              printing, and study space.
            </p>
            <a
              href="/services"
              className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Explore Services
            </a>
          </section>

          {/* Services Summary */}
          <Services />

          {/* Pricing Teaser */}
          <section className="bg-gray-100 py-16 text-center px-6">
            <h2 className="text-3xl font-bold mb-4">
              Affordable & Flexible Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you&apos;re gaming for an hour or working all day — we
              have packages to suit you.
            </p>
            <a
              href="/pricing"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Pricing
            </a>
          </section>

          {/* Testimonials */}
          <section className="bg-white py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                What Customers Are Saying
              </h2>
              <blockquote className="italic text-gray-700 max-w-xl mx-auto">
                “CyberZone is my favorite place to hang out and get stuff done.
                The internet is fast, and the vibe is chill.”
                <footer className="mt-4 text-sm text-gray-500">
                  — Alex J.
                </footer>
              </blockquote>
            </div>
          </section>

          <section className="bg-blue-600 text-white py-16 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Us Today</h2>
            <p className="mb-6">
              123 Tech Street, YourCity — Open 8am to 10pm daily.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-100 transition"
            >
              Contact & Directions
            </a>
          </section>
        </main>
      </div>
    </>
  );
}
