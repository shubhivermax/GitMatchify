import { useState } from 'react'
import './App.css'
import { AuroraText } from "@/components/magicui/aurora-text";
import SignIn from './components/magicui/SignIn';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AuroraText className="aurora-text-massive" speed={2}>CodeConnect</AuroraText>
      <SignIn />
    </div>
  )
}

export default App
