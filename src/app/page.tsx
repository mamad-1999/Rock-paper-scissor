import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Time from "./components/Time";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-indigo-400">
      <NavBar />
      <Time />
      <Footer />
    </main>
  )
}
