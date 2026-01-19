import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">About InsuraOne</h2>

        <p className="about-subtitle">
          InsuraOne is committed to providing trusted Life & Health Insurance
          solutions. With years of experience in LIC and health insurance
          services, we help families secure their future with confidence.
        </p>

        {/* <div className="col-md-4"> */}
          <div className="about-grid">
            <div className="about-card">
              <h5>Trusted Advisor</h5>
              <p>Authorized LIC & Health Insurance guidance.</p>
            </div>
          </div>
          {/* <div className="col-md-4"> */}
            <div className="about-grid">
            <div className="about-card">
              <h5>Customer First</h5>
              <p>Transparent policies and honest advice.</p>
            </div>
            </div>
          {/* </div> */}
          {/* <div className="col-md-4"> */}
            <div className="about-grid">
            <div className="about-card">
              <h5>Complete Support</h5>
              <p>From policy selection to claim assistance.</p>
            </div>
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default About;
