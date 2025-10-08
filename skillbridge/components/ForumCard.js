export default function ForumCard({ thread }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
      {/* Tags & Category */}
      <div className="flex gap-2 mb-3">
        <span className={`text-xs px-3 py-1 rounded-full ${thread.categoryColor}`}>
          {thread.category}
        </span>
        {thread.tags && thread.tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-cyan-600 cursor-pointer transition-colors">
        {thread.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-600 mb-4 line-clamp-2">
        {thread.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={thread.author.avatar}
            alt={thread.author.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-cyan-100"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-800 text-sm">{thread.author.name}</span>
              <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full">
                {thread.author.role}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {thread.timeAgo}
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {thread.replies} balasan
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-gray-600 hover:text-cyan-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="font-medium text-sm">{thread.likes}</span>
          </button>

          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Balas
          </button>
        </div>
      </div>
    </div>
  );
}