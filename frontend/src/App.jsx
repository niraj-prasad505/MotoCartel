import { useEffect } from "react";
import Lenis from "lenis";
import AppRoutes from "./routes/AppRoutes";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,      // Lower = more responsive
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <AppRoutes />;
}

export default App;