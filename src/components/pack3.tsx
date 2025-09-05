import React from "react";
import OffersCard from "./offersCard";
const packages = [
  {
    id: 1,
    title: "مكة والمدينة - باقة عمرة لاكجرى",
    desc: "اكتشف تجربة روحانية راقية مع باقة العمرة الفاخرة التي تأخذك في رحلة مريحة ومميزة بين مكة المكرمة والمدينة المنورة. تم تصميم كل تفاصيل الرحلة لتوفير أعلى مستويات الراحة والفخامة، بدءًا من الإقامة الفندقية المميزة، وصولًا إلى النقل الخاص وخدمات الإرشاد المتميز.",
    duration: "3 أيام - 2 ليال",
    img: "/a0ec13a955696d0669aef727a34ce9c231c96daa.jpg",
    icon: "https://i.postimg.cc/1R2nhRJ1/calendar.png",
    p: "تبدا من لشخص الواحد المتشارك مع شخص اخر",
  },
  {
    id: 2,
    title: "مكة والمدينة - باقة عمرة لاكجرى",
    desc: "اكتشف تجربة روحانية راقية مع باقة العمرة الفاخرة التي تأخذك في رحلة مريحة ومميزة بين مكة المكرمة والمدينة المنورة. تم تصميم كل تفاصيل الرحلة لتوفير أعلى مستويات الراحة والفخامة، بدءًا من الإقامة الفندقية المميزة، وصولًا إلى النقل الخاص وخدمات الإرشاد المتميز.",
    duration: "3 أيام - 2 ليال",
    img: "/a0ec13a955696d0669aef727a34ce9c231c96daa.jpg",
    icon: "https://i.postimg.cc/1R2nhRJ1/calendar.png",
    p: "تبدا من لشخص الواحد المتشارك مع شخص اخر",
  },
  {
    id: 3,
    title: "مكة والمدينة - باقة عمرة لاكجرى",
    desc: "اكتشف تجربة روحانية راقية مع باقة العمرة الفاخرة التي تأخذك في رحلة مريحة ومميزة بين مكة المكرمة والمدينة المنورة. تم تصميم كل تفاصيل الرحلة لتوفير أعلى مستويات الراحة والفخامة، بدءًا من الإقامة الفندقية المميزة، وصولًا إلى النقل الخاص وخدمات الإرشاد المتميز.",
    duration: "3 أيام - 2 ليال",
    img: "/a0ec13a955696d0669aef727a34ce9c231c96daa.jpg",
    icon: "https://i.postimg.cc/1R2nhRJ1/calendar.png",
    p: "تبدا من لشخص الواحد المتشارك مع شخص اخر",
  },
];

const Pack3: React.FC = () => {
  return (
    <section className="bg-[#D3F0F7] py-12 px-6 p-10">
      <div className="text-right mb-10">
        <h2 className="text-3xl font-Tajawal text-[#1E5470] sm:mb-10 max-sm:mb-20 h-10 mb-2">
          العروض الرحلات الخارجيه
        </h2>
        <div className="flex flex-row-reverse max- flex-wrap justify-between items-center mb-4">
          <p className="text-[#1E5470]  font-Cairo">
            . استمتع بأفضل العروض الخارجيه على رحلات العمرة، مع باقات مصممة
            لتلبية جميع احتياجاتك بأسعار مميزة وخدمات شاملة
          </p>
          <button className="rounded-lg border border-black ml-15 px-6 py-2 max-sm:w-full  transition">
            عرض المزيد
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {packages.map((pkg) => (
          <OffersCard
            key={pkg.id}
            id={pkg.id}
            img={pkg.img}
            title={pkg.title}
            duration={pkg.duration}
            icon={pkg.icon}
            desc={pkg.desc}
            p={pkg.p}
          />
        ))}
      </div>
    </section>
  );
};
export default Pack3;
