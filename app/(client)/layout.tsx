import Footer from "@/components/common/footer";
import Navigation from "@/components/common/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default layout;
