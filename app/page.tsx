import Header from "@/components/Header";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <div>
        <Topbar />
        <Banner />
        <Header />
      </div>
    </main>
  );
}
