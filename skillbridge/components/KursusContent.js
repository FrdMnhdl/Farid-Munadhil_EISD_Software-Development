'use client';
import { useState } from 'react';
import CourseCard from './CourseCard';

export default function KursusContent() {
  const [activeTab, setActiveTab] = useState('semua'); // semua, saya, tersedia
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);

  // Data dummy categories
  const categories = ['Numerasi', 'Soft Skills', 'Vokasi', 'Literasi'];
  
  // Data dummy levels
  const levels = ['Pemula', 'Menengah', 'Lanjut'];

  // Data dummy all courses
  const allCourses = [
    {
      id: 1,
      title: 'Literasi Digital Dasar',
      description: 'Memahami konsep dasar teknologi digital dan penggunaan komputer untuk kehidupan sehari-hari.',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80',
      category: 'Literasi',
      level: 'Pemula',
      categoryColor: 'bg-cyan-100 text-cyan-700',
      rating: 4.8,
      duration: '20 jam',
      students: 1245,
      modules: 12,
      instructor: 'Dr. Sarah Wijaya',
      progress: 20,
      status: 'enrolled', // enrolled, available
      badge: 'Terdaftar'
    },
    {
      id: 2,
      title: 'Numerasi untuk UMKM',
      description: 'Keterampilan hitung praktis untuk mengelola usaha kecil dan menengah dengan efektif.',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80',
      category: 'Numerasi',
      level: 'Menengah',
      categoryColor: 'bg-purple-100 text-purple-700',
      rating: 4.6,
      duration: '15 jam',
      students: 892,
      modules: 10,
      instructor: 'Prof. Ahmad Susanto',
      progress: null,
      status: 'available',
      badge: 'Terdaftar',
      hasCertificate: true
    },
    {
      id: 3,
      title: 'Komunikasi Efektif',
      description: 'Mengembangkan keterampilan berkomunikasi yang baik dalam berbagai situasi dan konteks.',
      thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80',
      category: 'Soft Skills',
      level: 'Pemula',
      categoryColor: 'bg-pink-100 text-pink-700',
      rating: 4.9,
      duration: '12 jam',
      students: 1567,
      modules: 8,
      instructor: 'Dra. Maya Sari',
      progress: 45,
      status: 'enrolled',
      badge: 'Terdaftar',
      hasCertificate: true
    },
    {
      id: 4,
      title: 'Desain Grafis Pemula',
      description: 'Dasar-dasar desain grafis menggunakan software gratis untuk membuat konten visual menarik.',
      thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&q=80',
      category: 'Vokasi',
      level: 'Pemula',
      categoryColor: 'bg-red-100 text-red-700',
      rating: 4.7,
      duration: '25 jam',
      students: 734,
      modules: 15,
      instructor: 'Rizki Pratama, S.Sn',
      progress: 20,
      status: 'enrolled',
      badge: 'Terdaftar',
      hasCertificate: true
    },
    {
      id: 5,
      title: 'Kewirausahaan Digital',
      description: 'Memulai dan mengembangkan bisnis online dengan strategi digital marketing yang efektif.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
      category: 'Vokasi',
      level: 'Menengah',
      categoryColor: 'bg-red-100 text-red-700',
      rating: 4.8,
      duration: '30 jam',
      students: 456,
      modules: 18,
      instructor: 'Budi Santoso, MBA',
      progress: null,
      status: 'available',
      badge: null
    },
    {
      id: 6,
      title: 'Leadership untuk Generasi Muda',
      description: 'Mengembangkan jiwa kepemimpinan dan kemampuan mengelola tim dalam berbagai situasi.',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80',
      category: 'Soft Skills',
      level: 'Lanjut',
      categoryColor: 'bg-pink-100 text-pink-700',
      rating: 4.5,
      duration: '18 jam',
      students: 623,
      modules: 12,
      instructor: 'Dr. Indra Wijaya',
      progress: null,
      status: 'available',
      badge: null,
      hasCertificate: true
    }
  ];

  // Filter courses based on active tab
  const getFilteredCourses = () => {
    let filtered = allCourses;

    // Filter by tab
    if (activeTab === 'saya') {
      filtered = filtered.filter(course => course.status === 'enrolled');
    } else if (activeTab === 'tersedia') {
      filtered = filtered.filter(course => course.status === 'available');
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Filter by level
    if (selectedLevel) {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    return filtered;
  };

  const filteredCourses = getFilteredCourses();

  // Tab data
  const tabs = [
    { id: 'semua', label: 'Semua Kursus', count: allCourses.length },
    { id: 'saya', label: 'Kursus Saya', count: allCourses.filter(c => c.status === 'enrolled').length },
    { id: 'tersedia', label: 'Tersedia', count: allCourses.filter(c => c.status === 'available').length }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Kursus SkillBridge</h1>
        <p className="text-gray-600">Temukan kursus yang sesuai dengan kebutuhan dan minat Anda</p>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cari Kursus"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 text-gray-800 placeholder:text-gray-400"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <button
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowLevelDropdown(false);
              }}
              className="w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 hover:border-cyan-500 transition-colors"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span className="text-gray-800 text-sm font-medium">
                  {selectedCategory || 'Semua Kategori'}
                </span>
              </div>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showCategoryDropdown && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <button
                    onClick={() => {
                      setSelectedCategory('');
                      setShowCategoryDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-cyan-50 rounded-lg text-sm flex items-center gap-2 text-gray-800"
                  >
                    {!selectedCategory && (
                      <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={!selectedCategory ? 'font-medium text-gray-900' : 'text-gray-700'}>Semua Kategori</span>
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategoryDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-cyan-50 rounded-lg text-sm flex items-center gap-2 text-gray-800"
                    >
                      {selectedCategory === category && (
                        <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={selectedCategory === category ? 'font-medium text-gray-900' : 'text-gray-700'}>{category}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Level Filter */}
          <div className="relative">
            <button
              onClick={() => {
                setShowLevelDropdown(!showLevelDropdown);
                setShowCategoryDropdown(false);
              }}
              className="w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 hover:border-cyan-500 transition-colors"
            >
              <span className="text-gray-800 text-sm font-medium">
                {selectedLevel || 'Semua Level'}
              </span>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showLevelDropdown && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <button
                    onClick={() => {
                      setSelectedLevel('');
                      setShowLevelDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-sm flex items-center gap-2"
                  >
                    {!selectedLevel && (
                      <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={!selectedLevel ? 'font-medium' : ''}>Semua Level</span>
                  </button>
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => {
                        setSelectedLevel(level);
                        setShowLevelDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-sm flex items-center gap-2"
                    >
                      {selectedLevel === level && (
                        <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={selectedLevel === level ? 'font-medium' : ''}>{level}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Course Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} activeTab={activeTab} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-16">
          <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-bold text-gray-700 mb-2">Tidak Ada Kursus Ditemukan</h3>
          <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
        </div>
      )}
    </div>
  );
}