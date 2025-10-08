'use client';
import { useState } from 'react';

export default function AuthForm() {
  // State untuk toggle antara Login/Register
  const [isLogin, setIsLogin] = useState(true);
  
  // State untuk form register
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    usia: '',
    kota: '',
    role: 'pelajar', // default: pelajar
    password: '',
    confirmPassword: '',
    agree: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nanti diganti dengan API call
    console.log('Form submitted:', formData);
    alert(isLogin ? 'Login berhasil!' : 'Registrasi berhasil!');
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">SkillBridge</h1>
        <p className="text-gray-600 text-sm">
          Platform Pendidikan Inklusif untuk Masa Depan yang Lebih Baik
        </p>
      </div>

      {/* Tab Toggle */}
      <div className="flex bg-gray-100 rounded-full p-1 mb-6">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-2 px-4 rounded-full font-medium transition-all ${
            isLogin 
              ? 'bg-white text-gray-800 shadow-md' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Masuk
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-2 px-4 rounded-full font-medium transition-all ${
            !isLogin 
              ? 'bg-white text-gray-800 shadow-md' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Daftar
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Register Form */}
        {!isLogin && (
          <>
            {/* Nama Lengkap */}
            <div className="mb-4">
              <label className="block text-gray-800 font-medium mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                placeholder="Placeholder"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-800 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Placeholder"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            {/* Usia & Kota */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Usia
                </label>
                <input
                  type="number"
                  name="usia"
                  value={formData.usia}
                  onChange={handleInputChange}
                  placeholder="Placeholder"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Kota
                </label>
                <input
                  type="text"
                  name="kota"
                  value={formData.kota}
                  onChange={handleInputChange}
                  placeholder="Placeholder"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
            </div>

            {/* Daftar Sebagai */}
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-3">
                Daftar Sebagai:
              </label>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="pelajar"
                    checked={formData.role === 'pelajar'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="ml-3 text-gray-800">Pelajar</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="mentor"
                    checked={formData.role === 'mentor'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="ml-3 text-gray-800">Mentor</span>
                </label>
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-800 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Placeholder"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            {/* Konfirmasi Password */}
            <div className="mb-4">
              <label className="block text-gray-800 font-medium mb-2">
                Konfirmasi Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Placeholder"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            {/* Checkbox Agreement */}
            <div className="mb-6">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-cyan-600 focus:ring-cyan-500 rounded"
                  required
                />
                <span className="ml-3 text-sm text-gray-700">
                  Saya setuju dengan syarat dan ketentuan SkillBridge
                </span>
              </label>
            </div>

            {/* Button Daftar */}
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Daftar
            </button>
          </>
        )}

        {/* Login Form */}
        {isLogin && (
          <>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-800 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@gmail.com"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-800 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Placeholder"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            {/* Button Masuk */}
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Masuk
            </button>
          </>
        )}
      </form>
    </div>
  );
}