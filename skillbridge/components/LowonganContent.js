'use client';
import { useState } from 'react';
import JobCard from './JobCard';
import JobDetailModal from './JobDetailModal';
import MentorConsultModal from './MentorConsultModal';

export default function LowonganContent() {
  const [activeTab, setActiveTab] = useState('semua'); // semua, melamar, rekomendasi
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showMentorModal, setShowMentorModal] = useState(false);

  // Data dummy job types & locations
  const jobTypes = ['Full Time', 'Part Time', 'Magang', 'Freelance'];
  const locations = ['Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta'];

  // Data dummy jobs
  const jobs = [
    {
      id: 1,
      title: 'Asisten Desainer Grafis',
      company: 'PT Kreatif Media Indonesia',
      location: 'Jakarta',
      salary: 'Rp 1.500.000',
      type: 'Magang',
      typeColor: 'bg-yellow-100 text-yellow-700',
      match: 85,
      applicants: 23,
      description: 'Bergabunglah dengan tim kreatif kami untuk belajar desain grafis dan praktik berpengalaman. Anda akan bekerja dalam proyek-proyek nyata dan mendapat mentoring intensif.',
      fullDescription: 'Bergabunglah dengan tim kreatif kami untuk belajar desain grafis dan praktik berpengalaman. Anda akan bekerja dalam proyek-proyek nyata dan mendapat mentoring intensif.',
      requirements: [
        'Memiliki basic desain grafis',
        'Familiar dengan software Adobe (Photoshop, Illustrator)',
        'Kreatif dan detail-oriented',
        'Mampu bekerja dalam tim'
      ],
      skills: ['Photoshop', 'Illustrator', 'Design Thinking', 'Kreativitas'],
      benefits: [
        'Mentoring dari senior designer',
        'Sertifikat magang',
        'Networking opportunity',
        'Portfolio real project'
      ],
      postedDate: '2025-01-20',
      deadline: '2025-02-15',
      status: 'available'
    },
    {
      id: 2,
      title: 'Admin Media Sosial',
      company: 'UMKM Berkah Jaya',
      location: 'Bandung',
      salary: 'Rp 1.500.000',
      type: 'Part time',
      typeColor: 'bg-blue-100 text-blue-700',
      match: 78,
      applicants: 15,
      description: 'Mengelola konten media sosial untuk UMKM lokal. Posisi ini cocok untuk yang ingin belajar digital marketing sambil berkonribusi pada ekonomi lokal.',
      fullDescription: 'Mengelola konten media sosial untuk UMKM lokal. Posisi ini cocok untuk yang ingin belajar digital marketing sambil berkonribusi pada ekonomi lokal.',
      requirements: [
        'Memahami platform media sosial',
        'Kemampuan copywriting yang baik',
        'Kreatif dalam membuat konten',
        'Fleksibel dengan waktu'
      ],
      skills: ['Social Media', 'Content Creation', 'Communication', 'Digital Marketing'],
      benefits: [
        'Gaji kompetitif',
        'Fleksibilitas waktu',
        'Belajar digital marketing',
        'Bonus performance'
      ],
      postedDate: '2025-01-18',
      deadline: '2025-02-10',
      status: 'applied'
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'Startup TechCorp',
      location: 'Surabaya',
      salary: 'Rp 4.500.000',
      type: 'Full Time',
      typeColor: 'bg-green-100 text-green-700',
      match: 72,
      applicants: 42,
      description: 'Kesempatan bergabung dengan startup teknologi yang sedang berkembang. Anda akan belajar teknologi terkini dan berkontribusi pada produk digital.',
      fullDescription: 'Kesempatan bergabung dengan startup teknologi yang sedang berkembang. Anda akan belajar teknologi terkini dan berkontribusi pada produk digital.',
      requirements: [
        'Menguasai HTML, CSS, JavaScript',
        'Familiar dengan React/Vue',
        'Mampu bekerja dalam tim',
        'Problem solving yang baik'
      ],
      skills: ['HTML', 'CSS', 'Javascript', 'React'],
      benefits: [
        'Gaji kompetitif',
        'Asuransi kesehatan',
        'Training rutin',
        'Work from home flexibility'
      ],
      postedDate: '2025-01-15',
      deadline: '2025-02-05',
      status: 'available'
    },
    {
      id: 4,
      title: 'Content Writer',
      company: 'Digital Agency ABC',
      location: 'Yogyakarta',
      salary: 'Rp 50.000/artikel',
      type: 'Freelance',
      typeColor: 'bg-red-100 text-red-700',
      match: 68,
      applicants: 18,
      description: 'Menulis konten untuk berbagai klien digital agency. Kesempatan mengembangkan skill menulis sambil bekerja dari rumah.',
      fullDescription: 'Menulis konten untuk berbagai klien digital agency. Kesempatan mengembangkan skill menulis sambil bekerja dari rumah.',
      requirements: [
        'Kemampuan menulis yang baik',
        'Kreatif dan teliti',
        'Mampu riset mendalam',
        'Deadline oriented'
      ],
      skills: ['Writing', 'Research', 'SEO', 'Content Strategy'],
      benefits: [
        'Fleksibilitas waktu',
        'Work from anywhere',
        'Portfolio building',
        'Networking dengan klien'
      ],
      postedDate: '2025-01-12',
      deadline: '2025-01-30',
      status: 'available'
    }
  ];

  // Filter jobs
  const getFilteredJobs = () => {
    let filtered = jobs;

    // Filter by tab
    if (activeTab === 'melamar') {
      filtered = filtered.filter(job => job.status === 'applied');
    } else if (activeTab === 'rekomendasi') {
      filtered = filtered.filter(job => job.match >= 75);
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter(job => job.type === selectedType);
    }

    // Filter by location
    if (selectedLocation) {
      filtered = filtered.filter(job => job.location === selectedLocation);
    }

    return filtered;
  };

  const filteredJobs = getFilteredJobs();

  // Tab data
  const tabs = [
    { id: 'semua', label: 'Semua lowongan', count: jobs.length },
    { id: 'melamar', label: 'Sudah Melamar', count: jobs.filter(j => j.status === 'applied').length },
    { id: 'rekomendasi', label: 'Rekomendasi', count: jobs.filter(j => j.match >= 75).length }
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
              placeholder="Cari Pekerjaan"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 text-gray-800 placeholder:text-gray-400"
            />
          </div>

          {/* Type Filter */}
          <div className="relative">
            <button
              onClick={() => {
                setShowTypeDropdown(!showTypeDropdown);
                setShowLocationDropdown(false);
              }}
              className="w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 hover:border-cyan-500 transition-colors"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-800 text-sm font-medium">
                  {selectedType || 'Semua Tipe'}
                </span>
              </div>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showTypeDropdown && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <button
                    onClick={() => {
                      setSelectedType('');
                      setShowTypeDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-cyan-50 rounded-lg text-sm flex items-center gap-2 text-gray-800"
                  >
                    {!selectedType && (
                      <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={!selectedType ? 'font-medium text-gray-900' : 'text-gray-700'}>Semua Tipe</span>
                  </button>
                  {jobTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setShowTypeDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-cyan-50 rounded-lg text-sm flex items-center gap-2 text-gray-800"
                    >
                      {selectedType === type && (
                        <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={selectedType === type ? 'font-medium text-gray-900' : 'text-gray-700'}>{type}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Location Filter */}
          <div className="relative">
            <button
              onClick={() => {
                setShowLocationDropdown(!showLocationDropdown);
                setShowTypeDropdown(false);
              }}
              className="w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 hover:border-cyan-500 transition-colors"
            >
              <span className="text-gray-800 text-sm font-medium">
                {selectedLocation || 'Semua Lokasi'}
              </span>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showLocationDropdown && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <button
                    onClick={() => {
                      setSelectedLocation('');
                      setShowLocationDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-cyan-50 rounded-lg text-sm flex items-center gap-2 text-gray-800"
                  >
                    {!selectedLocation && (
                      <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={!selectedLocation ? 'font-medium text-gray-900' : 'text-gray-700'}>Semua Lokasi</span>
                  </button>
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocationDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-cyan-50 rounded-lg text-sm flex items-center gap-2 text-gray-800"
                    >
                      {selectedLocation === location && (
                        <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={selectedLocation === location ? 'font-medium text-gray-900' : 'text-gray-700'}>{location}</span>
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

      {/* Job Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onDetailClick={() => setSelectedJob(job)}
            onConsultClick={() => setShowMentorModal(true)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-bold text-gray-700 mb-2">Tidak Ada Lowongan Ditemukan</h3>
          <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
        </div>
      )}

      {/* Job Detail Modal */}
      {selectedJob && (
        <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}

      {/* Mentor Consult Modal */}
      {showMentorModal && (
        <MentorConsultModal onClose={() => setShowMentorModal(false)} />
      )}
    </div>
  );
}