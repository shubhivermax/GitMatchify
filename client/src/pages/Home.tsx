import { useNavigate } from 'react-router-dom';
import GitBgHome from '../assets/HomeBG.png';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div
      className="page-background"
      
    >
      <div className="home-box">
        <h1 className="home-title">Welcome to GitMatchify</h1>
        <p className="home-desc">
          Discover your perfect developer match, Tinder-style — based on GitHub stats, coding languages, and repo activity.
        </p>
        <button className="home-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

