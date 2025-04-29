"use client";
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ContactInfo from "@/components/ContactInfo";
import CourseSubject from "@/hooks/courseSubject";
import { faq } from "@/data/faq";

const Contact = () => {
  const { toast } = useToast();
  const QandA = faq;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    submitting: false,
    submitted: false,
  });

  const handleSetSubject = (subject) => {
    setFormState((prev) => ({
      ...prev,
      subject,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, submitting: true }));

    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        submitting: false,
        submitted: true,
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <div>
      <Suspense
        fallback={
          <p className="text-center text-gray-500">Loading course info...</p>
        }
      >
        <CourseSubject onSetSubject={handleSetSubject} />
      </Suspense>

      {/* Contact Hero */}
      <section className="bg-blue-950 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Get in touch with our team for more information about our services
            and training programs.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>

              {formState.submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="text-green-600" size={48} />
                  </div>
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We&apos;ll get back
                    to you shortly.
                  </p>
                  <Button
                    className="mt-6 bg-blue-700 text-white hover:bg-blue-800"
                    onClick={() =>
                      setFormState((prev) => ({ ...prev, submitted: false }))
                    }
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-700 text-white hover:bg-blue-800"
                    disabled={formState.submitting}
                  >
                    {formState.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
              <div className="mt-8 flex flex-row items-center">
                <p className="py-2 px-2 bg-green-300/50 text-green-900 font-bold rounded-l-lg">N.B</p>
                <marquee className= "py-2 px-5 bg-green-200/50 text-green-700 rounded-r-lg ">For Industrial training or SIWES programme, send your application throug mail and attach all neccesary documents</marquee>
              </div>
             
            </div>

            <div>
              <ContactInfo />

              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
                <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.3569989887434!2d4.2633029!3d8.1595611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370da61768044d%3A0x1c73eecf3ce19bd6!2sKenny%20Concept%20Cyber%20Cafe!5e0!3m2!1sen!2sng!4v1745841219978!5m2!1sen!2sng"
                    width="650"
                    height="450"
                    className="border-0 w-full h-full"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about our services and
              training programs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {QandA.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md mb-6"
              >
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
