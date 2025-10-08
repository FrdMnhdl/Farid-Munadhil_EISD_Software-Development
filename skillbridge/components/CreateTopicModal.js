'use client';
import { useState } from 'react';

export default function CreateTopicModal({ onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    tags: '',
    content: ''
  });
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const categories = ['Literasi', 'Numerasi', 'Soft Skills', 'Vokasi', 'Karir', 'Teknologi', 'Umum'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nanti diganti dengan API call
    console.log('Form submitted:', formData);
    alert('Topik berhasil dibuat!');
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Buat Topik Diskusi Baru</h2>
              <p className="text-sm text-gray-600 mt-1">Bagikan pertanyaan, tips, atau pengalaman Anda dengan komunitas</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Title */}
          <div className="mb-5">
            <label className="block text-gray-800 font-medium mb-2">
              Judul Topik
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Tulis judul yang menarik dan deskriptif"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-800 placeholder:text-gray-400"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-5 relative">
            <label className="block text-gray-800 font-medium mb-2">
              Kategori
            </label>
            <button
              type="button"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <span className={formData.category ? 'text-gray-800' : 'text-gray-400'}>
                {formData.category || 'Tulis judul yang menarik dan deskriptif'}
              </span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showCategoryDropdown && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                <div className="p-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, category }));
                        setShowCategoryDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-cyan-50 rounded-lg text-sm text-gray-800 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="mb-5">
            <label className="block text-gray-800 font-medium mb-2">
              Tags (opsional)
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="tips, belajar, bantuan (pisahkan dengan koma)"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-800 placeholder:text-gray-400"
            />
            <p className="text-xs text-gray-500 mt-1">Tambahkan kata kunci untuk memudahkan pencarian topik</p>
          </div>

          {/* Content */}
          <div className="mb-6">
            <label className="block text-gray-800 font-medium mb-2">
              Konten
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Tulis konten topik diskusi Anda di sini..."
              rows="8"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-800 placeholder:text-gray-400 resize-none"
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
            >
              Posting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}