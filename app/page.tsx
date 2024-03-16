import Banner from "../components/Banner"
import Aboutme from "@/components/Aboutme";

export default function Home() {
  return (
    <main className="w-full bg-slate-50 text-black px-4">
      <div className="max-w-screen-xl mx-auto">
        <Banner /> 
        <Aboutme />
      </div>
    </main>
  );
}
