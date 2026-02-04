import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import ThemesPage from "./pages/ThemesPage";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Registration from "./pages/Registration"; 
import Abstract from "./pages/Abstract";
import Speakers from "./pages/Speakers";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
      <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/themes" element={<ThemesPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
