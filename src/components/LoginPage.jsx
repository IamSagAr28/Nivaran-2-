import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft, ShoppingBag } from 'lucide-react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dad7cd] via-[#a3b18a] to-[#588157] flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#344e41]/10 via-transparent to-[#588157]/10"></div>
      
      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#3a5a40] to-[#588157] px-8 py-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={goToHome}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Go back to home"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <img 
                src="/images/logo.png" 
                alt="Nivaran Logo" 
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  // Fallback to shopping bag icon if logo fails to load
                  e.target.style.display = 'none';
                  e.target.insertAdjacentHTML('beforebegin', '<div class="w-6 h-6 flex items-center justify-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></div>');
                }}
              />
              <span className="text-lg font-bold">Nivaran</span>
            </div>
            <div></div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">
              {isLogin ? 'Welcome Back!' : 'Join Nivaran'}
            </h1>
            <p className="text-[#dad7cd] text-sm">
              {isLogin 
                ? 'Sign in to continue your sustainable journey' 
                : 'Start your eco-friendly shopping experience'
              }
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field for registration */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#3a5a40] flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#a3b18a]/30 rounded-lg focus:outline-none focus:border-[#588157] focus:ring-2 focus:ring-[#588157]/20 transition-all"
                  placeholder="Enter your full name"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Email field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#3a5a40] flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#a3b18a]/30 rounded-lg focus:outline-none focus:border-[#588157] focus:ring-2 focus:ring-[#588157]/20 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#3a5a40] flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-[#a3b18a]/30 rounded-lg focus:outline-none focus:border-[#588157] focus:ring-2 focus:ring-[#588157]/20 transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a3b18a] hover:text-[#588157] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password field for registration */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#3a5a40] flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#a3b18a]/30 rounded-lg focus:outline-none focus:border-[#588157] focus:ring-2 focus:ring-[#588157]/20 transition-all"
                  placeholder="Confirm your password"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Forgot Password */}
            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-[#588157] hover:text-[#3a5a40] transition-colors">
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3a5a40] to-[#588157] text-white py-3 rounded-lg font-medium hover:from-[#588157] hover:to-[#a3b18a] transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-[#a3b18a]/30"></div>
            <span className="text-sm text-[#a3b18a]">or</span>
            <div className="flex-1 h-px bg-[#a3b18a]/30"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 border border-[#a3b18a]/30 py-3 rounded-lg hover:bg-[#dad7cd]/20 transition-colors">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5" />
              <span className="text-[#3a5a40]">Continue with Google</span>
            </button>
          </div>

          {/* Toggle Login/Register */}
          <div className="mt-6 text-center">
            <p className="text-[#a3b18a] text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-[#588157] font-medium hover:text-[#3a5a40] transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#dad7cd]/30 px-8 py-4 text-center">
          <p className="text-xs text-[#344e41] mb-2">
            By continuing, you agree to our{' '}
            <a href="#" className="text-[#588157] hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-[#588157] hover:underline">Privacy Policy</a>
          </p>
          <p className="text-xs text-[#a3b18a]">
            <button onClick={goToHome} className="text-[#588157] hover:underline">
              ← Back to Nivaran Homepage
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;