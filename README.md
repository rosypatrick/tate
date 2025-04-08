# Tate Global Website

A modern, responsive website for Tate Global, experts in sustainable raised access flooring solutions. This project was built to showcase Tate's products, case studies, and industry expertise while implementing strong marketing integration components.

## Project Overview

This website modernization project focuses on:
- Clean, professional design
- Strong marketing integration
- Lead generation capabilities
- Mobile responsiveness
- Image optimization

## Getting Started with Codespaces

This project is configured to work seamlessly with GitHub Codespaces, providing a complete development environment in the cloud.

### Opening in Codespaces

1. Click the green "Code" button in the GitHub repository
2. Select the "Codespaces" tab
3. Click "Create codespace on main"

This will launch a fully configured development environment with all the necessary extensions and dependencies.

### Running the Project

Once the Codespace is launched:

```bash
# Start a local development server
npx http-server

# Or with live-reload
npx live-server
```

The site will be available at http://localhost:8080 (or the port shown in your terminal).

## Project Structure

```
tate/
├── images/                    # Image assets
│   ├── concore.jpeg           # Product: ConCore® Access Floor
│   ├── ECO Floor.png          # Product: EcoCore™ Sustainable Floor
│   ├── location-frankfurt-datacentre.jpg  # Case study: Frankfurt
│   ├── London-Finance.jpg     # Case study: London
│   ├── PosiLock.jpeg          # Product: PosiLock® Understructure
│   └── Singapore Green Tower.jpeg # Case study: Singapore
├── index.html                 # Main website
├── styles.css                 # Core styling
├── marketing-elements.html    # Marketing components
├── marketing-styles.css       # Marketing-specific styling
├── marketing-scripts.js       # Marketing functionality
├── newsletter-component.html  # Standalone newsletter signup
├── live-chat-component.html   # Standalone chat widget
├── contact-section.html       # Contact form section
├── footer-section.html        # Site footer
├── lead-gen-guide.md          # Documentation on lead generation
├── MARKETING-README.md        # Marketing integration guide
└── README.md                  # This file
```

## Key Features

### 1. Product Showcase
- High-quality product images with detailed specifications
- Feature lists highlighting key benefits
- Interactive card design with hover effects

### 2. Case Studies Section
- Visual project showcases with professional photography
- Clear project descriptions and outcomes
- Call-to-action for each case study

### 3. Marketing Integration
- Newsletter signup with GDPR-compliant consent
- Live chat functionality for immediate customer support
- Lead generation forms strategically placed throughout the site
- Social media integration
- Analytics event tracking

### 4. Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly navigation

## Development Notes

### CSS Structure
- Core styling in `styles.css`
- Marketing-specific components in `marketing-styles.css`
- Mobile responsiveness handled through media queries
- CSS variables for consistent theming

### JavaScript Functionality
- Vanilla JavaScript with no framework dependencies
- Event tracking for analytics integration
- Form validation and submission handling
- Interactive components like the live chat

### Images
- Optimized for web delivery
- Responsive sizing with object-fit
- Alt text for accessibility

## Additional Resources

For detailed information on marketing integration, see the [Marketing README](MARKETING-README.md) and [Lead Generation Guide](lead-gen-guide.md).

## Customization

### Changing Colors

The site uses CSS variables for easy theming. In `styles.css`, modify:

```css
:root {
    --primary: #003082;     /* Main brand color */
    --secondary: #009fe3;   /* Accent color */
    /* Additional color variables */
}
```

### Adding New Products or Case Studies

Follow the existing HTML structure in the respective sections of `index.html` and add new items as needed:

```html
<div class="product-card">
    <div class="product-img">
        <img src="images/your-new-product.jpg" alt="Product Description" class="product-image">
    </div>
    <div class="product-content">
        <h3>Product Name</h3>
        <p>Product description...</p>
        <!-- Additional content -->
    </div>
</div>
```

## Deployment

This site can be deployed to any static web hosting service:

1. **GitHub Pages**: Commit changes and enable GitHub Pages in repository settings
2. **Netlify**: Connect to your GitHub repository for automatic deployments
3. **Vercel**: Similar to Netlify with automatic GitHub integration

## Performance Optimization

The site has been optimized for performance:
- Minimized HTTP requests
- Optimized images
- CSS organized for critical rendering path
- Deferred JavaScript loading where appropriate

## Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

[Your license information here]
