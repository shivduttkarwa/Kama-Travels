# Assets Organization Guide

## 📁 Folder Structure

```
E:\Kama Travels React\
├── public/assets/          # Static assets accessible via URL
│   ├── images/
│   │   ├── destinations/    # Destination photos (paris.jpg, tokyo.jpg, etc.)
│   │   ├── hero/           # Hero section background images
│   │   └── testimonials/   # Customer/testimonial photos
│   └── videos/             # Video files (hero-bg.mp4, etc.)
└── src/assets/             # Assets bundled with the app
    └── icons/              # SVG icons and small graphics
```

## 🎯 How to Use Each Folder

### 📷 **public/assets/images/**
- **Purpose**: Static images accessible via direct URL
- **Access**: Use `/assets/images/filename.jpg` in your code
- **Best for**: Large images, photos, backgrounds
- **Example**: 
  ```jsx
  <img src="/assets/images/destinations/paris.jpg" alt="Paris" />
  ```

### 🎬 **public/assets/videos/**
- **Purpose**: Video files for hero backgrounds, etc.
- **Access**: Use `/assets/videos/filename.mp4` in your code
- **Best for**: Background videos, promotional content
- **Example**:
  ```jsx
  <video autoPlay muted loop>
    <source src="/assets/videos/hero-travel.mp4" type="video/mp4" />
  </video>
  ```

### 🎨 **src/assets/icons/**
- **Purpose**: SVG icons and small graphics bundled with the app
- **Access**: Import them in your components
- **Best for**: Icons, logos, small graphics
- **Example**:
  ```jsx
  import PlaneIcon from '../assets/icons/plane.svg';
  ```

## 📝 Recommended File Naming

### Images:
- `destinations/`: paris.jpg, tokyo.jpg, santorini.jpg, bali.jpg, etc.
- `hero/`: hero-bg-1.jpg, hero-bg-2.jpg, etc.
- `testimonials/`: customer-1.jpg, customer-2.jpg, etc.

### Videos:
- `hero-travel.mp4` - Main hero background video
- `destinations-preview.mp4` - Destination showcase video
- `testimonial-video.mp4` - Customer testimonial video

### Icons:
- `plane.svg`, `hotel.svg`, `car.svg`, `package.svg`, etc.

## 🚀 Current Implementation

The website currently uses:
- **Hero Video**: External Vimeo URL (you can replace with local video)
- **Destination Images**: External Unsplash URLs (you can replace with local images)
- **SVG Icons**: Inline SVG components (you can move to separate files)

## 💡 Tips

1. **Image Optimization**: Use WebP format for better performance
2. **Video Compression**: Keep videos under 10MB for faster loading
3. **SVG Icons**: Use SVG for scalable icons
4. **Lazy Loading**: Consider lazy loading for images below the fold
5. **Alt Text**: Always include descriptive alt text for accessibility

## 🔄 Migration Example

To use local images instead of external URLs, update your code like this:

**Before (External URL):**
```jsx
image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=300&fit=crop'
```

**After (Local Image):**
```jsx
image: '/assets/images/destinations/paris.jpg'
```