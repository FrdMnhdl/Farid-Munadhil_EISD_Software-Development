import Navbar from '../../../components/Navbar';
import LowonganContent from '../../../components/LowonganContent';

export default function LowonganPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <LowonganContent />
      </main>
    </>
  );
}