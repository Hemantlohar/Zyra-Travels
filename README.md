# ZyraTrip - Premium Travel & Exploration Catalog

**ZyraTrip** (or Zyra Travels) is a modern, responsive, and visually stunning landing page for finding travel destinations and booking popular tours. It features rich design aesthetics, smooth scroll-triggered animations, and clean layouts to provide an immersive exploration experience.

---

## 🚀 Key Features

* **Immersive Hero Banner:** High-impact landing cover featuring travel destinations (e.g., Japan) with visual overlays and dynamic call-to-actions.
* **Popular Trips Grid:** Curated collection cards showcasing pricing, locations, and interactive "See Details" buttons linking to dedicated destination pages.
* **Detailed Destination Pages:** Dedicated inner pages (e.g., Sailung, Boudha, Bardia, Mustang) with duration, best seasons, activities, and inclusions.
* **Animated Article Carousel:** A custom JavaScript-powered horizontal scroll container for articles/blogs with manual control arrows (`←` and `→`).
* **Micro-Animations:** Integration of the **AOS (Animate on Scroll)** library to dynamically reveal cards and sections as the user scrolls.

---

## 🛠️ Technology Stack

* **Structure:** HTML5 (Semantic and clean markup)
* **Styling:** CSS3 (Custom styling, responsive grids, flexbox, overlay layers, hover effects, and modern typography)
* **Interactivity:** Vanilla JavaScript (AOS initialization and custom horizontal carousel scrolling logic)
* **Fonts & Icons:** 
  * Google Fonts: *Mulish* & *Raleway* (Home Page), *Inter* (Trip Details)
  * FontAwesome: Clean, modern SVG icons for social media and navigation
* **Animation Library:** [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

---

## 📁 Project Directory Structure

```text
Zyra travel/
├── assets/                  # UI assets and screenshots
├── css/                     # Stylesheets
│   ├── style.css            # Stylesheet for the home page
│   └── trip-style.css       # Stylesheet for trip details pages
├── images/                  # Project imagery
│   ├── banner/              # Banner backgrounds
│   ├── blogs/               # Blog/article card backgrounds
│   └── trips/               # Destination images
├── js/                      # Script files
│   └── script.js            # Carousel scrolling script
├── pages/                   # Markup files
│   ├── index.html           # Home page
│   └── trips/               # Destination sub-pages
│       ├── bardia.html
│       ├── boudha.html
│       ├── mustang.html
│       └── sailung.html
├── .gitignore               # Ignored files for Git (e.g., node_modules)
├── .hintrc                  # HTML/CSS hint configurations
├── package.json             # Package configuration (contains AOS dependencies)
└── README.md                # Project documentation
```

---

## 💻 How to Run Locally

Since this is a static frontend website, you can view it directly in any browser:

1. **Option A (Direct Open):**
   * Double-click `pages/index.html` or open it directly in your web browser.
2. **Option B (Recommended for smooth asset loading):**
   * Serve the files using a local development server (e.g., VS Code's **Live Server** extension or `npx live-server` in the root directory).
