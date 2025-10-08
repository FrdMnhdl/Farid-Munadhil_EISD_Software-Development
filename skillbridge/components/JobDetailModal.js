'use client';

export default function JobDetailModal({ job, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-gray-600">{job.company} • {job.location}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors ml-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Type & Match Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${job.typeColor}`}>
              {job.type}
            </span>
            <span className="text-sm font-bold bg-green-100 text-green-600 px-3 py-1 rounded-full">
              {job.match}% match
            </span>
            <span className="text-sm text-gray-600">Rp {job.salary}</span>
          </div>

          {/* Deskripsi Pekerjaan */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Deskripsi Pekerjaan</h3>
            <p className="text-gray-700 leading-relaxed">{job.fullDescription}</p>
          </div>

          {/* Persyaratan */}
          {job.requirements && job.requirements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Persyaratan</h3>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills yang Dibutuhkan */}
          {job.skills && job.skills.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Skills yang Dibutuhkan</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span key={index} className="text-sm px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Benefits</h3>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Tutup
            </button>
            <button
              className="flex-1 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
            >
              {job.status === 'applied' ? 'Sudah Melamar' : 'Lamar Sekarang'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}