import React from 'react'

export const About = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>Welcome to VibeHarbor</h1>
        <p className="main-about">
          Your Ultimate Destination for Premium Audio Excellence
        </p>
      </div>

      <div className="about-grid">
        <section className="about-card mission">
          <div className="icon">🎯</div>
          <h2>Our Mission</h2>
          <p>At VibeHarbor, we're passionate about delivering transformative audio experiences. We believe everyone deserves to experience music in its purest form. Our carefully curated collection represents the pinnacle of audio technology.</p>
        </section>

        <section className="about-card values">
          <div className="icon">⭐</div>
          <h2>Our Values</h2>
          <p>Excellence, innovation, and customer satisfaction drive everything we do. We're committed to:
            <ul>
              <li>Uncompromising Quality</li>
              <li>Customer-First Approach</li>
              <li>Continuous Innovation</li>
              <li>Transparent Business Practices</li>
            </ul>
          </p>
        </section>

        <section className="about-card features">
          <div className="icon">🎧</div>
          <h2>Premium Features</h2>
          <ul className="feature-list">
            <li>Hand-Picked Premium Selection</li>
            <li>24/7 Expert Support</li>
            <li>Free Express Shipping</li>
            <li>30-Day Money-Back Guarantee</li>
            <li>Professional Reviews</li>
            <li>Exclusive Member Deals</li>
          </ul>
        </section>

        <section className="about-card technology">
          <div className="icon">🚀</div>
          <h2>Our Technology</h2>
          <p>We partner with industry leaders to bring you the latest in audio innovation:
            <ul>
              <li>Active Noise Cancellation</li>
              <li>Hi-Res Audio Certification</li>
              <li>Advanced Bluetooth Codecs</li>
              <li>Smart Device Integration</li>
            </ul>
          </p>
        </section>
      </div>

      <section className="commitment-banner">
        <h2>Our Commitment to Excellence</h2>
        <p>From audiophiles to casual listeners, we're here to help you discover the perfect audio companion for your lifestyle. Join thousands of satisfied customers who've elevated their listening experience with VibeHarbor.</p>
      </section>
    </div>
  );
};
