import Rightsider from "@/components/rightsider";
import Umrhcard from "@/components/umrhcard";
function page() {
  return (
    <div className="contener  bg-[#D3F0F7] ">
      <div className="flex max-sm:flex-wrap-reverse gap-10 mt-10 justify-between  ">
        <Umrhcard />
        <div className="max-sm:w-full max-sm:flex max-sm:justify-center">
          <Rightsider />
        </div>
      </div>
    </div>
  );
}
export default page;
