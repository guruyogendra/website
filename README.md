# BioMindz Website

A modern, responsive company website developed for **BIO MINDZ Solutions Pvt. Ltd.** The website showcases the company's services, solutions, company information, and provides a contact/inquiry system for visitors.

## 🚀 Features

- Responsive company website
- Modern and clean UI
- Home page with animations
- About Us page
- Services page
- Solutions page
- Individual solution details
- Contact and inquiry form
- Admin page
- Responsive navigation
- Smooth scrolling
- Scroll-based reveal animations
- Marquee/animated sections
- Reusable React components
- Local inquiry storage
- Email inquiry submission using FormSubmit

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript
- Tailwind CSS
- HTML5
- CSS3
- React Router
- FormSubmit
- Local Storage

## 📁 Project Structure

```text
website/
│
├── assets/
│   ├── dpiit.jpg
│   ├── logo.jpeg
│   └── msme.png
│
├── public/
│   ├── dpiit.jpg
│   ├── jayapal.png
│   ├── logo.jpeg
│   ├── msme.png
│   ├── rajiv.png
│   └── santosh.png
│
├── src/
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Marquee.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Reveal.jsx
│   │   ├── SiteLayout.jsx
│   │   ├── SmoothScroll.jsx
│   │   └── ui/
│   │
│   ├── data/
│   │   └── solutionsData.js
│   │
│   ├── lib/
│   │   └── api.js
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Admin.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── SolutionDetail.jsx
│   │   └── Solutions.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md




⚙️ Installation

Clone the repository:

git clone https://github.com/guruyogendra/website.git

Move into the project directory:

cd website

Install dependencies:

npm install

Start the development server:

npm run dev

The website will be available at:

http://localhost:5173/


**Build for Production**

To create a production build:

npm run build

To preview the production build locally:

npm run preview


Contact & Inquiry System

The website includes a contact/inquiry form that collects visitor information such as:

Name
Email
Phone
Organization
Product/solution interest
Service interest
Message

Inquiry information is handled through the website's frontend API layer and local storage.

🎨 UI & Animations

The website uses reusable React components for:

Navigation
Headers
Footer
Smooth scrolling
Scroll reveal animations
Marquee sections
Form controls
Protected routes

This makes the application easier to maintain and extend.

📱 Responsive Design

The website is designed to work across:

Desktop
Laptop
Tablet
Mobile devices
🔮 Future Improvements

Possible future improvements include:

Backend API integration
Database integration
Secure authentication
Advanced admin dashboard
CMS integration
SEO improvements
Performance optimization
Analytics integration
👨‍💻 Developer

Developed using React.js, Vite, JavaScript and Tailwind CSS.
