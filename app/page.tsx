import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";

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
