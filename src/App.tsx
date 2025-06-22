import { useState } from 'react'
import './App.css'
import { TextReveal } from "@/components/magicui/text-reveal";
import { AuroraText } from "@/components/magicui/aurora-text";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuroraText className="aurora-text-massive" speed={2}>CodeConnect</AuroraText>
      <div className="mt-8 flex justify-center">
        <div className="w-96 h-64 bg-black rounded-2xl shadow-2xl border border-gray-800 p-8 flex flex-col justify-center items-center">
          <h2 className="text-white text-2xl font-bold mb-6">Sign In</h2>
          <div className="w-full space-y-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
