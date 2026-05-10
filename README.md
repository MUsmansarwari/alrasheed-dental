# Al-Rasheed Medical & Dental Clinic Website

A modern, responsive single-page website for Al-Rasheed Medical & Dental Clinic in Lahore, Pakistan. Built with plain HTML, CSS, and JavaScript - no frameworks required.

## 🏥 About

This website showcases Dr. Shaheer Ahmed Butt's dental practice with:
- Professional dental services presentation
- Patient testimonials and reviews
- Online appointment booking form
- Contact information and location
- Mobile-responsive design
- Modern animations and interactions

## 🚀 Deployment Instructions (Vercel)

### Prerequisites
- A Vercel account (free)
- Git repository (GitHub, GitLab, or Bitbucket)

### Step-by-Step Deployment

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Dental clinic website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect it as a static site
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to project settings
   - Add your custom domain (e.g., alrasheeddental.com)
   - Update DNS records as instructed by Vercel

### Automatic Deployment
Once connected, Vercel will automatically redeploy your site when you push changes to your repository.

## 📁 Project Structure

```
dental-clinic-website/
├── index.html          # Main HTML file
├── style.css           # Complete styling
├── script.js           # Interactive functionality
├── images/             # Image assets (add your images here)
├── README.md           # This file
└── vercel.json         # Vercel configuration (auto-generated)
```

## 🎨 Features

### Design System
- **Colors**: Medical blue theme (#0077B6, #00B4D8, #03045E)
- **Fonts**: Plus Jakarta Sans (headings), Inter (body)
- **Responsive**: Mobile-first design with breakpoints at 480px, 768px, 1024px

### Interactive Elements
- **Sticky Navigation**: Scroll effects with active section highlighting
- **Hero Animation**: Slide-up animations on page load
- **Trust Bar**: Animated statistics counters
- **Service Cards**: Hover effects with elevation
- **Reviews**: Skeleton loading simulation with staggered animations
- **Contact Form**: Validation with success/error messages
- **WhatsApp Button**: Floating chat button with pulse animation
- **Google Maps**: Embedded location map

### SEO Optimizations
- Meta tags and Open Graph
- LocalBusiness schema (JSON-LD)
- Canonical URL
- Semantic HTML5 structure
- Mobile-friendly design

## 🛠️ Customization

### Update Contact Information
Edit these sections in `index.html`:
- Phone numbers: `+92-300-1234567`
- WhatsApp link: `https://wa.me/923360434394`
- Email: `info@alrasheeddental.com`
- Address: `Walton Cantt, Lahore, Pakistan`

### Add Images
Place your images in the `/images/` folder:
- `logo.png` - Clinic logo
- `doctor-hero.jpg` - Hero section doctor image
- `doctor-about.jpg` - About section doctor image
- Service icons: `root-canal.png`, `implants.png`, etc.
- Patient avatars: `patient1.jpg`, `patient2.jpg`, etc.
- Icon images: `location-icon.png`, `phone-icon.png`, etc.

### Modify Colors
Update CSS variables in `style.css`:
```css
:root {
    --primary-color: #0077B6;
    --accent-color: #00B4D8;
    --dark-color: #03045E;
    --light-bg: #F0F9FF;
}
```

## 📱 Mobile Optimization

The website is fully responsive with:
- Hamburger menu for mobile navigation
- Touch-friendly buttons and forms
- Optimized image loading
- Smooth scrolling on mobile devices

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support

For any issues or questions about the website:
- Email: info@alrasheeddental.com
- Phone: +92-300-1234567
- WhatsApp: +92-336-0434394

## 📄 License

This website template is provided for Al-Rasheed Medical & Dental Clinic. All rights reserved.

---

**Built with ❤️ for Al-Rasheed Medical & Dental Clinic**
