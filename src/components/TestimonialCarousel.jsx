'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Graphic Design Graduate",
    content: "The graphic design course completely transformed my career path. The instructors were knowledgeable and supportive, and the facilities at Jerry Concept are top-notch.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    name: "Michael Okonkwo",
    role: "Business Owner",
    content: "Jerry Concept has been our go-to IT support for over three years. Their quick response time and professional service keep our systems running smoothly.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Amina Bello",
    role: "Programming Student",
    content: "I started with zero coding knowledge, and now I'm building my own applications! The step-by-step approach and practical projects made learning programming enjoyable.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <div className="relative bg-white rounded-lg p-6 md:p-8 shadow-md">
      <div className="mb-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">What Our Clients Say</h2>
        <p className="text-center text-gray-600">Hear from our students and service clients</p>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex-shrink-0 w-full px-4"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 relative mb-4 md:mb-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-4 border-blue-100"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <p className="italic text-gray-700">"{testimonial.content}"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prevSlide} 
          className="rounded-full"
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={18} />
        </Button>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full mx-1",
              index === activeIndex ? "bg-blue-700" : "bg-gray-300"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextSlide} 
          className="rounded-full"
          aria-label="Next testimonial"
        >
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
