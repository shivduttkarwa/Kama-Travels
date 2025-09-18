// Example: How to update Destinations.jsx to use local images

// 1. Import the assets constants
import { IMAGES } from '../constants/assets';

// 2. Update the destinations array
const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    category: 'Europe',
    image: IMAGES.DESTINATIONS.PARIS, // Use local image instead of external URL
    rating: 4.8,
    price: 599,
    description: 'City of lights with iconic landmarks, world-class museums, and romantic atmosphere.',
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    category: 'Asia',
    image: IMAGES.DESTINATIONS.TOKYO, // Use local image
    rating: 4.9,
    price: 899,
    description: 'Modern metropolis blending traditional culture with cutting-edge technology.',
    badge: 'Trending'
  },
  {
    id: 3,
    name: 'New York, USA',
    category: 'Americas',
    image: IMAGES.DESTINATIONS.NEW_YORK, // Use local image
    rating: 4.7,
    price: 749,
    description: 'The city that never sleeps, featuring Broadway shows, world-class dining, and iconic skyline.',
    badge: 'Popular'
  },
  // ... rest of destinations
];

// Alternative: Direct path usage (without constants)
// image: '/assets/images/destinations/paris.jpg'

// 3. The CardImage component will automatically use these local images
const CardImage = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  /* ... rest of styles */
`;