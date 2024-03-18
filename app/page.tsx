import Banner from "../components/Banner"
import Aboutme from "@/components/Aboutme";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-50 px-4">
      <div className="max-w-screen-xl mx-auto ">
        <Banner /> 
        <Aboutme />
      </div>
    </main>
  );
}
