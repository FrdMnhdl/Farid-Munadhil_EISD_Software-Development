import Navbar from '../../../components/Navbar';
import KursusContent from '../../../components/KursusContent';

export default function KursusPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <KursusContent />
      </main>
    </>
  );
}