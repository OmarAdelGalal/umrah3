"use client";
import { motion } from "framer-motion";

const RightSidebar = () => {
  return (
    <motion.aside
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#D3F0F7] rounded-2xl w-[320px] p-6 flex flex-col gap-6 shadow-lg sticky top-6 h-fit mt-[25px] right-0"
    >
      {/* Title */}
      <h3 className="text-center text-lg font-bold text-[#15506B]">
        ابحث عن العرض المناسب
      </h3>

      {/* Filters Form */}
      <form className="flex flex-col gap-3">
        <select className="p-2 rounded-md border border-gray-300">
          <option>عمرة من المدينة</option>
          <option>عمرة من جدة</option>
        </select>
        <select className="p-2 rounded-md border border-gray-300">
          <option>تاريخ بداية الرحلة</option>
        </select>
        <select className="p-2 rounded-md border border-gray-300">
          <option>مدينة</option>
        </select>
        <select className="p-2 rounded-md border border-gray-300">
          <option>الفندق</option>
        </select>
        <select className="p-2 rounded-md border border-gray-300">
          <option>السنة الهجرية</option>
        </select>
        <select className="p-2 rounded-md border border-gray-300">
          <option>شركات الطيران</option>
        </select>

        <input
          type="date"
          placeholder="تاريخ الذهاب"
          className="p-2 rounded-md border border-gray-300 text-right"
        />
        <input
          type="date"
          placeholder="تاريخ العودة"
          className="p-2 rounded-md border border-gray-300 text-right"
        />
      </form>

      {/* Star Ratings */}
      <div>
        <p className="font-semibold mb-2">مستوى العرض</p>
        <div className="space-y-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> 5 نجوم
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> 4 نجوم
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> 3 نجوم
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> نجمتان أو أقل
          </label>
        </div>
      </div>

      {/* Offer Type */}
      <div>
        <p className="font-semibold mb-2">نوع العرض</p>
        <div className="space-y-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> الحجز الرسمي
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> الحجز السريع
          </label>
        </div>
      </div>

      {/* Companies List */}
      <div>
        <p className="font-semibold mb-2">شركات السياحة</p>
        <div className="space-y-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> FLY EMIRATES
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> SAUDI AIRLINES
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> EGYPTAIR
          </label>
        </div>
      </div>

      {/* Submit/Search Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold shadow-md hover:bg-blue-700 transition"
        type="submit"
      >
        عرض النتائج
      </motion.button>
    </motion.aside>
  );
};

export default RightSidebar;
