import './LiveApplications.css';

const LiveApplications = () => {
  const applications = [
    'Sister Nivedita University - SNU Kolkata',
    'UEM Jaipur - University of Engineering and Management, Jaipur',
    'Quantum University, Roorkee',
    'IAER Kolkata - Institute of Advance Education & Research',
    'ISHM Kolkata',
    'LPU, Jalandhar'
  ];

  return (
    <section className="live-applications">
      <div className="live-applications-container">
        <h2 className="section-title">Live Applications</h2>
        <div className="applications-grid">
          {applications.map((app, index) => (
            <div key={index} className="application-card">
              <h3 className="application-name">{app}</h3>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveApplications;


