"use client";
import { motion } from "framer-motion";

function HeroSelection() {
  return (
    <section className="static w-full min-h-[90vh] bg-gradient-to-b from-[#1E5470] via-[#5C8397] to-[#D3F0F7] flex items-center justify-center px-8">
      <div className="mt-[100px] max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* الصورة */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="w-80 h-96 overflow-hidden relative">
            <img
              src="https://i.postimg.cc/rpv02fvY/Image-Hero-1.png"
              alt="Image-Hero"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* النصوص */}
        <div className="text-right md:w-1/2 space-y-4 text-white">
          <p className="font-Tajawal text-[#1E5470] text-lg leading-relaxed font-extrabold">
            دعنا نصحبك في رحلة إلى مكة المكرمة، واستمتع بتجربة عمرة مريحة مع
            باقاتنا المتنوعة وعروضنا المميزة.
          </p>
          <p className="text-base opacity-90 font-Tajawal font-bold">
            ابدأ رحلتك إلى مكة المكرمة معنا. استمتع بأفضل الباقات والخدمات
            المتكاملة التي تجعل رحلتك مريحة وسهلة من البداية وحتى العودة.
          </p>

          {/* الزرار مع الكعبة */}
          <div className="flex gap-4 justify-end">
            <motion.div className="relative inline-block" whileHover="hover">
              <motion.button
                variants={{
                  hover: { scale: 1.05 },
                }}
                className="relative z-10 bg-[#29C7D2] px-20 py-3 rounded-xl font-semibold text-white hover:bg-[#20AAB2] transition"
              >
                تواصل معنا
              </motion.button>

              {/* صورة الكعبة */}
              <motion.img
                src="/a0ec13a955696d0669aef727a34ce9c231c96daa.jpg"
                alt="Kaaba"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                variants={{
                  hover: { opacity: 1, scale: 1, y: -10 },
                }}
                transition={{ duration: 0.4 }}
                className="absolute left-1/2 -translate-x-1/2 top-[-80px] w-16 h-16"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSelection;
