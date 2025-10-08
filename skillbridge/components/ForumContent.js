'use client';
import { useState } from 'react';
import ForumCard from './ForumCard';
import CreateTopicModal from './CreateTopicModal';

export default function ForumContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Data dummy categories
  const categories = ['Numerasi', 'Soft Skills', 'Vokasi', 'Literasi', 'Karir', 'Teknologi', 'Umum'];

  // Data dummy stats
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      value: '4',
      label: 'Total Topik',
      color: 'text-cyan-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      value: '156',
      label: 'Anggota Aktif',
      color: 'text-green-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      value: '53',
      label: 'Total Balasan',
      color: 'text-blue-600'
    }
  ];

  // Data dummy forum threads
  const forumThreads = [
    {
      id: 1,
      title: 'Tips Belajar Literasi Digital yang Efektif',
      excerpt: 'Halo teman-teman! Saya mau share beberapa tips yang membantu saya dalam belajar literasi digital. Pertama, mulai dari hal-hal dasar seperti mengenal komputer...',
      author: {
        name: 'Ahmad Rizki',
        avatar: 'https://i.pravatar.cc/150?img=12',
        role: 'Pelajar'
      },
      category: 'Literasi',
      categoryColor: 'bg-cyan-100 text-cyan-700',
      tags: ['Sertifikat', 'Sertifikat'],
      likes: 8,
      replies: 12,
      timeAgo: '2 jam yang lalu'
    },
    {
      id: 2,
      title: 'Mencari Mentor untuk Desain Grafis',
      excerpt: 'Hi, saya sedang belajar desain grafis dan butuh guidance. Ada yang bisa recommend mentor yang baik?',
      author: {
        name: 'Sari Dewi',
        avatar: 'https://i.pravatar.cc/150?img=45',
        role: 'Pelajar'
      },
      category: 'Vokasi',
      categoryColor: 'bg-red-100 text-red-700',
      tags: ['#mentor', '#desain-grafis', '#bantuan'],
      likes: 5,
      replies: 7,
      timeAgo: '1 hari yang lalu'
    },
    {
      id: 3,
      title: 'Sharing: Pengalaman Magang di Startup Tech',
      excerpt: 'Halo semua! Saya baru selesai magang 3 bulan di startup teknologi. Mau sharing pengalaman dan tips untuk yang mau apply magang...',
      author: {
        name: 'Budi Santoso',
        avatar: 'https://i.pravatar.cc/150?img=33',
        role: 'Pelajar'
      },
      category: 'Karir',
      categoryColor: 'bg-teal-100 text-teal-700',
      tags: ['#magang', '#startup', '#pengalaman'],
      likes: 16,
      replies: 25,
      timeAgo: '3 jam yang lalu'
    },
    {
      id: 4,
      title: 'Workshop Komunikasi Efektif - Feedback',
      excerpt: 'Bagi yang sudah ikut workshop komunikasi efektif kemarin, gimana pendapatnya? Materinya cukup aplikatif ga?',
      author: {
        name: 'Dr. Maya Sari',
        avatar: 'https://i.pravatar.cc/150?img=47',
        role: 'Mentor'
      },
      category: 'Soft Skills',
      categoryColor: 'bg-pink-100 text-pink-700',
      tags: ['#workshop', '#komunikasi', '#feedback'],
      likes: 11,
      replies: 9,
      timeAgo: '5 jam yang lalu'
    }
  ];

  // Filter threads
  const getFilteredThreads = () => {
    let filtered = forumThreads;

    if (searchQuery) {
      filtered = filtered.filter(thread =>
        thread.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(thread => thread.category === selectedCategory);
    }

    return filtered;
  };

  const filteredThreads = getFilteredThreads();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Forum Diskusi</h1>
          <p className="text-gray-600">Berbagi pengalaman, ajukan pertanyaan, dan belajar bersama komunitas SkillBridge</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Buat Topik Baru
        </button>
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
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="w-full md:w-56 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 hover:border-cyan-500 transition-colors"
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
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className={`${stat.color} mb-3`}>{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Forum Threads */}
      <div className="space-y-4">
        {filteredThreads.map((thread) => (
          <ForumCard key={thread.id} thread={thread} />
        ))}
      </div>

      {/* Empty State */}
      {filteredThreads.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <h3 className="text-xl font-bold text-gray-700 mb-2">Tidak Ada Topik Ditemukan</h3>
          <p className="text-gray-500 mb-4">Coba ubah filter atau kata kunci pencarian Anda</p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Buat Topik Pertama
          </button>
        </div>
      )}

      {/* Create Topic Modal */}
      {showCreateModal && (
        <CreateTopicModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}