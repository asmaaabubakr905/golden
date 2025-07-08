import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, MapPin } from 'lucide-react';
import TourCard from '../components/TourCard';
import { getFeaturedTours } from '../data/tours';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import '../swiper-custom.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Testimonials from '../components/Testimonials';
import FeaturedTours from '../components/FeaturedTours';

const Home = () => {
  const featuredTours = getFeaturedTours();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-orange-500 to-orange-600 flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover the Magic of 
              <span className="block text-orange-300">Ancient Egypt</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Embark on unforgettable journeys through Cairo, Alexandria, Luxor, and Aswan. 
              Experience the wonders of pharaohs, temples, and timeless treasures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/tours"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
              >
                Explore Tours
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/tours"
               
                rel="noopener noreferrer"
                className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Book Now
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">Tour Destinations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <FeaturedTours />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Golden Phoenix Tours?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional travel experiences that combine comfort, 
              authenticity, and expert knowledge of Egypt's rich heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Guides</h3>
              <p className="text-gray-600">
                Our certified Egyptologists bring ancient history to life with their deep knowledge 
                and passion for Egypt's incredible heritage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Experience</h3>
              <p className="text-gray-600">
                We ensure comfort and quality in every aspect of your journey, from transportation 
                to accommodation and dining experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Trusted Service</h3>
              <p className="text-gray-600">
                With over 15 years of experience and thousands of satisfied customers, 
                we have built a reputation for reliability and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Egyptian Adventure?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the magic of Egypt with Golden Phoenix Tours. 
            Your unforgettable journey awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/tours"
              className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-100 transition-colors inline-flex items-center justify-center shadow"
            >
              Browse Tours
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="http://wa.me/201507000720"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition-colors inline-flex items-center justify-center shadow"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;