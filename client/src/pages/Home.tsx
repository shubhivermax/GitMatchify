import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome to GitMatchify</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Discover your perfect developer match, Tinder-style — based on GitHub stats, coding languages, and repo activity.
      </p>
      <button
        onClick={handleGetStarted}
        className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition duration-200"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
