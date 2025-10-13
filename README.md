# Kama Travels - Modern React Travel Website

A stunning, modern travel website built with React, Three.js, GSAP animations, and styled-components. Features immersive 3D elements, smooth animations, and a responsive design perfect for a luxury travel company.

## ✨ Features

- **🌍 3D Hero Section** - Interactive Three.js globe with floating particles
- **🎨 Modern Design** - Sleek UI with gradient backgrounds and glass morphism effects
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **🎬 GSAP Animations** - Smooth scroll-triggered animations throughout
- **🏨 Service Showcase** - Animated cards highlighting travel services
- **🏝️ Destination Gallery** - Interactive destination filtering and previews
- **💬 Testimonials Carousel** - Auto-advancing customer reviews
- **📞 Contact Form** - Professional contact section with form validation
- **⚡ Fast Loading** - Built with Vite for optimal performance

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js
- **GSAP** - Professional-grade animations
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Additional animation library

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kama-travels-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   └── Footer.jsx      # Site footer
├── sections/           # Page sections
│   ├── Hero.jsx        # 3D hero section
│   ├── Services.jsx    # Services showcase
│   ├── Destinations.jsx # Destination gallery
│   ├── Testimonials.jsx # Customer reviews
│   └── Contact.jsx     # Contact form
├── styles/             # Styled components
│   └── GlobalStyles.js # Theme and global styles
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global CSS
```

## 🎨 Customization

### Colors & Theme
Update the theme object in `src/styles/GlobalStyles.js`:

```javascript
export const theme = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    // ... add your brand colors
  }
}
```

### Content
- **Services**: Edit the `services` array in `src/sections/Services.jsx`
- **Destinations**: Update the `destinations` array in `src/sections/Destinations.jsx`
- **Testimonials**: Modify the `testimonials` array in `src/sections/Testimonials.jsx`
- **Contact Info**: Update contact details in `src/sections/Contact.jsx`

### 3D Elements
The Three.js scene is in `src/sections/Hero.jsx`. Customize:
- Sphere material and distortion effects
- Particle systems and stars
- Camera angles and controls
- Lighting and colors

## 🌟 Key Components

### Hero Section
- Interactive 3D sphere with mesh distortion
- Floating particle background
- Animated text reveals with GSAP
- Smooth scroll indicator

### Services Section
- Hover-animated service cards
- Scroll-triggered stagger animations
- Modern glassmorphism design
- Feature lists with checkmarks

### Destinations Gallery
- Filterable destination cards
- Smooth category transitions
- Overlay effects on hover
- Responsive grid layout

### Testimonials Carousel
- Auto-advancing testimonials
- Smooth transition animations
- Star ratings display
- Navigation controls and dots

### Contact Form
- Professional form design
- Real-time input validation
- Glassmorphism styling
- Animated background elements

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: 1024px and above
- Large: 1200px and above

## ⚡ Performance

- **Lazy Loading**: Components load as needed
- **Optimized Assets**: Compressed images and efficient code splitting
- **Smooth Animations**: GPU-accelerated animations with GSAP
- **Fast Build**: Vite provides instant HMR and fast builds

## 🎭 Animation Details

- **Scroll Triggers**: Elements animate as they enter viewport
- **Hover Effects**: Interactive feedback on all clickable elements
- **Page Transitions**: Smooth loading animations
- **Micro-interactions**: Subtle animations for better UX

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support or questions, please contact:
- Email: kamatravelse@gmail.com
- Phone: +91 99717 33192
- Location: Jaipur, Rajasthan, India

---

Built with ❤️ for amazing travel experiences