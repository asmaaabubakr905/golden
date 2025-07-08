import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, Star, Calendar, CheckCircle, XCircle, X } from 'lucide-react';
import { getTourById } from '../data/tours';

const TourDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [formError, setFormError] = useState('');
  
  const tour = getTourById(id || '');
  
  if (!tour) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-8">The tour you're looking for doesn't exist.</p>
          <Link 
            to="/tours"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Back to Tours
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setFormError('Please fill in all fields.');
      return;
    }
    setFormError('');
    const message = `Hello!\nI want to book the following tour:\n\nTour: ${tour.title}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/201507000720?text=${encodedMessage}`, '_blank');
    setShowModal(false);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-3xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn border border-orange-100">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 transition-colors"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-orange-500 mb-2 text-center">Book This Tour</h2>
            <p className="text-gray-600 text-center mb-6">Fill in your details and we will contact you on WhatsApp.</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Tour</label>
                <input
                  type="text"
                  value={tour.title}
                  readOnly
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              {formError && <div className="text-red-500 text-sm text-center">{formError}</div>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all mt-2"
              >
                Send Booking via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 rounded-b-3xl overflow-hidden shadow-xl">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              to="/tours"
              className="inline-flex items-center text-white hover:text-orange-300 transition-colors mb-4 drop-shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Tours
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">{tour.title}</h1>
            <div className="flex flex-wrap items-center text-white space-x-6 drop-shadow-lg">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>{tour.rating}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Max {tour.maxGuests}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="border-b border-orange-200 mb-8 bg-orange-50 rounded-xl shadow-sm px-2">
                <nav className="flex space-x-4 sm:space-x-8 py-2">
                  {[
                    { id: 'overview', label: <><CheckCircle className='inline w-5 h-5 mr-1 text-orange-500' /> Overview</> },
                    { id: 'itinerary', label: <><Calendar className='inline w-5 h-5 mr-1 text-orange-500' /> Itinerary</> },
                    { id: 'includes', label: <><Star className='inline w-5 h-5 mr-1 text-orange-500' /> Includes/Excludes</> }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm
                        ${activeTab === tab.id
                          ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md'
                          : 'bg-white text-orange-500 hover:bg-orange-100 border border-orange-100'}
                      `}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="prose prose-lg max-w-none">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4 flex items-center"><CheckCircle className="w-6 h-6 mr-2 text-orange-400" />Tour Overview</h3>
                    <p className="text-gray-700 mb-6">{tour.fullDescription}</p>
                    <p className="text-gray-600">{tour.description}</p>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4 flex items-center"><Calendar className="w-6 h-6 mr-2 text-orange-400" />Daily Itinerary</h3>
                    <div className="space-y-4">
                      {tour.itinerary.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-medium shadow">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 pt-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'includes' && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-orange-500 mb-4 flex items-center">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                          Includes
                        </h3>
                        <ul className="space-y-2">
                          {tour.includes.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-orange-500 mb-4 flex items-center">
                          <XCircle className="w-6 h-6 text-red-500 mr-2" />
                          Excludes
                        </h3>
                        <ul className="space-y-2">
                          {tour.excludes.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-orange-200 rounded-2xl p-8 sticky top-24 shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    ${tour.price}
                    <span className="text-lg font-normal text-gray-500"> /person</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{tour.rating} ({Math.floor(Math.random() * 200) + 50} reviews)</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-orange-100">
                    <span className="text-gray-600 flex items-center"><Clock className="w-4 h-4 mr-1 text-orange-400" />Duration</span>
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-orange-100">
                    <span className="text-gray-600 flex items-center"><Users className="w-4 h-4 mr-1 text-orange-400" />Max Guests</span>
                    <span className="font-medium">{tour.maxGuests} people</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-orange-100">
                    <span className="text-gray-600 flex items-center"><MapPin className="w-4 h-4 mr-1 text-orange-400" />Location</span>
                    <span className="font-medium">{tour.location}</span>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Now</span>
                </button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Questions? 
                    <a 
                      href="http://wa.me/201507000720" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-orange-500 hover:text-orange-600 ml-1"
                    >
                      Contact us on WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetails;