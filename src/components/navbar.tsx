"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, User, Search, ShoppingCart, Menu, X } from "lucide-react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "باقات العمرة", href: "/umrah" },
    { name: "رحلات داخلية", href: "/internal-trips" },
    { name: "رحلات خارجية", href: "/external-trips" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 right-0 w-full bg-[#1E5470] backdrop-blur-lg z-50 shadow-md"
      >
        <div className="max-w-7xl flex flex-row-reverse mx-auto justify-between items-center px-6 py-4">
          {/* Logo/Title */}
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-[#5EC1D1] font-Kufam"
          >
            رحلة عمرة
          </motion.h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {links.map((link, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-white hover:text-[#D3F0F7]"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Login Button (Desktop) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:block bg-[#5EC1D1] hover:bg-[#1E5470] text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            تسجيل الدخول
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden bg-[#1E5470] px-6 py-4 space-y-4 overflow-hidden"
            >
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block text-white hover:text-[#D3F0F7]"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {link.name}
                </Link>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full bg-[#5EC1D1] hover:bg-[#1E5470] text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                تسجيل الدخول
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Bottom Navbar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg flex justify-around items-center py-2 md:hidden z-50">
        {[
          { href: "/", icon: <Home size={22} />, label: "الرئيسية" },
          { href: "/account", icon: <User size={22} />, label: "حسابي" },
          { href: "/search", icon: <Search size={22} />, label: "بحث" },
          { href: "/cart", icon: <ShoppingCart size={22} />, label: "السلة" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center text-gray-700 hover:text-[#1E5470]"
          >
            <Link href={item.href}>
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </Link>
          </motion.div>
        ))}

        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col items-center text-gray-700 hover:text-[#1E5470]"
        >
          <FavoriteBorderIcon fontSize="small" />
          <span className="text-xs">المفضل</span>
        </motion.button>
      </div>
    </>
  );
};

export default Navbar;
