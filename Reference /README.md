# Origen Integrated Systems Pvt. Ltd. - Website

A modern, responsive website for Origen Integrated Systems Pvt. Ltd., a software training and development company specializing in embedded systems and academic internship opportunities.

## Features

### 🎨 Design Highlights
- **Solar System Animation**: Unique landing page with services rotating around a central hub (inspired by planetary orbits)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Dark theme with vibrant orange accents
- **Smooth Animations**: Engaging transitions and hover effects

### 📊 Key Statistics Displayed
- 10,000+ students trained
- 500+ courses available
- 100+ college partners
- 2,000+ projects completed

### 🎓 Training Programs/Services
1. **Web Development** - Frontend & Backend, Responsive Design, Modern Frameworks
2. **Data Science** - Python & R, Data Visualization, Statistical Analysis
3. **AI/ML** - Neural Networks, NLP, Computer Vision
4. **VLSI Design** - Digital & Analog Design, Verilog & VHDL, ASIC & FPGA
5. **Embedded Systems** - ARM Programming, RTOS, IoT Applications

### 📱 Sections
- **Hero Section**: Solar system animation with rotating service icons
- **About Section**: Company overview and highlights
- **Services Section**: Detailed training program cards
- **Testimonials Section**: Student success stories
- **Footer**: Contact information and quick links

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom animations, flexbox, grid, responsive design
- **JavaScript**: Interactive features, scroll animations, mobile navigation

## File Structure

```
OIS/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md          # Project documentation
```

## Features Implemented

### 1. Solar System Animation
- Central "sun" displaying project count (2000+)
- 5 orbiting "planets" representing different services
- Smooth rotation animations at different speeds
- Counter-rotation to keep labels readable
- Hover effects on planets
- Responsive sizing for different screen sizes

### 2. Responsive Design
- **Desktop** (1024px+): Full two-column layout with large solar system
- **Tablet** (768px-1024px): Adjusted layout with medium solar system
- **Mobile** (< 768px): Single column layout with hamburger menu
- **Small Mobile** (< 480px): Optimized for small screens

### 3. Interactive Elements
- Smooth scroll navigation
- Mobile hamburger menu
- Animated statistics counters
- Fade-in animations on scroll
- Parallax effect on solar system
- Button ripple effects
- Card hover effects
- Active navigation highlighting

### 4. Performance Optimizations
- CSS animations (GPU-accelerated)
- Intersection Observer for scroll animations
- Optimized font loading
- Minimal JavaScript dependencies

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Navigate**: Use the navigation menu to jump to different sections
3. **Mobile**: On mobile devices, click the hamburger menu to access navigation

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
    --dark-bg: #0a0e27;
    --darker-bg: #050814;
}
```

### Content
- Update company information in `index.html`
- Modify statistics in the hero section
- Add/remove services in the services section
- Update testimonials with real client feedback

### Animation Speed
Adjust orbit rotation speeds in `styles.css`:
```css
.orbit-1 { animation: rotate 20s linear infinite; }
.orbit-2 { animation: rotate 30s linear infinite; }
/* etc. */
```

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential additions:
- Course catalog with filtering
- Online enrollment system
- Student portal login
- Blog section for tech articles
- Live chat support
- Video testimonials
- Interactive course demos
- Alumni success stories gallery

## Credits

Designed and developed for Origen Integrated Systems Pvt. Ltd.

## License

© 2025 Origen Integrated Systems Pvt. Ltd. All rights reserved.

