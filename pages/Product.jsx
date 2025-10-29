import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Product.css';

// --- SVG Icons ---
// FIX: Corrected SVG attribute from strokeLineCap to strokeLinecap and strokeLineJoin to strokeLinejoin
const ProvenExpertiseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

// FIX: Corrected SVG attribute from strokeLineCap to strokeLinecap and strokeLineJoin to strokeLinejoin
const ComprehensiveSolutionsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

// FIX: Corrected SVG attribute from strokeLineCap to strokeLinecap and strokeLineJoin to strokeLinejoin
const ResultsDrivenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

// FIX: Corrected SVG attribute from strokeLineCap to strokeLinecap and strokeLineJoin to strokeLinejoin
const ContentCreatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

// --- Static Data ---
const testimonials = [
  {
    quote: "We were looking for business automation development; from our research we came to know Enomess a software development firm; so we reached out to them.",
    name: "Tomi Lee",
    title: "Marketing Director",
    image: "https://i.imgur.com/ODk2o6T.jpg"
  },
  {
    quote: "The team at Enomess transformed our online presence. Our traffic is up 200% and leads are pouring in. Highly recommended!",
    name: "Jane Doe",
    title: "CEO, TechCorp",
    image: "https://i.imgur.com/AOhf3f1.jpg"
  },
  {
    quote: "Their content strategy was a game-changer. They understood our brand voice perfectly and delivered exceptional results.",
    name: "John Smith",
    title: "Founder, Creative Co.",
    image: "https://i.imgur.com/QoVzE8Z.jpg"
  }
];

const servicesData = [
    {
        icon: <ProvenExpertiseIcon />,
        title: 'Proven Expertise',
        description: 'Our team of marketers includes top professionals in all of our fields We provide you reliable service meeting quality standards created by our team and based on market standards and customer mandates.',
    },
    {
        icon: <ComprehensiveSolutionsIcon />,
        title: 'Comprehensive Solutions',
        description: 'From SEO execution to PPC management, we offer a full suite of services, providing a cohesive and powerful boost to your business needs.',
    },
    {
        icon: <ResultsDrivenIcon />,
        title: 'Results-driven Approach',
        description: 'Partnering with Enomess means leveraging a very active in-marketing agency experience to drive faster sales growth and revenue for your business.',
    },
    {
        icon: <ContentCreatorIcon />,
        title: 'Content Creator',
        description: 'Ingenious pros address with high-quality, engaging content optimized for your',
    },
];

const Product = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);


const InputField = ({ label, type, placeholder, name }) => (
  <div className="form-field">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    />
  </div>
);
    
    return (
        <div id="product-page">
            <main>
                
<div className="hero">
  <div className="hero-one"><h1 className="hr-one-txt">Drive results and grow<br/> Globally with our <br/> expert digital <br/> marketing Services</h1>
  <button className="btn-hr-one">Book a Demo</button>
  </div>
  <div className="hero-two"><img src="eni.png" alt="" className="hr-two-img" /></div>
</div>
                {/* Services Section */}
                <section className="services-section section-padding">
                    <div className="container">
                        <h2 className="section-title" data-aos="fade-up">
                            Why Choose Enomess for Digital Marketing Services?
                        </h2>
                        <div className="services-grid">
                            {servicesData.map((service, index) => (
                                <div className="service-card" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                                    <div className="service-icon-wrapper">
                                      {service.icon}
                                    </div>
                                    <div>
                                      <h3>{service.title}</h3>
                                      <p>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CallToAction Section */}
                <section className="cta-section" data-aos="zoom-in">
                    <div className="container" style={{maxWidth: '1024px'}}>
                        <div className="cta-banner">
                            <h2>
                                LET'S GET YOUR PROJECT STARTED!
                            </h2>
                            <button className="btn-hr-one">
                                Book a call
                            </button>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="testimonials-section section-padding">
                  <div className="container" style={{maxWidth: '896px'}} data-aos="fade-up">
                    <h2 className="section-title">
                      Client Success = Our Success
                    </h2>
                    
                    <div className="testimonials-wrapper">
                      {testimonials.map((testimonial, index) => (
                         <div
                          key={index}
                          className="testimonial-slide"
                          style={{ opacity: index === currentIndex ? 1 : 0 }}
                        >
                            <div className="testimonial-card">
                              <div className="testimonial-avatar">
                                <img
                                  src="ens.png"
                                  alt={testimonial.name}
                                />
                              </div>
                              <p className="testimonial-quote">"{testimonial.quote}"</p>
                              <div className="testimonial-author">
                                <p className="name">{testimonial.name}</p>
                                <p className="title">{testimonial.title}</p>
                              </div>
                            </div>
                        </div>
                       ))}
                    </div>

                    <div className="testimonial-dots">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`testimonial-dot ${currentIndex === index ? 'active' : '' } ` }
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* Expertise Section */}
                <section className="expertise-section section-padding">
                    <div className="container">
                        <div className="expertise-grid">
                            <div className="expertise-content" data-aos="fade-right">
                                <h2>
                                    Diverse Industry Expertise
                                </h2>
                                <p>
                                    Enomess is proud to serve UK industries, providing tailored solutions for many unique business needs. Our expertise spans from eCommerce B2B services for online retailers to specialized branding services for corporate companies, law firms, and even fintech.
                                </p>
                            </div>
                            <div data-aos="fade-left">
                                <img
                                    src="ens.png"
                                    alt="Team collaborating on digital marketing strategy"
                                    className="expertise-image"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ContactForm Section */}
                <section className="contact-section section-padding">
                    <div className="container">
                        <div className="contact-heading text-center" data-aos="fade-up">
                            <h2>
                                Ready to Elevate Your Digital Marketing Strategy
                            </h2>
                            <p>
                                Contact us today to discuss your digital marketing needs and see how Enomess can help you convert your business goals.
                            </p>
                        </div>
                        <div className="contact-grid">
                            <form className="contact-form" data-aos="fade-right" onSubmit={(e) => e.preventDefault()}>
                                <InputField label="First Name" type="text" placeholder="First name" name="firstName" />
                                <InputField label="Email" type="email" placeholder="i.e: john@email.com" name="email" />
                                <InputField label="Phone Number" type="tel" placeholder="i.e: (123) 456-7890" name="phone" />
                                <div className="form-field">
                                    <label htmlFor="message">Tell us about Your Project</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Type here..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn-hr-one"
                                >
                                    Request Now
                                </button>
                            </form>
                            <div className="contact-image-wrapper" data-aos="fade-left">
                                <img
                                    src="enth.png"
                                    alt="Digital marketing tools and concepts"
                                    className="contact-image"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Product;