import './App.css'
import './styles.css'
import { AuroraText } from "@/components/magicui/aurora-text";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import HomeBG from './assets/HomeBG.png'

axios.defaults.baseURL = 'http://localhost:5173';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div
      className="app-background"
      style={{ backgroundImage: `url(${HomeBG})` }}
    >
      <AuroraText className="aurora-text-massive" speed={2}>GitMatchify</AuroraText>
      <div className='page-subtitle'>Connect with developers for your projects!</div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
