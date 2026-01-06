import './Footer.css';

const Footer = () => {
  const topCourses = [
    'Engineering Colleges in India',
    'BBA Colleges in India',
    'MBA Colleges in India',
    'BA+LLB Colleges in India',
    'BBA+LLB Colleges in India',
    'LLB Colleges in India',
    'B.Pharm Colleges in India',
    'BCA Colleges in India',
    'B.Sc Nursing Colleges in India',
    'B.Arch Colleges in India',
    'BDS Colleges in India',
    'BAMS Colleges in India',
    'BPT Colleges in India',
    'B.H.M Colleges in India',
    'D.Pharma Colleges in India',
    'MBBS Colleges in India',
    'PGDM Colleges in India',
    'PhD Colleges in India',
    'Medical Colleges in India',
    'Pharmacy Colleges in India'
  ];

  const footerLinks = [
    'Home',
    'About Us',
    'Courses',
    'Exams',
    'Online Colleges',
    'College Reviews',
    'Privacy Policy',
    'Terms & Conditions',
    'Blog',
    'Study Abroad',
    'Contact Us',
    'Advertise with Us',
    'Careers'
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Top Courses:</h3>
          <ul className="footer-links">
            {topCourses.map((course, index) => (
              <li key={index}>
                <a href="#">{course}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo-text">CB</span>
          </div>
          <p className="copyright">
            © 2025 CollegeBatch.com, All Rights Reserved
          </p>
          <p className="dmca">DMCA.com Protection Status</p>
          <div className="footer-nav">
            {footerLinks.map((link, index) => (
              <span key={index}>
                <a href="#">{link}</a>
                {index < footerLinks.length - 1 && ' | '}
              </span>
            ))}
          </div>
          <div className="connect-section">
            <h4>Connect with Us</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


