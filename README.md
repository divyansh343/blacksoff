# ⚡ Blacksoff Project

A high-performance, visually engaging web application built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**. This project follows a component-driven architecture with attention to responsiveness, performance, and accessibility.

## 🚀 Project Setup Instructions

### Prerequisites

- Node.js ≥ 16.x
- Yarn (used as package manager)

### Installation

```bash
git clone https://github.com/divyansh343/blacksoff.git
cd blacksoff
yarn install
yarn dev
```

Visit `http://localhost:3000` to view the app.

---

## 🧩 Component Architecture Overview

- All reusable components are located in the `/components` folder.
- Page-specific components for the home page are within `components/home/`.
- Static assets (images, videos) are stored in the `public/` folder.
- Animation and icon integrations are abstracted into components for cleaner usage.

Structure:

```
components/
│
├── home/         # Home page specific components
├── layout/       # Layout wrappers (Navbar, Footer, etc.)
└── index.ts      # Central export for all components
```

---

## 📱 Responsive Design Strategy

- Tailwind's utility-first classes were used for a mobile-first approach.
- Media queries are handled using Tailwind's responsive breakpoints (`sm`, `md`, `lg`, `xl`).
- Flexbox and grid layouts adapt seamlessly across devices.

---

## ⚡ Performance Optimization Techniques

- Images are served from the `public/` folder using `<Image />` from `next/image` when applicable.
- Lazy loading for non-critical components and media.
- CSS and JS are minified via Next.js build process.
- Used Framer Motion only where animation was essential to reduce overhead.

---

## ♿ Accessibility Considerations

- All interactive elements have appropriate `aria` labels.
- Focus management and keyboard navigability have been tested.
- Semantic HTML tags are used for better screen reader compatibility.

---

## 📦 Third-Party Libraries Used

- **[Next.js](https://nextjs.org/)** – React framework with SSR and optimized builds.
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first styling.
- **[Framer Motion](https://www.framer.com/motion/)** – Declarative animation library.
- **[Lucide Icons](https://lucide.dev/)** – Beautifully consistent open-source icons.

---

## 💭 Assumptions & Design Decisions

- Tailwind CSS chosen for speed and consistency across the UI.
- Framer Motion used selectively to enhance interactivity without overloading the bundle.
- Yarn used for consistent dependency locking.
- Folder structure aims to be scalable and maintainable for future pages and features.

---

## 🧗 Challenges Faced & Solutions

- **Challenge:** Balancing animations with performance.  
  **Solution:** Lazy loading animations and splitting Framer Motion usage where strictly needed.

- **Challenge:** Managing image and video loading.  
  **Solution:** Used lightweight assets and `loading="lazy"` to optimize page load.

- **Challenge:** Making all breakpoints pixel-perfect.  
  **Solution:** Regular testing with DevTools and tweaking Tailwind utilities on breakpoints.

---

## 🌟 Suggested Features & Improvements

- Implement dark mode toggle with Tailwind’s `dark:` variant.
- Add unit and integration tests using Jest + React Testing Library.
- Include SEO meta tag manager with `next/head`.
- Integrate CMS or headless backend for dynamic content.
- Improve Lighthouse scores further by adding font preloading and reducing layout shifts.

---

## ✍️ Additional Remarks

- Codebase is clean and well-commented for easy onboarding.
- Open to contributions! Feel free to fork and improve.
- Designed with scalability and modularity in mind.

---

## 📄 License

This project is open-source under the MIT License.
