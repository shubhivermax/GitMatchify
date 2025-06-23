const SignIn = () => {
  return (
    <div className="pt-24 flex items-center justify-center">
        <div className="relative w-96 h-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-8 flex flex-col justify-center items-center overflow-hidden">
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full animate-shine"></div>
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-transparent to-slate-900/50 rounded-2xl"></div>
          
          {/* Content */}
          <div className="relative z-10 w-full">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign In</h2>
            <div className="w-full space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full px-4 py-3 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
              />
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SignIn