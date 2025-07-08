import img1 from '../assets/abusimble aswan main image.jpg';
import img2 from '../assets/nile cruise.jpg';
import img3 from '../assets/nubian-village.jpg';
import img4 from '../assets/philae-temple,-philae-island.jpg';
import img5 from '../assets/high-dam-aswan-webp.webp';
import img6 from '../assets/Temple-of-Queen-Hatshepsut-1024x683.png';
import img7 from '../assets/273ae4b9-62f0-4fa2-a7a5-9b32d249b74a_karnak-temple-entry-tickets.png';
import img8 from '../assets/alex.jpeg';
import img9 from '../assets/Egyptian-Museum-and-Old-Cairo-TOur-1.webp';
import img10 from '../assets/pyramids.jpg';
export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  city: string;
  rating: number;
  maxGuests: number;
  featured?: boolean;
  itinerary: string[];
  includes: string[];
  excludes: string[];
  fullDescription: string;
}

export const tours: Tour[] = [
  {
    id: '1',
    title: 'Pyramids of Giza & Sphinx Tour',
    description: 'Explore the last remaining Wonder of the Ancient World and the mysterious Sphinx in this half-day adventure.',
    image: img10,
    price: 85,
    duration: '6 hours',
    location: 'Giza',
    city: 'Cairo',
    rating: 4.9,
    maxGuests: 15,
    featured: true,
    itinerary: [
      'Pick up from hotel at 8:00 AM',
      'Visit the Great Pyramid of Khufu',
      'Explore the Pyramid of Khafre',
      'Discover the Pyramid of Menkaure',
      'Visit the Great Sphinx',
      'Photo stop at the panoramic view',
      'Return to hotel'
    ],
    includes: [
      'Hotel pickup and drop-off',
      'Professional tour guide',
      'Entrance fees to Giza complex',
      'Bottled water',
      'All taxes and service charges'
    ],
    excludes: [
      'Entrance inside the Great Pyramid (optional)',
      'Lunch',
      'Personal expenses',
      'Gratuities'
    ],
    fullDescription: 'Embark on an unforgettable journey to the Pyramids of Giza, one of the Seven Wonders of the Ancient World. This comprehensive tour takes you through 4,500 years of history as you explore the Great Pyramid of Khufu, the Pyramid of Khafre, and the Pyramid of Menkaure. Stand in awe before the enigmatic Sphinx and learn about the fascinating theories surrounding its creation. Your expert guide will share captivating stories about the pharaohs and the incredible engineering feats that created these monuments.'
  },
  {
    id: '2',
    title: 'Egyptian Museum & Old Cairo Tour',
    description: 'Discover the treasures of ancient Egypt and explore the historic Islamic and Coptic quarters of Old Cairo.',
    image:img9,
    price: 75,
    duration: '8 hours',
    location: 'Central Cairo',
    city: 'Cairo',
    rating: 4.8,
    maxGuests: 20,
    featured: true,
    itinerary: [
      'Morning pickup from hotel',
      'Visit Egyptian Museum',
      'Explore Tutankhamun treasures',
      'Lunch at local restaurant',
      'Tour Coptic Cairo',
      'Visit Hanging Church',
      'Explore Ben Ezra Synagogue',
      'Walk through Khan el-Khalili Bazaar'
    ],
    includes: [
      'Hotel pickup and drop-off',
      'Professional Egyptologist guide',
      'Entrance fees to all sites',
      'Lunch at local restaurant',
      'Bottled water',
      'All taxes and service charges'
    ],
    excludes: [
      'Entrance to Royal Mummy Room (optional)',
      'Personal shopping',
      'Gratuities',
      'Drinks during lunch'
    ],
    fullDescription: 'Immerse yourself in the rich history of ancient and medieval Egypt with this comprehensive full-day tour. Begin at the world-renowned Egyptian Museum, home to the largest collection of ancient Egyptian artifacts, including the golden treasures of Tutankhamun. After lunch, journey through Old Cairo to discover the religious heritage of the city, visiting the Hanging Church, one of the oldest Christian churches in Egypt, and the historic Ben Ezra Synagogue. End your day browsing the vibrant Khan el-Khalili bazaar, where you can shop for authentic Egyptian crafts and souvenirs.'
  },
  {
    id: '3',
    title: 'Alexandria Day Trip',
    description: 'Visit the Pearl of the Mediterranean with its ancient library, citadel, and Roman amphitheater.',
    image: img8,
    price: 120,
    duration: '12 hours',
    location: 'Alexandria',
    city: 'Alexandria',
    rating: 4.7,
    maxGuests: 12,
    itinerary: [
      'Early morning departure from Cairo',
      'Visit Pompey\'s Pillar',
      'Explore the Catacombs of Kom el Shoqafa',
      'Lunch with sea view',
      'Tour the new Library of Alexandria',
      'Visit Qaitbay Citadel',
      'Walk along the Corniche',
      'Return to Cairo'
    ],
    includes: [
      'Air-conditioned transportation',
      'Professional tour guide',
      'Entrance fees to all sites',
      'Seafood lunch',
      'Bottled water',
      'All taxes and service charges'
    ],
    excludes: [
      'Hotel pickup (meeting point in Cairo)',
      'Personal expenses',
      'Gratuities',
      'Optional activities'
    ],
    fullDescription: 'Escape to Alexandria, the legendary city founded by Alexander the Great and once home to the famous ancient library. This full-day excursion takes you along the Mediterranean coast to explore the city\'s rich Greco-Roman heritage. Visit the impressive Pompey\'s Pillar, descend into the mysterious Catacombs of Kom el Shoqafa, and explore the modern Library of Alexandria. The tour includes a visit to the medieval Qaitbay Citadel, built on the site of the ancient Lighthouse of Alexandria, one of the Seven Wonders of the Ancient World.'
  },
  {
    id: '4',
    title: 'Luxor Temple & Karnak Complex',
    description: 'Explore the magnificent temples of ancient Thebes in the world\'s greatest open-air museum.',
    image: img7,
    price: 95,
    duration: '8 hours',
    location: 'Luxor East Bank',
    city: 'Luxor',
    rating: 4.9,
    maxGuests: 16,
    featured: true,
    itinerary: [
      'Morning pickup from hotel',
      'Visit Karnak Temple Complex',
      'Explore the Great Hypostyle Hall',
      'Lunch at local restaurant',
      'Tour Luxor Temple',
      'Walk the Avenue of Sphinxes',
      'Sunset viewing opportunity',
      'Return to hotel'
    ],
    includes: [
      'Hotel pickup and drop-off',
      'Professional Egyptologist guide',
      'Entrance fees to both temples',
      'Lunch at local restaurant',
      'Bottled water',
      'All taxes and service charges'
    ],
    excludes: [
      'Sound and Light show (optional)',
      'Personal expenses',
      'Gratuities',
      'Drinks during lunch'
    ],
    fullDescription: 'Discover the religious capital of ancient Egypt with this comprehensive tour of Luxor\'s East Bank temples. Begin at the magnificent Karnak Temple Complex, the largest religious building ever constructed, featuring the awe-inspiring Great Hypostyle Hall with its 134 massive columns. After lunch, explore the beautiful Luxor Temple, connected to Karnak by the ancient Avenue of Sphinxes. Learn about the religious ceremonies and festivals that took place here over 3,000 years ago, and witness the sunset casting golden light on these ancient monuments.'
  },
  {
    id: '5',
    title: 'Valley of the Kings & Hatshepsut Temple',
    description: 'Journey to the royal burial ground and visit the magnificent mortuary temple of Egypt\'s female pharaoh.',
    image: img6,
    price: 110,
    duration: '8 hours',
    location: 'Luxor West Bank',
    city: 'Luxor',
    rating: 4.8,
    maxGuests: 14,
    itinerary: [
      'Morning pickup from hotel',
      'Visit Valley of the Kings',
      'Explore three royal tombs',
      'Visit Hatshepsut Temple',
      'Lunch with Nile view',
      'Stop at Colossi of Memnon',
      'Optional alabaster factory visit',
      'Return to hotel'
    ],
    includes: [
      'Hotel pickup and drop-off',
      'Professional Egyptologist guide',
      'Entrance fees to all sites',
      'Lunch at local restaurant',
      'Bottled water',
      'All taxes and service charges'
    ],
    excludes: [
      'Entrance to Tutankhamun\'s tomb (optional)',
      'Personal expenses',
      'Gratuities',
      'Additional tomb visits'
    ],
    fullDescription: 'Explore the legendary Valley of the Kings, where pharaohs were buried for over 500 years. Visit three beautifully decorated royal tombs and learn about ancient Egyptian burial practices and beliefs about the afterlife. Continue to the stunning Hatshepsut Temple, the mortuary temple of Egypt\'s most successful female pharaoh, renowned for its unique architectural design carved into the cliff face. The tour concludes with a stop at the Colossi of Memnon, two massive stone statues that have stood guard over the Theban necropolis for over 3,400 years.'
  },
  {
    id: '6',
    title: 'Aswan High Dam ',
    description: 'Discover modern engineering marvels and ancient temples relocated to save them from rising waters.',
    image: img5,
    price: 85,
    duration: '6 hours',
    location: 'Aswan',
    city: 'Aswan',
    rating: 4.7,
    maxGuests: 18,
    itinerary: [
      'Morning pickup from hotel',
      'Visit Aswan High Dam',
      'Boat ride to Philae Temple',
      'Explore Temple of Isis',
      'Lunch at Nubian restaurant',
      'Visit Nubian Village',
      'Felucca sailing on the Nile',
      'Return to hotel'
    ],
    includes: [
      'Hotel pickup and drop-off',
      'Professional tour guide',
      'Entrance fees to all sites',
      'Boat transfers',
      'Lunch at Nubian restaurant',
      'Bottled water',
      'All taxes and service charges'
    ],
    excludes: [
      'Sound and Light show at Philae (optional)',
      'Personal expenses',
      'Gratuities',
      'Shopping at Nubian village'
    ],
    fullDescription: 'Experience the perfect blend of ancient history and modern engineering in beautiful Aswan. Start with a visit to the impressive Aswan High Dam, one of the world\'s largest embankment dams, which created Lake Nasser and revolutionized agriculture in Egypt. Take a boat ride to Philae Temple, dedicated to the goddess Isis, which was carefully relocated stone by stone to save it from the rising waters of the Nile. The tour includes a visit to a traditional Nubian village where you can experience local culture and enjoy a peaceful felucca sailing experience on the Nile River.'
  },
  {
    id: '7',
    title: 'Abu Simbel Temples Day Trip',
    description: 'Marvel at Ramses II\'s colossal temples, one of Egypt\'s most spectacular archaeological sites.',
    image: img1,
    price: 180,
    duration: '10 hours',
    location: 'Abu Simbel',
    city: 'Aswan',
    rating: 4.9,
    maxGuests: 10,
    featured: true,
    itinerary: [
      'Very early morning departure (4:00 AM)',
      'Drive through the desert to Abu Simbel',
      'Visit the Great Temple of Ramses II',
      'Explore the Small Temple of Nefertari',
      'Learn about the temple relocation project',
      'Lunch at local restaurant',
      'Return journey to Aswan',
      'Evening arrival at hotel'
    ],
    includes: [
      'Hotel pickup and drop-off',
      'Air-conditioned transportation',
      'Professional Egyptologist guide',
      'Entrance fees to both temples',
      'Lunch at local restaurant',
      'Bottled water',
      'All taxes and service charges'
    ],
    excludes: [
      'Early morning breakfast',
      'Personal expenses',
      'Gratuities',
      'Optional activities'
    ],
    fullDescription: 'Embark on an extraordinary journey to Abu Simbel, one of Egypt\'s most magnificent and remote archaeological sites. The Great Temple of Ramses II features four colossal statues of the pharaoh carved into the rock face, each standing 20 meters tall. The smaller temple is dedicated to Queen Nefertari, Ramses II\'s beloved wife. Learn about the incredible UNESCO project that moved these temples stone by stone to save them from the rising waters of Lake Nasser. This is truly one of Egypt\'s most spectacular sights and a testament to both ancient and modern engineering prowess.'
  },
  {
    id: '8',
    title: 'Nile Felucca Sunset Cruise',
    description: 'Enjoy a peaceful sailing experience on the Nile River aboard a traditional Egyptian sailboat.',
    image: img2,
    price: 45,
    duration: '3 hours',
    location: 'Aswan',
    city: 'Aswan',
    rating: 4.6,
    maxGuests: 8,
    itinerary: [
      'Afternoon pickup from hotel',
      'Board traditional felucca',
      'Sail around Elephantine Island',
      'Visit Botanical Garden',
      'Enjoy refreshments on board',
      'Watch the sunset over the Nile',
      'Return to dock',
      'Transfer back to hotel'
    ],
    includes: [
      'Hotel pickup and drop-off',
      'Professional boat captain',
      'Felucca sailing experience',
      'Refreshments (tea, coffee, soft drinks)',
      'Entrance to Botanical Garden',
      'All taxes and service charges'
    ],
    excludes: [
      'Lunch or dinner',
      'Personal expenses',
      'Gratuities',
      'Additional drinks'
    ],
    fullDescription: 'Experience the timeless beauty of the Nile River with a peaceful felucca sailing adventure. These traditional wooden sailboats have been used on the Nile for thousands of years and offer the perfect way to enjoy the river\'s serenity. Sail around the beautiful Elephantine Island, visit the lush Botanical Garden with its exotic plants and trees, and enjoy refreshments while taking in the stunning scenery. As the sun sets over the Nile, you\'ll understand why this river has been the lifeblood of Egypt for millennia. This relaxing experience is perfect for all ages and provides unforgettable photo opportunities.'
  },
  {
    id: '9',
    title: 'Philae Temple',
    description: 'Discover the ancient temple of Isis, dedicated to the goddess of fertility and motherhood.',
    image: img4,
    price: 85,
    duration: '4 hours',
    location: 'Aswan',
    city: 'Aswan',
    rating: 4.7,
    maxGuests: 18,
    itinerary: [
      'Morning pickup from hotel',
      'Visit Philae Temple',
      'Explore Temple of Isis',
      'Lunch at Nubian restaurant',
      'Return to hotel'
    ],
    includes: [
      'Hotel pickup and drop-off',
      'Professional tour guide',
      'Entrance fees to all sites',
      'Lunch at Nubian restaurant',
      'Bottled water',
      'All taxes and service charges'
    ],
    excludes: [
      'Personal expenses',
      'Gratuities',
    ],
    fullDescription: 'Experience the perfect blend of ancient history and modern engineering in beautiful Aswan. Start with a visit to the impressive Aswan High Dam, one of the world\'s largest embankment dams, which created Lake Nasser and revolutionized agriculture in Egypt. Take a boat ride to Philae Temple, dedicated to the goddess Isis, which was carefully relocated stone by stone to save it from the rising waters of the Nile. The tour includes a visit to a traditional Nubian village where you can experience local culture and enjoy a peaceful felucca sailing experience on the Nile River.'
  },
  {
    id: '10',
    title: 'Nubian Village',
    description: 'Discover the traditional Nubian village of Aswan, known for its unique culture and traditional way of life.',
    image:  img3,
    price: 85,
    duration: '4 hours',
    location: 'Aswan',
    city: 'Aswan',
    rating: 4.7,
    maxGuests: 18,
    itinerary: [
      'Morning pickup from hotel',
      'Visit Nubian Village',
      'Explore traditional Nubian culture',
      'Lunch at Nubian restaurant',
      'Return to hotel'
    ],
    includes: [
      'Hotel pickup and drop-off',
      'Professional tour guide',
      'Entrance fees to all sites',
      'Lunch at Nubian restaurant',
      'Bottled water',
      'All taxes and service charges'
    ],
    excludes: [
      'Personal expenses',
      'Gratuities',
    ],
    fullDescription: 'Experience the perfect blend of ancient history and modern engineering in beautiful Aswan. Start with a visit to the impressive Aswan High Dam, one of the world\'s largest embankment dams, which created Lake Nasser and revolutionized agriculture in Egypt. Take a boat ride to Philae Temple, dedicated to the goddess Isis, which was carefully relocated stone by stone to save it from the rising waters of the Nile. The tour includes a visit to a traditional Nubian village where you can experience local culture and enjoy a peaceful felucca sailing experience on the Nile River.'
  },
];

export const cities = ['All', 'Cairo', 'Alexandria', 'Luxor', 'Aswan'];

export const getFeaturedTours = () => tours.filter(tour => tour.featured);
export const getToursByCity = (city: string) => 
  city === 'All' ? tours : tours.filter(tour => tour.city === city);
export const getTourById = (id: string) => tours.find(tour => tour.id === id);