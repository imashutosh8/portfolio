# Ashutosh Verma — Portfolio

A clean, minimal, and fully responsive personal portfolio website built with **React** and **Vite**. Showcases my projects, skills, experience, and contact information with a polished dark/light theme toggle.

🔗 **Live Site:** [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

---

## ✨ Features

- **Dark / Light mode** — theme toggle with persistent preference via `localStorage`
- **Smooth scroll navigation** — active section detection via IntersectionObserver
- **Responsive design** — optimized for mobile, tablet, and desktop
- **Skills marquee** — animated horizontal scroll of tech skills
- **Live clock** — real-time IST clock in the About section
- **Resume download** — direct CV download link
- **Contact section** — email link + all social profiles

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Build Tool | Vite |
| Styling | Vanilla CSS with CSS Variables |
| Icons | Lucide React |
| Fonts | Inter, JetBrains Mono (Google Fonts) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── About.jsx / About.css
│   ├── ProjectsPortfolio.jsx / ProjectsPortfolio.css
│   ├── Resume.jsx / Resume.css
│   ├── Contact.jsx / Contact.css
│   └── Footer.jsx / Footer.css
├── data/
│   └── portfolio.js        # All content lives here
├── styles/
│   ├── variables.css        # Design tokens & CSS variables
│   └── global.css
└── index.css                # Base styles & utilities
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18`
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/imashutosh8/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Vite will start at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## ✏️ Customization

All site content (name, bio, projects, skills, experience, certifications, social links) is centralized in one file:

```
src/data/portfolio.js
```

Edit that file to update your details — no changes needed elsewhere.

---

## 📬 Contact

- **Email:** ashutosh.verma1132@gmail.com
- **LinkedIn:** [vermaashutosh8](https://www.linkedin.com/in/vermaashutosh8/)
- **GitHub:** [imashutosh8](https://github.com/imashutosh8)
- **LeetCode:** [vermaashutosh_](https://leetcode.com/u/vermaashutosh_/)
- **X (Twitter):** [@vermaashutosh_](https://x.com/vermaashutosh_)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
