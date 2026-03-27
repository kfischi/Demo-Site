// components/WhatsAppButton.tsx
'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a 
      href="https://wa.me/972500000000?text=היי,%20אני%20אשמח%20לשמוע%20עוד%20על%20מנועי%20הצמיחה%20של%20Multibrawn" // החלף למספר והודעה שלך
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl z-50 flex items-center justify-center group"
      // אנימציית דופק (Pulse) קלילה
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.15 }}
    >
      {/* Tooltip יוקרתי */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        דברו איתנו בוואטסאפ
        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></span>
      </span>
      
      <MessageCircle className="w-9 h-9" />
    </motion.a>
  )
}
