import Header from "./root/Header";
import Footer from "./root/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-64 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
