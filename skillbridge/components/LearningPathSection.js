export default function LearningPathSection() {
  // Data dummy untuk learning paths
  const learningPaths = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Literasi Digital",
      description: "Dasar-dasar komputer dan penggunaan digital",
      courses: "15 Kursus"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Numerasi",
      description: "Matematika dasar dan kemampuan praktis",
      courses: "8 Kursus"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Soft Skills",
      description: "Komunikasi, teamwork, dan leadership",
      courses: "12 Kursus"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Keterampilan Vokasi",
      description: "Skill praktis siap kerja industri",
      courses: "18 Kursus"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Jalur Pembelajaran Tersedia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih jalur pembelajaran yang sesuai dengan kebutuhan dan minat Anda
          </p>
        </div>

        {/* Learning Path Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPaths.map((path, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100 text-center group"
            >
              <div className="bg-cyan-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {path.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {path.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {path.description}
              </p>
              <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                {path.courses}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}