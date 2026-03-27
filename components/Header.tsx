'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Layers } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // מאזין לגלילה כדי לשנות את העיצוב של ההדר בזמן אמת
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* לוגו Multibrawn */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <span className={`text-2xl font-extrabold tracking-tight transition-colors ${
            isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'
          }`}>
            Multibrawn
          </span>
        </div>
        
        {/* תפריט ניווט למסכים גדולים */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#services" className={`transition-colors ${
            isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-300 hover:text-white'
          }`}>הארכיטקטורה</a>
          <a href="#demo-form" className={`transition-colors ${
            isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-300 hover:text-white'
          }`}>איך זה עובד</a>
        </nav>

        {/* כפתור הנעה לפעולה (CTA) */}
        <a 
          href="#demo-form" 
          className={`px-6 py-2.5 rounded-full font-bold transition-all text-sm shadow-md ${
            isScrolled 
              ? 'bg-slate-900 text-white hover:bg-blue-600' 
              : 'bg-white text-slate-900 hover:bg-slate-100'
          }`}
        >
          לתיאום דמו
        </a>

      </div>
    </motion.header>
  )
}
