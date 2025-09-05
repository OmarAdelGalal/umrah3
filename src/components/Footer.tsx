import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E5470] text-white pt-12 pb-6">
      <div className="mb-[100px] max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-[#5EC1D1]">
                الصفحة الرئيسية
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-[#5EC1D1]">
                سياسة الخصوصية
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#5EC1D1]">
                اتصل بنا
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">معلومات التواصل</h3>
          <ul className="space-y-2">
            <li> رقم الهاتف</li>
            <li>✉️ البريد الإلكتروني</li>
            <li>🌐 الموقع</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-lg mb-4">موارد</h3>
          <ul className="space-y-2">
            <li>
              <a href="/umrah" className="hover:text-[#5EC1D1]">
                باقات العمرة
              </a>
            </li>
            <li>
              <a href="/internal-trips" className="hover:text-[#5EC1D1]">
                الرحلات الداخلية
              </a>
            </li>
            <li>
              <a href="/external-trips" className="hover:text-[#5EC1D1]">
                الرحلات الخارجية
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-4">رحلة عمرة</h3>
          <p className="text-sm leading-6">
            رحلة عمرة المصرية تقدم لك أفضل خدمات العمرة لضمان رحلة مميزة ومريحة
            مع باقات متكاملة تشمل الإقامة، النقل، والإرشاد الديني.
          </p>

          {/* Social Media */}
          <div className="flex justify-end space-x-4 rtl:space-x-reverse mt-4">
            <a href="#" className="hover:text-[#5EC1D1]">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#5EC1D1]">
              <Instagram />
            </a>
            <a href="#" className="hover:text-[#5EC1D1]">
              <Twitter />
            </a>
            <a href="#" className="hover:text-[#5EC1D1]">
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mb-[50px] text-center text-sm mt-8 border-t border-gray-600 pt-4 px-6">
        © 2006 - 2025 Rahlat Umrah | All Rights Reserved | created by waquak
      </div>
    </footer>
  );
};

export default Footer;
