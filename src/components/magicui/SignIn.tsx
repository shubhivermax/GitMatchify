const SignIn = () => {
  return (
    <div className="signin-container">
        <div className="signin-card">
          {/* Shine effect overlay */}
          <div className="signin-shine-overlay"></div>
          
          {/* Subtle inner glow */}
          <div className="signin-inner-glow"></div>
          
          {/* Content */}
          <div className="signin-content">
            <h2 className="signin-title">Sign In</h2>
            <div className="signin-form">
              <input 
                type="email" 
                placeholder="Email" 
                className="form-input"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="form-input"
              />
              <button className="primary-button">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SignIn