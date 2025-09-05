function Fly() {
  return (
    <div className="container bg-[#D3F0F7] py-8">
      {/* Title */}
      <h1 className="font-Kufam text-[#1E5470] text-center text-4xl mb-2">
        شركاء النجاح
      </h1>
      <h2 className="font-Tajawal text-[#34729C] text-center text-xl mb-6">
        نتعاون مع العديد من شركات الطيران في مجال العمرة والحج
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Card 1 */}
        <div className="h-[200px] w-[300px] bg-[#F3FFFE] flex items-center justify-center shadow-md rounded-lg">
          <img
            src="/7a908822f6906392a121f7b961931f3fb04febb4.png"
            alt="fly4"
            className="max-h-[175px] max-w-[275px] object-contain"
          />
        </div>

        {/* Card 2 */}
        <div className="h-[200px] w-[300px] bg-[#F3FFFE] flex items-center justify-center shadow-md rounded-lg">
          <img
            src="/14b10afeacee13105ee1210ca09333f2190b1122.png"
            alt="fly3"
            className="max-h-[175px] max-w-[275px] object-contain"
          />
        </div>

       

        {/* Card  */}
        <div className="h-[200px] w-[300px] bg-[#F3FFFE] flex items-center justify-center shadow-md rounded-lg">
          <img
            src="/d8103e251c487a03c20e3d43ba52dfb8937b2616.png"
            alt="fly1"
            className="max-h-[175px] max-w-[275px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Fly;
