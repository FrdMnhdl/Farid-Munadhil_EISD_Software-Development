import Navbar from '../../../components/Navbar';
import ForumContent from '../../../components/ForumContent';

export default function ForumPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <ForumContent />
      </main>
    </>
  );
}