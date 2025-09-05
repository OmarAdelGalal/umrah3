function UmrahSection() {
  return (
    <div className="container mx-auto px-4 py-12 bg-[#EAF9FB]">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[#1E5470] text-center mb-3">
        دعنا نأخذك هناك
      </h1>
      <p className="text-lg text-[#34729C] text-center mb-10">
        نوفر لعملائنا رحلة مريحة، مع مجموعة متنوعة من الخدمات المميزة التي تجعل
        كل سفر ممتعاً وخالياً من المتاعب.
      </p>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Big Image */}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-full max-w-[600px] h-[300px] md:h-[600px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/89c21902fd7aa09e55338e09a578104c3e586989.jpg"
              alt="مكة المكرمة"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Small Images */}
        <div className="grid grid-cols-2 gap-6">
          {[
            "/9959b35929bf4465044f9b2ee7cf855ecac6aaa5.jpg",
            "/6d326e830396e631eeeb0ab37babd66e652a812b.jpg",
            "/cebaf554e89bb271df1bcebc06daf0f7deb5c291.jpg",
            "/e058f99e49c14764588ed95e0f803e361aab273e.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="relative w-full h-[180px] md:h-[275px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`مسجد ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay button only on last image */}
              {index === 3 && (
                <div className="absolute bottom-3 left-3 bg-[#2CA8A8] text-white text-sm px-4 py-2 rounded-lg shadow-md">
                  عرض كل الصور
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UmrahSection;
