// lets take this as root component :)
import { Outlet } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="pb-16 md:pb-0">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
