"use client";
import Card from "@/components/ui/card";

function UmrhCard() {
  return (
    <div className="bg-[#D3F0F7] p-6">
      {/* العنوان الرئيسي */}
      <h1 className="mt-[75px] font-Tajawal text-[#1E5470] text-2xl mb-6 text-center font-bold">
        باقات العمرة الحصرية في مكة المكرمة
      </h1>

      {/* النص التوضيحي */}
      <p className="text-[#1E5470] text-center text-lg font-Tajawal leading-relaxed max-w-4xl mx-auto">
        استمتع مع رحلة عمرة بأرقى الباقات العمرية الحصرية في مكة المكرمة، والتي
        تجمع بين <br /> الراحة والخدمات المميزة لتجعل رحلتك الإيمانية أكثر سلاسة
        وطمأنينة. نوفر لك خيارات <br /> متنوعة من الفنادق القريبة من الحرم
        المكي، مع برامج متكاملة تشمل الإقامة، التنقل، <br /> وتذاكر السفر، لتعيش
        تجربة روحانية فريدة لا تُنسى.
      </p>

      {/* الكروت */}
      <div className="flex flex-col md:flex-row gap-6 mt-[30px] justify-center items-center">
        <Card
          price={22950}
          title="مكة والمدينة - باقة عمرة لاكجرى"
          description="اكتشف تجربة روحانية راقية مع باقة العمرة الفاخرة التي تأخذك في رحلة مريحة ومميزة بين مكة المكرمة والمدينة المنورة. تم تصميم كل تفاصيل الرحلة لتوفير أعلى مستويات الراحة والفخامة، بدءًا من الإقامة الفندقية المميزة، وصولًا إلى النقل الخاص وخدمات الإرشاد المتميز."
          image="/a0ec13a955696d0669aef727a34ce9c231c96daa.jpg"
          onBuy={() => alert("Buying now...")}
          onAddToCart={() => alert("Added to cart!")}
        />
        <Card
          price={22950}
          title="مكة والمدينة - باقة عمرة لاكجرى"
          description="اكتشف تجربة روحانية راقية مع باقة العمرة الفاخرة التي تأخذك في رحلة مريحة ومميزة بين مكة المكرمة والمدينة المنورة. تم تصميم كل تفاصيل الرحلة لتوفير أعلى مستويات الراحة والفخامة، بدءًا من الإقامة الفندقية المميزة، وصولًا إلى النقل الخاص وخدمات الإرشاد المتميز."
          image="/a0ec13a955696d0669aef727a34ce9c231c96daa.jpg"
          onBuy={() => alert("Buying now...")}
          onAddToCart={() => alert("Added to cart!")}
        />
      </div>
    </div>
  );
}

export default UmrhCard;
