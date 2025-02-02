import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SlideProduct from "@/components/SlideProduct";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <main>
      <div>
        <Topbar />
        <Banner />
        <Header />
        <SlideProduct />
      </div>
    </main>
  );
}
