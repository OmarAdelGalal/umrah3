function Tran() {
  return (
    <div className="relative w-auto h-[259px] rounded-[40px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/5acdf969e540506e506e94b7b42af6938fa8a390.png"
        alt="قطار الحرمين"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Arabic Text - Top Right */}
      <div className="absolute top-6 right-6 text-white font-Tajawal text-2xl font-bold leading-relaxed text-right">
        نحن فخورون بكوننا شريكًا رسميًا
        <br />
        لقطار الحرمين السريع
      </div>

      {/* English Text - Bottom Left */}
      <div className="absolute bottom-6 left-6 text-white font-Tajawal text-sm tracking-wide">
        <h1 className=" font-Tajawal text-2xl"> قطار الحرمين السريع </h1>
        <p className="text-center text-xs">HARAMAIN HIGH SPEED RAILWAY</p>
      </div>
    </div>
  );
}

export default Tran;
