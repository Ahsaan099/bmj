import React, { useState, useEffect, useRef } from 'react';
import './About.css';

// Helper component for scroll animations
const AnimatedSection = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={ref} className={`animated-section ${className} ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

// SVG Icon Components
const AchievementIcon1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="achievement-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const AchievementIcon2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="achievement-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const AchievementIcon3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="achievement-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const AchievementIcon4 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="achievement-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
  </svg>
);

const ServiceIcon = ({ d }) => (
  <div className="service-icon-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  </div>
);

const About = () => {
  const clientLogos = Array(12).fill("/eno.png");
  const partnerLogos = Array(10).fill("/ent.png");

  const achievements = [
    { icon: <AchievementIcon1 />, value: "350+", label: "Projects Done" },
    { icon: <AchievementIcon2 />, value: "150+", label: "Happy Clients" },
    { icon: <AchievementIcon3 />, value: "$150M", label: "Revenue Generated" },
    { icon: <AchievementIcon4 />, value: "85%", label: "Client Retention" },
  ];

  const services = [
    { icon: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", title: "App Development", description: "Crafting intuitive and high-performance mobile applications for iOS and Android." },
    { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "Web Development", description: "Building responsive and scalable web solutions that drive business growth." },
    { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", title: "IT Staff Augmentation", description: "Providing skilled tech professionals to complement your existing team." },
    { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z", title: "E-Commerce", description: "Creating powerful online stores that enhance user experience and boost sales." },
    { icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.834 9.168-4.432", title: "Digital Marketing", description: "Implementing data-driven strategies to increase your online visibility and engagement." },
    { icon: "M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6z", title: "Lead Generation", description: "Identifying and nurturing potential customers to grow your sales pipeline." },
  ];

  return (
    <div className="app-container">
      <main>
        {/* About Us Hero */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <img src="/hero-bg.jpg" alt="Abstract technology background" className="hero-bg-image" />
          <div className="container hero-content">
            <AnimatedSection>
              <div className="hero-text">
                <h1>About Us</h1>
                <button className="btn-h">Get Started</button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Clients */}
        <section className="section bg-white">
          <div className="container">
            <AnimatedSection>
              <h2 className="section-title">Our Clients</h2>
              <div className="clients-content">
                <div className="clients-stats">
                  <div className="stats-boxes">
                    <div className="stat-box">
                      <p className="stat-value">120+</p>
                      <p className="stat-label">Clients</p>
                    </div>
                    <div className="stat-box">
                      <p className="stat-value">15+</p>
                      <p className="stat-label">Countries</p>
                    </div>
                  </div>
                  <button className="btn-vp">View portfolio</button>
                </div>
                <div className="clients-grid">
                  {clientLogos.map((logo, index) => (
                    <div key={index} className="client-logo-wrapper">
                      <img src={logo} alt={`Client logo ${index + 1}`} className="client-logo" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="section">
          <div className="container">
            <AnimatedSection>
              <h2 className="section-title">Technology Partners</h2>
              <p className="section-subtitle">We're proud to have successfully integrated with our 30+ technology partners.</p>
              <div className="partners-grid">
                {partnerLogos.map((logo, index) => (
                  <div key={index} className="partner-logo-wrapper">
                    <img src={logo} alt={`Partner logo ${index + 1}`} className="partner-logo" />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Achievements */}
        <section className="section bg-white">
          <div className="container">
            <AnimatedSection>
              <h2 className="section-title">Our Achievements</h2>
              <div className="achievements-grid">
                {achievements.map((item, index) => (
                  <div key={index} className="achievement-card">
                    {item.icon}
                    <p className="achievement-value">{item.value}</p>
                    <p className="achievement-label">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Mission */}
        <section className="section">
          <div className="container">
            <AnimatedSection>
              <div className="mission-content">
                <div className="mission-image-wrapper">
                  <img src="/enth.png" alt="Team discussing mission" className="mission-image" />
                </div>
                <div className="mission-text">
                  <h2 className="section-title-left">Our Mission</h2>
                  <p className="mission-description">
                    Our mission is to empower businesses with innovative technology solutions that drive growth and efficiency. We are committed to delivering excellence and building long-lasting partnerships with our clients through integrity, collaboration, and a relentless pursuit of quality.
                  </p>
                  <button className="btn-vp">Learn More</button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="section-title">Our Solutions</h2>
            <div className="solutions-wrapper">
              <AnimatedSection>
                <div className="solution-card solution-card-orange">
                  <div className="solution-text">
                    <p className="solution-brand">GRABEASY</p>
                    <h3 className="solution-title">Unlock your Restaurant's Full Potential with GrabEasy!</h3>
                    <button className="btn-o">See Solutions</button>
                  </div>
                  <div className="solution-image-wrapper">
                    <img src="/enf.png" alt="Restaurant app interface" className="solution-image" />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="solution-card solution-card-indigo">
                  <div className="solution-text">
                    <p className="solution-brand">PAYPEER</p>
                    <h3 className="solution-title">A Next-Gen Payments Integration Solution</h3>
                    <button className="btn-e">See Solutions</button>
                  </div>
                  <div className="solution-image-wrapper">
                    <img src="/ens.png" alt="Payment solution dashboard" className="solution-image" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="section">
          <div className="container">
            <AnimatedSection>
              <h2 className="section-title">Our Services</h2>
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-card">
                    <ServiceIcon d={service.icon} />
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <a href="#" className="service-link">Learn More →</a>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Get Started */}
        <section className="section bg-gray-100">
          <div className="container">
            <AnimatedSection>
              <div className="get-started-card">
                <div className="get-started-text">
                  <h2 className="section-title-left">Get Started</h2>
                  <p className="get-started-subtitle">Let's discuss your project and find a solution together.</p>
                  <img src="/contact.png" alt="Customer service representative" className="get-started-image" />
                </div>
                <div className="get-started-form">
                  <form className="form">
                    <div>
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label htmlFor="message">Tell us about your project</label>
                      <textarea id="message" rows={4} placeholder="Describe your needs..."></textarea>
                    </div>
                    <div>
                      <button type="submit" className="btn-vp">Submit Request</button>
                    </div>
                  </form>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
