import "./Business.css";

export default function Business() {
  return (
    <div className="business-container">

      {/* Page Title */}
      <h1 className="business-title">Business & Partner Solutions</h1>

      {/* Intro */}
      <p className="business-intro">
        Get It Moving provides tailored logistics, delivery, and removal solutions 
        for small, medium, and large businesses. Whether you're a furniture brand,
        e-commerce company, retailer, or service provider — we offer scalable 
        delivery and removal services to meet your needs.
      </p>

      {/* Pricing / Packages */}
      <div className="business-grid">

        {/* Retail Partner */}
        <div className="business-card">
          <h2>Retail & Store Partners</h2>
          <p>
            Perfect for large retailers like IKEA, B&Q, Dunelm, or any business
            offering bulky item home delivery or assembly services.
          </p>
          <p>
            • Same-day & next-day delivery<br />
            • Home removal & packaging support<br />
            • White-glove delivery available<br />
            • Optional warehouse integration
          </p>
          <a className="business-btn" href="/contact">Contact Us</a>
        </div>

        {/* SME Business */}
        <div className="business-card">
          <h2>Small & Medium Businesses</h2>
          <p>
            Flexible pricing for SMEs that require regular transport or logistics
            without the cost of running their own fleet.
          </p>
          <p>
            • Pay-as-you-go booking<br />
            • Monthly discounted rates<br />
            • Multi-drop deliveries<br />
            • Business dashboard included
          </p>
          <a className="business-btn" href="/contact">Get Started</a>
        </div>

        {/* Enterprise Solutions */}
        <div className="business-card">
          <h2>Enterprise Solutions</h2>
          <p>
            Custom logistics network for high-volume clients, nationwide service,
            storage, and long-term contracts.
          </p>
          <p>
            • Dedicated vehicles & drivers<br />
            • Priority scheduling<br />
            • Real-time tracking API<br />
            • Bulk pricing agreements
          </p>
          <a className="business-btn" href="/contact">Request Quote</a>
        </div>

      </div>

      {/* Final Message */}
      <p className="business-intro" style={{ marginTop: "40px" }}>
        Need a tailored solution? Our team will create a custom plan for your business.
      </p>
    </div>
  );
}
