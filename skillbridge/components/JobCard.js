export default function JobCard({ job, onDetailClick, onConsultClick }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all">
      {/* Header: Type Badge & Match */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${job.typeColor}`}>
          {job.type}
        </span>
        {job.status === 'applied' && (
          <span className="text-xs px-3 py-1 rounded-full font-medium bg-green-100 text-green-700">
            ✓ Applied
          </span>
        )}
        <span className="text-sm font-bold text-green-600">{job.match}% match</span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-gray-800 text-xl mb-2">
        {job.title}
      </h3>

      {/* Company */}
      <p className="text-gray-700 mb-4">{job.company}</p>

      {/* Location & Salary */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>{job.applicants} pelamar</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {job.description}
      </p>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {job.skills && job.skills.slice(0, 3).map((skill, index) => (
          <span key={index} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
            {skill}
          </span>
        ))}
        {job.skills && job.skills.length > 3 && (
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
            +{job.skills.length - 3} lainnya
          </span>
        )}
      </div>

      {/* Dates */}
      <div className="text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
        <div className="flex justify-between">
          <span>Posted: {job.postedDate}</span>
          <span>Deadline: {job.deadline}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-2">
        <button
          onClick={onDetailClick}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2.5 rounded-lg font-medium transition-colors"
        >
          Lihat Detail
        </button>
        <button
          onClick={onConsultClick}
          className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Konsultasi Mentor
        </button>
      </div>
    </div>
  );
}