
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-jerry-950 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-bold mb-6 animate-fade-in">
            Your Gateway to Tech Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in" style={{animationDelay: "200ms"}}>
            Jerry Concept Organization provides premium computer services and tech education to empower your digital journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "400ms"}}>
            <Button asChild size="lg" className="bg-jerry-600 hover:bg-jerry-700">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/training">View Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
