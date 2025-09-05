// src/components/AboutAndTestimonials.tsx
"use client";

export default function AboutAndTestimonials() {
  return (
    <section className="w-full bg-[#D3F0F7] from-blue-50 to-white py-16">
      {/* ----- من نحن ----- */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div>
          <h2 className="text-2xl font-bold text-[#1E5470] mb-4 text-right md:text-right text-center">
            من نحن ؟
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-center md:text-right">
            منصة متخصصة في تقديم باقات العمرة الشاملة، تغطي جميع تفاصيل الرحلة —
            من ترتيبات السفر وحتى الإقامة في أفخم فنادق مكة المكرمة والمدينة
            المنورة — لضمان راحة ورضا كل معتمر.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-center md:text-right">
            مهمتنا تتجاوز الباقات التقليدية، فنحن نصنع تجارب روحانية شخصية تبقى
            خالدة في الذاكرة، وبأسعار تناسب الجميع.
          </p>
          <p className="text-gray-700 leading-relaxed text-center md:text-right">
            وبالاعتماد على أحدث الحلول الرقمية، نجعل رحلتك أكثر سلاسة وراحة
            واتصالًا، منذ لحظة الحجز وحتى العودة. "رحلتعمرة" – دعنا نأخذك هناك،
            ونحوّل كل خطوة إلى ذكرى مضيئة ترافقك مدى الحياة.
          </p>
        </div>

        {/* صورة الطائرة */}
        <div className="flex justify-center md:ml-4">
          <img
            src="/c62ba09f5c03d653773df60c6b7af4e7c70793b8.jpg"
            alt="رحلة العمرة"
            className="object-cover rounded-xl shadow-lg w-80 h-75 max-w-md"
            style={{ boxShadow: "0 10px 10px #00000040" }}
          />
        </div>
      </div>

      {/* ----- آراء العملاء ----- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-20 px-6">
        {/* الكارت (يسار) */}
        <div
          className="bg-white rounded-2xl p-8 text-center relative mx-auto md:ml-6 md:mr-4 w-full max-w-lg"
          style={{ boxShadow: "0 4px 6px #00000040" }}
        >
          {/* Border داخلي */}
          <div className="absolute inset-0 rounded-2xl border border-blue-200 pointer-events-none"></div>

          {/* المحتوى */}
          <h3 className="text-xl font-bold text-blue-900 mb-2">مصطفى حامد</h3>
          <div className="flex justify-center text-orange-400 mb-4">★★★★★</div>
          <p className="text-gray-600 leading-relaxed">
            أكثر ما أعجبني هو اهتمامهم بأدق التفاصيل، حتى الاستقبال في المطار
            كان بابتسامة. شعرت أنني مع عائلتي طوال الرحلة.
          </p>
        </div>

        {/* النص (يمين) */}
        <div className="text-center md:text-right">
          <h1 className="text-3xl md:text-4xl font-bold font-Cairo text-[#1E5470]">
            آراء العملاء عن <br className="hidden md:block" /> تجربتهم معنا
          </h1>
          <p className="text-[#1E5470] mt-4 leading-relaxed">
            استمع إلى قصص مستمرة وحكايات الكرام، وتمتع بكيفية ساعدنا في تحقيق
            أحلامهم. نحن نعيش تجربة روحانية خالدة ونوفر الأداء المتكامل من
            التخطيط وحتى العودة.
          </p>
        </div>
      </div>
    </section>
  );
}
