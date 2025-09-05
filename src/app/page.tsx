import Hero_selction from "@/components/Hero_selction";
import Packages_Selction from "@/components/Packages_Section";
import Tran from "@/components/tran";
import Pack2 from "@/components/pack2";
import AboutAndTestimonials from "@/components/AboutAndTestimonials";
import Pack3 from "@/components/pack3";
import Fly from "@/components/fly";
import UmrahSection from "@/components/UmrahSection";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="bg-[#D3F0F7]">
      <Hero_selction />
      <Packages_Selction />
      <Pack2 />
      <Pack3 />
      <Tran />
      <AboutAndTestimonials />
      <Fly />
      <UmrahSection />
    </div>
  );
}
