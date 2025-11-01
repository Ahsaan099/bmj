import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed with email:", email);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  };

  const blogs = [
    {
      id: 1,
      title:
        "What to Do After Launch: post launch marketing strategies for Growth",
      date: "April 28, 2025",
      image: "/bmj/animal.jpg",
    },
    {
      id: 2,
      title: "Convert your Web Apps into Android or iOS Mobile Apps",
      date: "April 23, 2025",
      image: "/bmj/animal.jpg",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero" data-aos="fade-up">
        <div className="hero-one" data-aos="fade-right">
          <p className="mt">
            We Help Companies
            <br />
            Save Millions on
            <br />
            Development
          </p>

          <p className="mnt">
            We offer cutting-edge services and solutions to take you
            <br />
            to the next level — including custom mobile apps,
            <br />
            development outsourcing, lead generation and more.
          </p>

          <div className="btn-inp">
            <input type="text" placeholder="Enter a name" />
            <button className="btn">Book a Demo</button>
          </div>
        </div>

        <div className="hero-img" data-aos="fade-left">
          <img src="/bmj/homeBanner.webp" alt="banner" className="hero-pic" />
        </div>
      </div>

      {/* SERVICES TITLE */}
      <p className="ser" data-aos="zoom-in">
        Our Services
        <br />
        <span className="se">
          Comprehensive Service for every business need
        </span>
      </p>

      {/* SERVICES CARDS SECTION */}
      <div className="threecard">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div className="tc" data-aos="fade-up" key={i}>
              <i className="fa-solid fa-face-smile tcc"></i>
              <p className="hc">
                App Development
                <br />
                <span className="hcc">
                  Looking for app developers? We specialize in outsourcing — let
                  our expert team build your next project with precision and
                  quality.
                </span>
              </p>
              <p className="lm">Learn more</p>
            </div>
          ))}
      </div>

      {/* SECOND ROW */}
      <div className="threecard cdrd">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div className="tc" data-aos="fade-up" key={i}>
              <i className="fa-solid fa-face-smile tcc"></i>
              <p className="hc">
                Web Development
                <br />
                <span className="hcc">
                  We build modern, scalable, and responsive web apps that bring
                  your business to life online.
                </span>
              </p>
              <p className="lm">Learn more</p>
            </div>
          ))}
      </div>

      {/* THIRD ROW */}
      <div className="threecard cdrd">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div className="tc" data-aos="fade-up" key={i}>
              <i className="fa-solid fa-face-smile tcc"></i>
              <p className="hc">
                Cloud & Support
                <br />
                <span className="hcc">
                  From hosting to maintenance, we provide full-cycle support for
                  your digital ecosystem.
                </span>
              </p>
              <p className="lm">Learn more</p>
            </div>
          ))}
      </div>

      {/* FINAL SECTION */}
      <div className="shero" data-aos="fade-up">
        <div className="oshero" data-aos="fade-right">
          <p className="opshero">
            A one-stop solution for restaurant apps, grocery delivery,
            and custom software development.
          </p>
          <div className="gt">
            <Link to="/content">
              <button className="btt">Book A Free Demo</button>
            </Link>
            <Link to="/product">
              <button className="bttt">Get Details</button>
            </Link>
          </div>
        </div>
        <img
          src="/bmj/homebanner.webp"
          alt="promo"
          className="smhero"
          data-aos="fade-left"
        />
      </div>

      {/* FOOTER SECTION */}
      <footer className="footer" data-aos="fade-up">
        <div className="footer-container">
          {/* Newsletter Section */}
          <div className="newsletter-section">
            <h2 className="newsletter-title">
              Subscribe to our
              <br />
              newsletter
            </h2>
            <div className="newsletter-form">
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubscribe} className="subscribe-btn">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Content */}
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-column logo-section">
              <img
                src="/bmj/animal.jpg"
                alt="Enormess Logo"
                className="footer-logo"
              />
              <div className="fallback-logo">ENORMESS</div>
              <p className="company-description">
                We are an all-rounder Mobility and Digital Agency which exists
                to transform your organization with our team of experts and
                years of experience
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Latest Blogs */}
            <div className="footer-column">
              <h3>Latest Blogs</h3>
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-item">
                  <div className="blog-image">
                    <img src={blog.image} alt="Blog post" />
                  </div>
                  <div className="blog-content">
                    <h4>{blog.title}</h4>
                    <p className="blog-date">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Contact", path: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h3>Have Questions?</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-text">
                    1309 Coffeen Avenue Suite # 1200
                    <br />
                    Sheridan, WY 82801
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-text">+1 (240) 244 7523</div>
                </div>
              </div>
              <div className="badges">
                <div className="badge">★ Trustpilot</div>
                <div className="badge">Google Partner</div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="copyright">
              Copyright © 2025 Enormess. All rights reserved
            </p>
            <div className="footer-bottom-links">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
