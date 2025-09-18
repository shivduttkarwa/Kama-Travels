// Image and Video Constants
// Use these constants to manage all your media assets in one place

export const IMAGES = {
  // Hero section images
  HERO: {
    BACKGROUND_1: '/assets/images/hero/hero-bg-1.jpg',
    BACKGROUND_2: '/assets/images/hero/hero-bg-2.jpg',
    BACKGROUND_3: '/assets/images/hero/hero-bg-3.jpg',
  },

  // Destination images
  DESTINATIONS: {
    PARIS: '/assets/images/destinations/paris.jpg',
    TOKYO: '/assets/images/destinations/tokyo.jpg',
    NEW_YORK: '/assets/images/destinations/new-york.jpg',
    SANTORINI: '/assets/images/destinations/santorini.jpg',
    BALI: '/assets/images/destinations/bali.jpg',
    SWISS_ALPS: '/assets/images/destinations/swiss-alps.jpg',
    LONDON: '/assets/images/destinations/london.jpg',
    ROME: '/assets/images/destinations/rome.jpg',
    DUBAI: '/assets/images/destinations/dubai.jpg',
    SINGAPORE: '/assets/images/destinations/singapore.jpg',
  },

  // Testimonial images
  TESTIMONIALS: {
    CUSTOMER_1: '/assets/images/testimonials/customer-1.jpg',
    CUSTOMER_2: '/assets/images/testimonials/customer-2.jpg',
    CUSTOMER_3: '/assets/images/testimonials/customer-3.jpg',
    CUSTOMER_4: '/assets/images/testimonials/customer-4.jpg',
  },

  // Service/feature images
  SERVICES: {
    FLIGHT_BOOKING: '/assets/images/services/flight-booking.jpg',
    HOTEL_BOOKING: '/assets/images/services/hotel-booking.jpg',
    CAR_RENTAL: '/assets/images/services/car-rental.jpg',
    TRAVEL_INSURANCE: '/assets/images/services/travel-insurance.jpg',
  },
};

export const VIDEOS = {
  // Hero background videos
  HERO: {
    MAIN_BACKGROUND: '/assets/videos/hero-travel.mp4',
    FALLBACK_BACKGROUND: '/assets/videos/hero-travel-compressed.mp4',
  },

  // Destination showcase videos
  DESTINATIONS: {
    EUROPE_SHOWCASE: '/assets/videos/europe-destinations.mp4',
    ASIA_SHOWCASE: '/assets/videos/asia-destinations.mp4',
    AMERICAS_SHOWCASE: '/assets/videos/americas-destinations.mp4',
  },

  // Testimonial videos
  TESTIMONIALS: {
    CUSTOMER_STORY_1: '/assets/videos/testimonial-1.mp4',
    CUSTOMER_STORY_2: '/assets/videos/testimonial-2.mp4',
  },
};

// Icon paths (if using separate SVG files instead of inline)
export const ICONS = {
  SERVICES: {
    FLIGHT: '/assets/icons/flight.svg',
    HOTEL: '/assets/icons/hotel.svg',
    CAR: '/assets/icons/car.svg',
    PACKAGE: '/assets/icons/package.svg',
    INSURANCE: '/assets/icons/insurance.svg',
    MOBILE: '/assets/icons/mobile.svg',
  },
  FEATURES: {
    PRICE_GUARANTEE: '/assets/icons/price-guarantee.svg',
    SECURE_BOOKING: '/assets/icons/secure-booking.svg',
    SUPPORT_24_7: '/assets/icons/support-24-7.svg',
    INSTANT_CONFIRMATION: '/assets/icons/instant-confirmation.svg',
  },
  SOCIAL: {
    FACEBOOK: '/assets/icons/facebook.svg',
    TWITTER: '/assets/icons/twitter.svg',
    INSTAGRAM: '/assets/icons/instagram.svg',
    LINKEDIN: '/assets/icons/linkedin.svg',
  },
};

// Usage example:
// import { IMAGES, VIDEOS } from './src/constants/assets';
// 
// <img src={IMAGES.DESTINATIONS.PARIS} alt="Paris destination" />
// <video src={VIDEOS.HERO.MAIN_BACKGROUND} autoPlay muted loop />