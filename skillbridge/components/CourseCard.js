export default function CourseCard({ course, activeTab }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all group">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {course.badge && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            {course.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">
        {/* Title & Rating */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-gray-800 text-lg flex-1 line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-sm font-bold text-gray-700">{course.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mb-4">
          <span className={`text-xs px-3 py-1 rounded-full ${course.categoryColor}`}>
            {course.category}
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
            {course.level}
          </span>
          {course.hasCertificate && (
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              Sertifikat
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>{course.modules} pelajaran</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{course.students}</span>
          </div>
        </div>

        {/* Progress Bar (for enrolled courses) - Fixed Height */}
        <div className="mb-4 min-h-[60px]">
          {course.progress !== null && (
            <>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-bold text-gray-800">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-cyan-600 h-2 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </>
          )}
        </div>

        {/* Instructor */}
        <p className="text-xs text-gray-500 mb-4">
          Instruktur: {course.instructor}
        </p>

        {/* Button - Always at bottom */}
        <div className="mt-auto">
          {course.status === 'enrolled' ? (
            <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2.5 rounded-lg font-medium transition-colors">
              Lanjutkan Belajar
            </button>
          ) : (
            <button className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white py-2.5 rounded-lg font-medium transition-colors">
              Daftar Kursus
            </button>
          )}
        </div>
      </div>
    </div>
  );
}