import logoImage from '../images/Collegexplorer_img.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <a href="/" className="logo-link">
        <img 
          src={logoImage} 
          alt="CollegeXplorer - Explore Your Dream College"
          className="logo-image"
        />
      </a>
    </div>
  );
};

export default Logo;

