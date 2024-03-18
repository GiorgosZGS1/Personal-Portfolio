import Banner from "../components/Banner"
import Aboutme from "@/components/Aboutme";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-50 px-4">
      <div className="max-w-screen-xl mx-auto ">
        <Banner /> 
        <Aboutme />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
