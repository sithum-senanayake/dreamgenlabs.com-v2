"use client";

import { Quote, Star } from "lucide-react";

import { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Working with YourCompany transformed our online presence. The team's expertise and attention to detail is unmatched.",
    avatar: "SJ",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, E-Store Plus",
    content: "Our e-commerce sales increased by 300% after the website redesign. Exceptional work and ongoing support.",
    avatar: "MC",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowCorp",
    content: "The digital marketing strategy they developed helped us reach our target audience effectively. Highly recommended!",
    avatar: "ER",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section id="testimonials" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              &quot;{testimonials[currentTestimonial].content}&quot;
            </p>

            <div className="flex items-center justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div>
                <div className="text-white font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-blue-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
