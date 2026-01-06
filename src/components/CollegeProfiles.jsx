import './CollegeProfiles.css';

const CollegeProfiles = () => {
  const colleges = [
    {
      name: 'International Institute of Information Technology, Bangalore',
      shortName: 'IIIT Bangalore',
      features: ['Courses & Fees', 'Placements', 'Hostel', 'Campus']
    },
    {
      name: 'Vignan University, Guntur',
      shortName: 'Vignan University, Guntur',
      features: ['Courses & Fees', 'Placements', 'Hostel', 'Campus']
    },
    {
      name: 'Vasavi College of Engineering, Hyderabad',
      shortName: 'Vasavi College of Engineering, Hyderabad',
      features: ['Courses & Fees', 'Placements', 'Campus']
    },
    {
      name: 'T John Group of Institutions, Bangalore',
      shortName: 'T John Group of Institutions, Bangalore',
      features: ['Courses & Fees', 'Placements', 'Hostel', 'Campus']
    },
    {
      name: 'ITS Engineering College, Greater Noida',
      shortName: 'ITS Engineering College, Greater Noida',
      features: ['Courses & Fees', 'Placements', 'Hostel', 'Campus']
    },
    {
      name: 'Atria Institute of Technology, Bangalore',
      shortName: 'Atria Institute of Technology, Bangalore',
      features: ['Courses & Fees', 'Placements', 'Hostel', 'Campus']
    }
  ];

  return (
    <section className="college-profiles">
      <div className="college-profiles-container">
        <h2 className="section-title">College Profiles updated recently</h2>
        <div className="colleges-grid">
          {colleges.map((college, index) => (
            <div key={index} className="college-card">
              <h3 className="college-name">{college.name}</h3>
              <p className="college-short-name">{college.shortName}</p>
              <div className="college-features">
                {college.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <a href="#" className="view-all-link">View All Colleges »</a>
        </div>
      </div>
    </section>
  );
};

export default CollegeProfiles;


