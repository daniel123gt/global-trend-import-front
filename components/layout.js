import Header from "./root/Header";
import Footer from "./root/Footer";
import ButtonWhat from "./atom/ButtonWhat";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-[186px] min-h-screen">{children}</main>
      <ButtonWhat />
      <Footer />
    </>
  );
}
