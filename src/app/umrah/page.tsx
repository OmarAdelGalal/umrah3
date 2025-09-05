import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import Rightsider from "@/components/rightsider";
import Umrhcard from "@/components/umrhcard";
function page() {
  return (
    <div className="contener  bg-[#D3F0F7] ">
      <div className="flex gap-10 mt-10 justify-between  ">
        <Umrhcard />
        <Rightsider />
      </div>
      <main className="flex-1">
        <Navbar />
        <Footer />
      </main>
    </div>
  );
}
export default page;
