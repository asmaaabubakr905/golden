import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Img from '../assets/R.jpeg';

const reviews = [
  {
    name: 'Jess',
    text: 'The whole tour was out of this world and it was so humbling. Every day was well organized we didn\'t experience any issues.',
    subtitle: 'Exceeded our expectations',
    rating: 4.96,
    location: 'New York, USA',
    avatar: Img
  },
  {
    name: 'Ahmed',
    text: 'Amazing experience! The guides were knowledgeable and friendly. Highly recommended for anyone seeking adventure.',
    subtitle: 'Wonderful trip',
    rating: 5,
    location: 'Dubai, UAE',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Sara',
    text: 'Loved every moment. The organization and attention to detail were top-notch. Will definitely book again!',
    subtitle: 'Unforgettable journey',
    rating: 4.8,
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  },
];

const totalReviews = 1739;
const reviewImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied adventurers who've experienced the journey of a lifetime
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image with stats */}
          <div className="relative">
            <div className="relative group">
              <img
                src={reviewImg}
                alt="Happy travelers"
                className="rounded-3xl object-cover w-full h-[500px] shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{currentReview.rating}</span>
                </div>
                <p className="text-gray-600 font-medium">{totalReviews.toLocaleString()} Reviews</p>
              </div>
            </div>
          </div>

          {/* Right side - Review slider */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative min-h-[400px] flex flex-col justify-between">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Review content */}
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                <div className="mb-8">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                    "{currentReview.text}"
                  </p>
                  <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full"></div>
                </div>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{currentReview.name}</h4>
                    <p className="text-orange-600 font-medium">{currentReview.subtitle}</p>
                    <p className="text-gray-500 text-sm">{currentReview.location}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentIndex 
                          ? 'bg-gradient-to-r from-orange-500 to-amber-600 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 flex items-center justify-center transition-all duration-200 group"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
            <p className="text-gray-600">Countries Visited</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-600 mb-2">15k+</div>
            <p className="text-gray-600">Happy Travelers</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;