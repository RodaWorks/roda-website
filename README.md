# roda-website
AI generated version of Roda website

Documentation
# Assets Directory

Place your media files here for the Roda website.

## 📁 Recommended Structure

```
assets/
├── images/
│   ├── logo/
│   │   ├── logo.svg
│   │   ├── logo.png
│   │   ├── logo-white.svg
│   │   └── favicon.ico
│   ├── hero/
│   │   ├── hero-background.jpg
│   │   └── hero-background.webp
│   ├── services/
│   │   ├── wheel-repair.jpg
│   │   ├── cnc-machining.jpg
│   │   ├── custom-design.jpg
│   │   ├── 3d-printing.jpg
│   │   └── refinishing.jpg
│   ├── gallery/
│   │   ├── before-after-1.jpg
│   │   ├── before-after-2.jpg
│   │   ├── workshop-cnc.jpg
│   │   ├── workshop-paint.jpg
│   │   └── completed-wheels/
│   └── team/
│       ├── team-member-1.jpg
│       └── workshop-team.jpg
├── icons/
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── mstile-150x150.png
├── documents/
│   ├── roda-brochure.pdf
│   ├── service-guide.pdf
│   └── warranty-information.pdf
└── videos/ (optional)
    ├── wheel-repair-process.mp4
    └── cnc-machining-demo.mp4
```

## 🖼️ Image Guidelines

### Formats
- **Logo**: SVG preferred, PNG fallback
- **Photos**: WebP with JPG fallback for better compression
- **Icons**: SVG for scalability, PNG for compatibility

### Recommended Sizes
- **Hero images**: 1920x1080px minimum (16:9 ratio)
- **Service cards**: 400x300px (4:3 ratio)
- **Gallery images**: 800x600px or 1200x900px
- **Logo**: Multiple sizes (32px, 64px, 128px, 256px, 512px)
- **Favicon**: 32x32px, 16x16px

### Optimization Tips
- Compress images before upload (use tools like TinyPNG, ImageOptim)
- Use WebP format for modern browsers with JPG fallbacks
- Provide retina-ready versions (@2x) for high-DPI displays
- Keep file sizes under 500KB for web images
- Use progressive JPEG for larger images

## 🔗 Usage Examples

### In HTML:
```html
<!-- Logo -->
<img src="assets/images/logo/logo.svg" alt="Roda Logo" width="200">

<!-- Hero background -->
<section class="hero" style="background-image: url('assets/images/hero/hero-background.jpg')">

<!-- Service images -->
<img src="assets/images/services/wheel-repair.jpg" alt="Professional wheel repair service">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="assets/icons/favicon.ico">
```

### In CSS:
```css
.hero {
    background-image: url('../assets/images/hero/hero-background.webp');
    background-fallback: url('../assets/images/hero/hero-background.jpg');
}

.service-card-repair {
    background-image: url('../assets/images/services/wheel-repair.jpg');
}
```

## 📷 Photo Recommendations

### Hero Section
- High-quality workshop photos
- CNC machining in action
- Professional wheel refinishing
- Before/after transformations

### Services Section
- Close-up of CNC lathe operation
- Spray painting booth
- Wheel straightening equipment
- 3D printing/prototyping
- Aluminum welding process
- Quality inspection

### Gallery/Portfolio
- Before and after comparisons
- Various wheel types and brands
- Custom color applications
- Precision engineering examples
- Workshop environment

### Team/About
- Professional team photos
- Workshop exterior/interior
- Equipment and technology
- Certifications and awards

## 🎨 Brand Assets

### Logo Usage
- Use SVG for web when possible
- Maintain aspect ratio
- Ensure sufficient contrast
- Minimum size: 32px width
- Clear space: Logo height on all sides

### Color Palette
- Primary: #0066FF
- Secondary: #FF6B6B  
- Accent: #4ECDC4
- Dark: #0A0B0F
- Light: #FFFFFF

## 📱 Responsive Images

Use the `<picture>` element for responsive images:

```html
<picture>
  <source media="(min-width: 768px)" srcset="assets/images/hero/hero-large.webp">
  <source media="(min-width: 768px)" srcset="assets/images/hero/hero-large.jpg">
  <source srcset="assets/images/hero/hero-mobile.webp">
  <img src="assets/images/hero/hero-mobile.jpg" alt="Roda workshop">
</picture>
```

## 🛡️ Legal Considerations

- Ensure you have rights to all images used
- Credit photographers if required
- Compress images to reduce load times
- Use appropriate alt text for accessibility
- Consider GDPR compliance for any personal photos

## 🔧 Tools for Optimization

### Online Tools
- **TinyPNG**: PNG/JPG compression
- **Squoosh**: Google's image optimization tool
- **ImageOptim**: Mac app for image optimization
- **Canva**: Design tool for creating graphics

### Command Line Tools
```bash
# ImageMagick for batch processing
convert *.jpg -quality 85 -resize 1200x900 optimized/

# WebP conversion
cwebp input.jpg -q 80 -o output.webp
```

## 📋 Checklist

Before going live, ensure:
- [ ] All images are optimized
- [ ] Favicon is added
- [ ] Logo appears correctly on all backgrounds
- [ ] Images have appropriate alt text
- [ ] WebP versions created with fallbacks
- [ ] File names are SEO-friendly (no spaces, descriptive)
- [ ] Copyright/licensing is clear
- [ ] Images display correctly on mobile devices

---

**Need help with images?** Contact the development team or use the recommended tools above for optimization.
