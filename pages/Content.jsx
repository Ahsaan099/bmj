import React, { useState, useEffect } from 'react';
// @ts-ignore
import AOS from 'aos';
import './Content.css';

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CompanyLogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#2563EB" />
    <path d="M10 16H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 10V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const categories = [
  'All',
  'Digital Marketing',
  'E-commerce',
  'FinStress',
  'IT Staff Augmentation',
  'Local Resources',
  'Mobile App Development',
  'Pay2Peer',
  'Web Development'
];

const projects = [
  { id: 1, title: 'GrabEasy Helped Safqa Sloth Achieve 50% Sales Growth with a Custom Mobile App', description: 'See our works', imageUrl: 'https://i.imgur.com/vHqB3qG.png', category: 'Mobile App Development', bgColor: 'bg-blue-900' },
  { id: 2, title: "PayStripe's Integrated Payment Gateway Changed The Billing Culture With FinStress", description: 'See our works', imageUrl: 'https://picsum.photos/seed/project2/500/400', category: 'FinStress' },
  { id: 3, title: 'Custom Shopify Development Drive 45% Increase In Sales For Vendorzade Key Store', description: 'See our works', imageUrl: 'https://picsum.photos/seed/project3/500/400', category: 'E-commerce' },
  { id: 4, title: 'Healthcare App Development For Bthaina Almuparai Medical Center To Revolutionize Telehealth', description: 'See our works', imageUrl: 'https://picsum.photos/seed/project4/500/400', category: 'Mobile App Development', bgColor: 'bg-teal-500' },
  { id: 5, title: 'Education App Development Services For A Better Student & Institutes Engagement', description: 'See our works', imageUrl: 'https://picsum.photos/seed/project5/500/400', category: 'Web Development' },
  { id: 6, title: 'Mobile Wallet App Development Helped E-wallet To Become The Favorite E-wallet in the market', description: 'See our works', imageUrl: 'https://picsum.photos/seed/project6/500/400', category: 'Mobile App Development' },
  { id: 7, title: 'Custom University Search App Development Increased Efficacy By 30%', description: 'See our works', imageUrl: 'https://picsum.photos/seed/project7/500/400', category: 'Web Development' }
];

function Content() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="page-wrapper">
      <main className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div data-aos="fade-right">
            <p className="hero-subtitle">We Deliver Valuable</p>
            <h1 className="hero-title">
              Digital Services to <br /> Growth-Focused <br /> Businesses
            </h1>
            <button className="cta-button">
              <span>Explore now</span>
              <ArrowRightIcon />
            </button>
          </div>

          <div className="hero-image-container" data-aos="fade-left">
            <img src="/ens.png" alt="UI element 1" className="hero-image-1" />
            <img src="/enf.png" alt="UI element 2" className="hero-image-2" />
            <img src="/enth.png" alt="UI element 3" className="hero-image-3" />
          </div>
        </section>

        {/* History Section */}
        <section className="history-section" data-aos="fade-up">
          <h2 className="section-title">Our History Includes</h2>
          <p className="section-title">
            <span className="text-highlight">50+</span> Successful Projects
          </p>
        </section>

        {/* Featured Project Section */}
        <section className="featured-project" data-aos="zoom-in-up">
          <div className="featured-project-content">
            <span className="case-study-badge">MOBILE CASE STUDY</span>
            <h3 className="featured-project-title">
              How GrabEasy Helped Safqa Sloth Achieve 50% Sales Growth With A Custom Mobile App
            </h3>
            <div className="featured-project-logos">
              <img src="/ene.png" alt="GrabEasy Logo" className="logo-img" />
              <img src="/enf.png" alt="Safqa Sloth Logo" className="logo-img" />
            </div>
            <a href="#" className="case-study-link">
              VIEW CASE STUDY ➔
            </a>
          </div>

          <div className="featured-project-images">
            <img src="/eni.png" alt="App Screenshot 1" className="featured-img-1" />
          </div>
        </section>

        {/* All Projects Section */}
        <section className="all-projects-section">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">
              <CompanyLogoIcon />
              All Projects
            </h2>
          </div>

          <div className="filter-buttons-container" data-aos="fade-up" data-aos-delay="200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`filter-button ${
                  activeCategory === category ? 'active' : 'inactive'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`project-card-image-wrapper ${
                    project.bgColor ? project.bgColor : 'bg-gray-100'
                  }`}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-card-image"
                  />
                </div>
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <button className="project-card-button">
                    <span>{project.description}</span>
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Content;
