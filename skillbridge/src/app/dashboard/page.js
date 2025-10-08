import Navbar from '../../../components/Navbar';
import DashboardContent from '../../../components/DashboardContent';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <DashboardContent />
      </main>
    </>
  );
}