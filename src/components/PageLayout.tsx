import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
