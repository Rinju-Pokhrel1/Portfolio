# Portfolio Website

A modern, responsive portfolio website built with HTML, Tailwind CSS, and JavaScript. The site dynamically loads content from a JSON configuration file, making it easy to update personal information and content without modifying the code.

## 🌟 Features

- **📱 Mobile-First Design**: Fully responsive layout that works on all devices
- **🎯 SEO Optimized**: Complete meta tags, structured data, and semantic HTML
- **♿ Accessible**: ARIA labels, keyboard navigation, and high contrast support
- **🚀 Dynamic Content**: All content loaded from `info.json` configuration file
- **🎨 Modern UI**: Clean, professional design with smooth animations
- **🔗 Social Integration**: Direct links to GitHub and LinkedIn profiles
- **⚡ Fast Loading**: Optimized assets and efficient code structure
- **🎭 Interactive Navigation**: Smooth section transitions and hover effects

## 📂 File Structure

```
portfolio/
├── index.html          # Main HTML file with SEO meta tags
├── script.js           # JavaScript for dynamic content loading
├── styles.css          # Custom CSS with mobile-first approach
├── info.json           # Configuration file with all personal data
└── README.md           # This documentation file
```

## 🚀 Quick Start

1. **Clone or download** the project files
2. **Edit `info.json`** with your personal information
3. **Open `index.html`** in a web browser or serve it using a local server

### 🖥️ Running with a Local Server

For the JSON loading to work properly (especially in some browsers), serve the files using a local server:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Python 2
python -m SimpleHTTPServer 8080

# Using Node.js (if you have live-server installed)
npx live-server --port=8080

# Using PHP
php -S localhost:8080
```

Then visit `http://localhost:8080` in your browser.

## 📱 Mobile Optimization

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px  
- **Mobile**: 320px - 767px

### Mobile Features
- Touch-friendly button sizes (minimum 44px)
- Optimized typography scaling
- Horizontal scrolling navigation on small screens
- Flexible profile image sizing
- Improved contact information layout



## 🔧 Technologies Used

- **HTML5**: Semantic markup with proper accessibility
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **JavaScript (ES6+)**: Modern JavaScript for dynamic content
- **Font Awesome**: Professional icon library
- **JSON**: Structured data configuration

## 🎯 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD markup for search engines
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive alt attributes for images
- **Canonical URLs**: Proper URL canonicalization

## ♿ Accessibility Features

- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Indicators**: Clear focus states for all interactive elements
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user motion preferences
- **Touch Targets**: Minimum 44px touch targets for mobile

## 🌐 Browser Support

This portfolio works in all modern browsers:
- ✅ Chrome/Chromium 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 Testing

### Desktop Testing
- Test on multiple screen sizes using browser dev tools
- Verify navigation functionality
- Check social links and external links

### Mobile Testing
- Test on actual devices when possible
- Use Chrome DevTools mobile simulation
- Verify touch interactions work properly
- Test form inputs and navigation

### Accessibility Testing
- Use screen reader (VoiceOver on Mac, NVDA on Windows)
- Navigate using only keyboard (Tab, Enter, Space)
- Test with high contrast mode enabled

## 📈 Performance Tips

- **Images**: Use optimized image formats (WebP, AVIF)
- **Fonts**: Consider using system fonts for faster loading
- **CDN**: Host on a CDN for global performance
- **Caching**: Set appropriate cache headers

## 🤝 Contributing

Feel free to fork this project and make it your own! If you have suggestions for improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Rinju Pokhrel**
