import { useEffect } from "react";
import Lenis from "lenis";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
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

  return (
    <>
      <Toaster
        position="top-right"
        containerStyle={{
          top: "80px",   // Distance from the top
          right: "24px", // Distance from the right
        }}
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1A1F29",
            color: "#fff",
            border: "1px solid #334155",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <AppRoutes />
    </>
  );
}

export default App;