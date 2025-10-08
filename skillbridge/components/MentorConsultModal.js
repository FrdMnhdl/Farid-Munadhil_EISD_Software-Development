'use client';

export default function MentorConsultModal({ onClose }) {
  // Data dummy mentors
  const mentors = [
    {
      id: 1,
      name: 'Sarah Wijaya',
      avatar: 'https://i.pravatar.cc/150?img=47',
      experience: '8 tahun di bidang HR dan Career Development',
      rating: 4.9,
      reviews: 87,
      tags: ['Career Guidance', 'Resume Review', 'Interview Prep']
    },
    {
      id: 2,
      name: 'Budi Santoso',
      avatar: 'https://i.pravatar.cc/150?img=33',
      experience: '10 tahun sebagai Software Engineer dan Tech Lead',
      rating: 4.8,
      reviews: 65,
      tags: ['Tech Career', 'Skill Assessment', 'Industry Insights']
    },
    {
      id: 3,
      name: 'Maya Putri',
      avatar: 'https://i.pravatar.cc/150?img=45',
      experience: '6 tahun di creative agency dan freelance',
      rating: 4.7,
      reviews: 52,
      tags: ['Creative Fields', 'Portfolio Review', 'Industry Network']
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Konsultasi dengan mentor</h2>
              <p className="text-sm text-gray-600 mt-1">Dapatkan saran dari mentor berpengalaman sebelum melamar pekerjaan</p>
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

        {/* Mentor List */}
        <div className="p-6 space-y-4">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all">
              <div className="flex gap-4">
                {/* Avatar */}
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-100 flex-shrink-0"
                />

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{mentor.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{mentor.experience}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="font-bold text-gray-800">{mentor.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({mentor.reviews} reviews)</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {mentor.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-3 py-1 rounded-full bg-cyan-100 text-cyan-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-medium transition-colors">
                    Konsultasi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}