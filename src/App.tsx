
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import PortSaipan from "./pages/PortSaipan";
import PortTinian from "./pages/PortTinian";
import PortRota from "./pages/PortRota";
import Documents from "./pages/Documents";
import Contact from "./pages/Contact";
import Board from "./pages/Board";
import Procurement from "./pages/Procurement";
import Careers from "./pages/Careers";
import Media from "./pages/Media";
import TariffRates from "./pages/TariffRates";
import Regulations from "./pages/Regulations";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import CitizenCentricReports from "./pages/CitizenCentricReports";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/port-saipan" element={<PortSaipan />} />
            <Route path="/port-tinian" element={<PortTinian />} />
            <Route path="/port-rota" element={<PortRota />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/board" element={<Board />} />
            <Route path="/procurement" element={<Procurement />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/media" element={<Media />} />
            <Route path="/tariff-rates" element={<TariffRates />} />
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/citizen-centric-reports" element={<CitizenCentricReports />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
