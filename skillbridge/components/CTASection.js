import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Siap Memulai Perjalanan Belajar Anda?
        </h2>
        <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan pelajar yang telah lebih baik bersama SkillBridge
        </p>
        <Link href="/auth">
        <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2 shadow-lg">
          Mulai Belajar Gratis
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        </Link>
      </div>
    </section>
  );
}