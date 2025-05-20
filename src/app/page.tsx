import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import "../styles/globals.scss";
import BigSlider from "@/components/Slider";
import InfoCards from "@/components/InfoCards";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div>
      <main>
        <NavigationBar />
        <Header />
        <BigSlider />
        <InfoCards />
        <Products />
      </main>
    </div>
  );
}
