import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <Parallax
        blur={0}
        bgImage="https://i.pinimg.com/originals/92/a1/6c/92a16c36179d6df80f0ca6ca245a30dc.jpg"  // Online image URL
        bgImageAlt="hero background"
        strength={800}
      >
        <div className="hero">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hero-title"
            >
              Welcome to Our Modern Landing Page
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hero-description"
            >
              Innovative solutions with a touch of elegance.
            </motion.p>
            <Link to="features" smooth={true} duration={500}>
              <motion.button
                className="cta-button"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Explore Features
              </motion.button>
            </Link>
          </div>
        </div>
      </Parallax>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="section-title"
          >
            Our Features
          </motion.h2>
          <div className="feature-list">
            <motion.div
              className="feature-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="feature-icon">⚡</div>
              <h3>Fast Performance</h3>
              <p>Experience lightning-fast performance with our optimized solutions.</p>
            </motion.div>
            <motion.div
              className="feature-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Seamless experience on all devices with our responsive design.</p>
            </motion.div>
            <motion.div
              className="feature-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="feature-icon">🔧</div>
              <h3>Customizable</h3>
              <p>Highly customizable to fit your specific needs and preferences.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="cta" className="cta">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="section-title"
          >
            Get Started Today!
          </motion.h2>
          <Link to="home" smooth={true} duration={500}>
            <motion.button
              className="cta-button"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Back to Top
            </motion.button>
          </Link>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="section-title"
          >
            What Our Clients Say
          </motion.h2>
          <div className="testimonial-list">
            <motion.div
              className="testimonial-item"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p>"This service is amazing! It exceeded all my expectations."</p>
              <h4>- John Doe</h4>
            </motion.div>
            <motion.div
              className="testimonial-item"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>"A fantastic experience from start to finish. Highly recommend."</p>
              <h4>- Jane Smith</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
