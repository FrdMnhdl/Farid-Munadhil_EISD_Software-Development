'use client';

export default function DashboardContent() {
  // Data dummy stats
  const stats = [
    {
      label: 'Kursus Aktif',
      value: '3',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'text-cyan-600'
    },
    {
      label: 'Sertifikat',
      value: '2',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: 'text-green-600'
    },
    {
      label: 'Total Jam',
      value: '47h',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-blue-600'
    },
    {
      label: 'Level Skill',
      value: 'Menengah',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'text-purple-600'
    }
  ];

  // Data dummy courses sedang diikuti
  const ongoingCourses = [
    {
      title: 'Literasi Digital Dasar',
      category: 'Literasi',
      level: 'Pemula',
      progress: 75,
      students: '0/12 Pelajaran',
      deadline: '2025-10-15',
      color: 'bg-cyan-100 text-cyan-700'
    },
    {
      title: 'Komunikasi Efektif',
      category: 'Soft Skills',
      level: 'Menengah',
      progress: 45,
      students: '4/8 Pelajaran',
      deadline: '2025-10-15',
      color: 'bg-pink-100 text-pink-700'
    },
    {
      title: 'Desain Grafis Pemula',
      category: 'Vokasi',
      level: 'Pemula',
      progress: 20,
      students: '0/12 Pelajaran',
      deadline: '2025-10-15',
      color: 'bg-red-100 text-red-700'
    }
  ];

  // Data dummy achievements
  const achievements = [
    {
      title: 'Sertifikat Numerasi Dasar',
      date: '25 Agustus 2025',
      icon: '🎓'
    },
    {
      title: 'Quiz Komunikasi - Score 95%',
      date: '18 Agustus 2025',
      icon: '✅'
    },
    {
      title: 'Menyelesaikan Modul Literasi',
      date: '10 Agustus 2025',
      icon: '📚'
    }
  ];

  // Data dummy job recommendations
  const jobRecommendations = [
    {
      title: 'Asisten Designer Grafis',
      company: 'PT Kreatif Media',
      location: 'Jakarta',
      match: '85%',
      type: 'Magang',
      typeColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Admin Media Sosial',
      company: 'UMKM Berkah',
      location: 'Bandung',
      match: '78%',
      type: 'Part-time',
      typeColor: 'bg-blue-100 text-blue-700'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Selamat Datang, Izaz!</h1>
        <p className="text-cyan-50">
          Mari lanjutkan perjalanan belajar Anda hari ini. Anda sudah menyelesaikan 2 kursus dan sedang mengikuti 3 kursus lainnya.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 text-sm font-medium">{stat.label}</span>
              <div className={`${stat.color}`}>{stat.icon}</div>
            </div>
            <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Ongoing Courses */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Kursus Sedang Diikuti</h2>
                <p className="text-sm text-gray-600">Lanjutkan pembelajaran Anda</p>
              </div>
            </div>

            <div className="space-y-4">
              {ongoingCourses.map((course, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">{course.title}</h3>
                      <div className="flex gap-2">
                        <span className={`text-xs px-3 py-1 rounded-full ${course.color}`}>
                          {course.category}
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                          {course.level}
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-gray-400">{course.progress}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-800 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{course.students}</span>
                    <span>Deadline: {course.deadline}</span>
                  </div>

                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2.5 rounded-lg font-medium transition-colors">
                    Lanjutkan Belajar
                  </button>
                </div>
              ))}

              <button className="w-full border-2 border-gray-300 hover:border-cyan-600 hover:text-cyan-600 text-gray-700 py-3 rounded-lg font-medium transition-colors">
                Lihat Semua Kursus
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <div>
                <h2 className="font-bold text-gray-800">Pencapaian Terbaru</h2>
                <p className="text-xs text-gray-600">Prestasi yang baru saja Anda raih</p>
              </div>
            </div>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 text-sm">{achievement.title}</h4>
                    <p className="text-xs text-gray-600">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Recommendations */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h2 className="font-bold text-gray-800">Lowongan Rekomendasi</h2>
                <p className="text-xs text-gray-600">Peluang kerja yang sesuai dengan skill Anda</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {jobRecommendations.map((job, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-800 text-sm">{job.title}</h4>
                    <span className="text-xs font-bold text-green-600">{job.match} match</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{job.company}</p>
                  <p className="text-xs text-gray-600 mb-3">{job.location}</p>
                  <span className={`inline-block text-xs px-3 py-1 rounded-full ${job.typeColor}`}>
                    {job.type}
                  </span>
                  <button className="w-full mt-3 border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    Lihat Detail
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-medium transition-colors">
              Jelajahi Semua Lowongan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}