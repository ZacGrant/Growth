import Navbar from "@/components/Navbar";
import DashboardGrid from "@/components/DashboardGrid";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Growth - Continuous Self Development Together</title>
        <meta name="description" content="Grow alongside like-minded individuals. Share your journey, celebrate wins, and support each other on the path to becoming your best self." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <DashboardGrid />
        </main>
      </div>
    </>
  );
};

export default Index;