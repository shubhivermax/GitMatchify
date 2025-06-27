
import './App.css'
import './styles.css'
import { AuroraText } from "@/components/magicui/aurora-text";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  /*const [screen, setScreen] = useState<'signin' | 'signup' | 'landing'>('signin'); */

  return (

    <div className="page-container">
      <AuroraText className="aurora-text-massive" speed={2}>GitMatchify</AuroraText>
      <div className='page-subtitle'>Connect with developers for your projects!</div>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>

      </Routes>
    </div>
  )
}

export default App
