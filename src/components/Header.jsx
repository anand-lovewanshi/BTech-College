import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";
import logo from "./Logo";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // scroll down → hide
      } else {
        setShowHeader(true); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const engineeringCities = [
    "Engineering Colleges in Bangalore",
    "Engineering Colleges in Pune",
    "Engineering Colleges in Mumbai",
    "Engineering Colleges in Chennai",
    "Engineering Colleges in Hyderabad",
    "Engineering Colleges in Coimbatore",
    "Engineering Colleges in Kolkata",
    "Engineering Colleges in Bhubaneswar",
    "Engineering Colleges in Noida",
    "Engineering Colleges in Indore",
    "Engineering Colleges in Ahmedabad",
    "Engineering Colleges in Lucknow",
    "Engineering Colleges in Bhopal",
    "Engineering Colleges in Jaipur",
    "Engineering Colleges in Dehradun",
    "Engineering Colleges in India"
  ];

  const mbaCities = [
    "MBA Colleges in Bangalore",
    "MBA Colleges in Pune",
    "MBA Colleges in Mumbai",
    "MBA Colleges in Hyderabad",
    "MBA Colleges in Chennai",
    "MBA Colleges in Kolkata",
    "MBA Colleges in Ahmedabad",
    "MBA Colleges in Indore",
    "MBA Colleges in Bhubaneswar",
    "MBA Colleges in Coimbatore",
    "MBA Colleges in Lucknow",
    "MBA Colleges in Bhopal",
    "MBA Colleges in Chandigarh",
    "MBA Colleges in Nagpur",
    "MBA Colleges in Noida",
    "MBA Colleges in India"
  ];

  const lawCities = [
    "Law Colleges in Bangalore",
    "Law Colleges in Pune",
    "Law Colleges in Chennai",
    "Law Colleges in Dehradun",
    "Law Colleges in Hyderabad",
    "Law Colleges in Kolkata",
    "Law Colleges in Indore",
    "Law Colleges in Lucknow",
    "Law Colleges in Jaipur",
    "Law Colleges in Ahmedabad",
    "Law Colleges in Bhubaneswar",
    "Law Colleges in Chandigarh",
    "Law Colleges in Noida",
    "Law Colleges in Bhopal",
    "Law Colleges in Coimbatore",
    "Law Colleges in India"
  ];

  const moreOptions = [
    "BA+LLB Colleges in India",
    "B.Pharm Colleges in India",
    "BBA Colleges in India",
    "BCA Colleges in India",
    "B.Sc Nursing Colleges in India",
    "B.Arch Colleges in India",
    "Dental Colleges in India",
    "Medical Colleges in India",
    "Allied Health Science Colleges in India",
    "BBA+LLB Colleges in India",
    "BDS Colleges in India",
    "BAMS Colleges in India",
    "BPT Colleges in India",
    "B.H.M Colleges in India",
    "B.Sc Agriculture Colleges in India",
    "Hotel Management Colleges in India",
    "Mass Communications Colleges in India",
    "PhD Colleges in India",
    "B.Com+LLB Colleges in India",
    "D.Pharma Colleges in India",
    "GNM Colleges in India",
    "MBBS Colleges in India",
    "Pharm.D Colleges in India",
    "PGDM Colleges in India",
    "Paramedical Colleges in India",
    "Pharmacy Colleges in India"
  ];

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`header ${showHeader ? "show" : "hide"}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">
            <img src={logo} alt="college" />
          </span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleMouseEnter("engineering")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                Engineering <span className="arrow">▼</span>
              </a>
              {activeDropdown === "engineering" && (
                <ul className="dropdown-menu">
                  {engineeringCities.map((city, index) => (
                    <li key={index}>
                      <a href="#">{city}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleMouseEnter("mba")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                MBA <span className="arrow">▼</span>
              </a>
              {activeDropdown === "mba" && (
                <ul className="dropdown-menu">
                  {mbaCities.map((city, index) => (
                    <li key={index}>
                      <a href="#">{city}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleMouseEnter("law")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                Law <span className="arrow">▼</span>
              </a>
              {activeDropdown === "law" && (
                <ul className="dropdown-menu">
                  {lawCities.map((city, index) => (
                    <li key={index}>
                      <a href="#">{city}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleMouseEnter("more")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                More <span className="arrow">▼</span>
              </a>
              {activeDropdown === "more" && (
                <ul className="dropdown-menu">
                  {moreOptions.map((option, index) => (
                    <li key={index}>
                      <a href="#">{option}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Live Applications
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Entrance Exams
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
