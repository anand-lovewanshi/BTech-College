import { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  // Sample search suggestions - in real app, this would come from API
  const allSuggestions = [
    'Engineering Colleges in Bangalore',
    'Engineering Colleges in Mumbai',
    'MBA Colleges in Delhi',
    'Medical Colleges in India',
    'Law Colleges in Pune',
    'BBA Colleges in Hyderabad',
    'BCA Colleges in Chennai',
    'B.Pharm Colleges in India'
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.length > 0) {
      const filtered = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 5));
    } else {
      setSearchSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Handle search logic here
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSearchSuggestions([]);
    // Handle search logic here
    alert(`Searching for: ${suggestion}`);
  };

  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => {
            // If video fails to load, hide it and show fallback background
            e.target.style.display = 'none';
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/3191557/3191557-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          {/* You can replace this with your own college video */}
          {/* Add multiple sources for better browser compatibility */}
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-container">
          <h1 className="hero-title">
            College Admission 2026, Top Engineering and MBA Colleges in India
          </h1>
          <p className="hero-subtitle">
            Get details of Top Engineering, MBA and other streams Colleges in India.
          </p>
          
          <div className="search-container">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <div className="search-wrapper">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for colleges, courses, exams..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => {
                    if (searchQuery.length > 0) {
                      const filtered = allSuggestions.filter(suggestion =>
                        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                      );
                      setSearchSuggestions(filtered.slice(0, 5));
                    }
                  }}
                />
                <button type="submit" className="search-button">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              
              {searchSuggestions.length > 0 && (
                <div className="search-suggestions">
                  {searchSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{suggestion}</span>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

