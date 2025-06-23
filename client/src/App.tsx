import { useState } from 'react'
import './App.css'
import './styles.css'
import { AuroraText } from "@/components/magicui/aurora-text";
import SignIn from './components/magicui/SignIn';

function App() {
  const [screen, setScreen] = useState<'signin' | 'signup' | 'landing'>('signin');

  return (

    <div className="page-container">
      <AuroraText className="aurora-text-massive" speed={2}>GitMatchify</AuroraText>
      <div className='page-subtitle'>Connect with developers for your projects!</div>
      
      <SignIn />
      <button className='signup'>Sign Up Here</button>
    </div>
  )
}

export default App
