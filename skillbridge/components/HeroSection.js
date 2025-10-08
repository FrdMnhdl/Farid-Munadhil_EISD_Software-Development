import Link from "next/link";

export default function HeroSection() {
  // Data dummy untuk stats
  const stats = [
    { number: "5.000+", label: "Pelajar Aktif" },
    { number: "250+", label: "Kursus Tersedia" },
    { number: "150+", label: "Mitra Industri" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="bg-gradient-to-b from-cyan-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Bangun Masa Depan Lebih Baik
            <br />
            dengan <span className="text-cyan-600">SkillBridge</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Platform pendidikan inklusif yang menyediakan jalur pembelajaran dari literasi dasar hingga keterampilan vokasi, dilengkapi job matching untuk masa depan yang lebih cerah.
          </p>
          <Link href="/auth">
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
            Mulai Belajar Gratis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          </Link>
        </div>

        {/* Hero Image dengan Stats */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80" 
              alt="Learning Experience"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Stats Cards Overlay */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4">
            <div className="bg-white rounded-2xl shadow-xl p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center py-2">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}