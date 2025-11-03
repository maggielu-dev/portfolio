# My Portfolio Website

A modern, clean portfolio website with sophisticated aesthetics.

## Project Structure

```
portfolio-website/
│
├── index.html          # Main page
├── css/
│   └── style.css      # Stylesheet
├── js/
│   └── script.js      # JavaScript interactions
├── images/            # Folder for images
└── README.md          # Documentation
```

## Features

- **Responsive Design** - Perfect for mobile, tablet, and desktop devices
- **Modern & Clean** - Elegant gradients and minimalist design
- **Smooth Animations** - Fluid transitions and interactive effects
- **Easy to Customize** - Clear code structure, simple to modify

## Quick Start

### 1. Open the Website

Simply open the `index.html` file in your browser to view the website.

### 2. Customize Content

#### Edit Personal Information

Find and modify these sections in `index.html`:

**Hero Section (homepage welcome):**
```html
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Creative Professional / Designer / Developer</p>
```

**About Section:**
```html
<div class="about-text">
    <p>Here you can write a paragraph introducing yourself.</p>
    ...
</div>
```

**Skill Tags:**
```html
<div class="skill-tags">
    <span class="tag">Design</span>
    <span class="tag">Development</span>
    <!-- Add more skills -->
</div>
```

#### Add Project Work

In the projects section of `index.html`, copy and modify this code block:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-image.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span class="tag-small">Tag1</span>
            <span class="tag-small">Tag2</span>
        </div>
    </div>
</div>
```

#### Add Project Images

1. Place your project images in the `images/` folder
2. Update the image path in HTML: `src="images/your-image.jpg"`
3. Recommended image size: 600x400 pixels or similar ratio

#### Modify Contact Information

Find the contact section in `index.html`:

```html
<div class="contact-item">
    <div class="contact-icon">📧</div>
    <h3>Email</h3>
    <a href="mailto:your-email@example.com">your-email@example.com</a>
</div>
```

### 3. Modify Color Scheme

Edit colors in the `:root` section at the top of `css/style.css`:

```css
:root {
    --primary-color: #667eea;    /* Primary color */
    --secondary-color: #764ba2;  /* Secondary color */
    --accent-color: #f093fb;     /* Accent color */
    --text-dark: #2d3748;        /* Dark text */
    --text-light: #718096;       /* Light text */
}
```

You can use tools like [Coolors](https://coolors.co/) to choose color schemes.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Deploy Online

### Method 1: GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://your-username.github.io/repo-name`

### Method 2: Netlify (Free)

1. Visit [Netlify](https://www.netlify.com/)
2. Sign up for an account
3. Drag and drop the `portfolio-website` folder to Netlify
4. Site goes live instantly with a free domain

### Method 3: Vercel (Free)

1. Visit [Vercel](https://vercel.com/)
2. Sign up and connect to GitHub
3. Import your project
4. Automatic deployment and hosting

## FAQ

**Q: Images not showing?**
A: Make sure image paths are correct and files are in the `images/` folder.

**Q: How to change fonts?**
A: Modify `--font-primary` in `css/style.css`, or add Google Fonts.

**Q: Mobile menu won't open?**
A: Ensure `js/script.js` is properly linked in the HTML.

**Q: How to add more pages?**
A: Create new HTML files (e.g., `about.html`) and add links in the navbar.

## Next Steps

- Add more pages (blog, detailed project pages, etc.)
- Integrate contact form
- Add SEO optimization
- Connect Google Analytics for tracking
- Add dark mode toggle
- Integrate social media share buttons

## Technical Support

If you encounter issues:
- Check browser console for error messages
- Ensure all file paths are correct
- Use browser developer tools for debugging

## License

This project is for personal use and can be freely modified and distributed.

---

Wishing you success in creating an outstanding portfolio website! 🎨✨
