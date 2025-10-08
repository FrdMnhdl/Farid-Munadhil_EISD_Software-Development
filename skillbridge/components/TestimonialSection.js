export default function TestimonialSection() {
  // Data dummy untuk testimonials
  const testimonials = [
    {
      name: "Ahmad Rizki",
      role: "Alumni SkillBridge",
      image: "https://i.pravatar.cc/150?img=12",
      text: "SkillBridge mengubah hidup saya. Dari tidak tahu apa-apa soal komputer, sekarang saya bisa bekerja sebagai admin digital. Platform ini benar-benar membantu orang seperti saya."
    },
    {
      name: "Sari Dewi",
      role: "Pelajar Aktif",
      image: "https://i.pravatar.cc/150?img=45",
      text: "Teachernya ramah dan sabar banget. Materi mudah dipahami dan banyak praktik langsung. Sekarang saya sudah bekerja dan bisa membantu keluarga dengan gaji yang layak."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Cerita Sukses Alumni
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan langsung dari mereka yang telah berhasil mengubah hidup melalui SkillBridge
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-cyan-100"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed italic">
                {testimonial.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}