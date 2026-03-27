// app/page.tsx
'use client'
import { motion } from 'framer-motion'
import LeadForm from '@/components/LeadForm'
import { Zap, Bot, MessageSquare, BarChart3, Clock3 } from 'lucide-react'

// הגדרות אנימציה בסיסיות
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

const services = [
  { icon: Zap, title: 'אתרי קצה ב-Next.js', text: 'תשתיות הייטק (Headless) שנטענות באלפיות שניה. ביצועים מושלמים ל-SEO ולהמרות.' },
  { icon: Bot, title: 'אוטומציות n8n', text: 'חיבור מלא בין האתר, ה-CRM והפרסום. כל ליד מטופל אוטומטית, בלי טעויות אנוש.' },
  { icon: MessageSquare, title: 'WhatsApp אקטיבי', text: 'מענה מיידי ללידים מהמספר שלכם. שיחות מכירה אוטומטיות (Chatbots) ללא עמלות תוכנה.' },
  { icon: Clock3, title: 'ייעול תפעולי', text: 'חיסכון של עשרות שעות שבועיות בעבודה ידנית. אנחנו בונים מערכות שעובדות בשבילכם.' },
  { icon: BarChart3, title: 'שקיפות ודאטה', text: 'דאשבורדים מתקדמים (Directus) שמרכזים את כל הלידים והביצועים במקום אחד.' },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* 🚀 Hero Section - ה"מיליון דולר" פלאש */}
      <section className="w-full bg-slate-900 text-white pt-32 pb-24 px-6 text-center relative overflow-hidden">
        {/* אפקט רקע מודרני קליל */}
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn}>
            <span className="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">
              תפסיקו לבנות אתרים. תתחילו לייצר מנועי צמיחה.
            </span>
          </motion.div>
          
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            אל תקנו עוד "כרטיס ביקור".<br />
            <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">תשקיעו בתשתית שמייצרת לקוחות.</span>
          </motion.h1>
          
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeIn} className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light">
            אנחנו בונים ארכיטקטורות דיגיטליות מתקדמות: אתרי Next.js מהירים בזק, אוטומציות n8n חכמות, ומענה וואטסאפ מיידי מבוסס AI - הכל ב-SaaS פרטי שלכם.
          </motion.p>
          
          <motion.div initial="hidden" animate="visible" custom={3} variants={fadeIn}>
            <a href="#demo-form" className="group bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-10 rounded-full text-xl transition-all shadow-lg shadow-blue-500/30 flex inline-items-center gap-2 mx-auto justify-center w-fit">
              בואו נבנה לכם מנוע צמיחה
              <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 🛠️ Services Section (The Value Grid) */}
      <section id="services" className="py-28 px-6 max-w-7xl mx-auto w-full">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-slate-900">
          הארכיטקטורה שמקפיצה את העסק שלכם
        </motion.h2>
        <p className="text-xl text-slate-600 text-center mb-20 max-w-2xl mx-auto">מערכות Multibrawn משלבות ביצועי קצה, אוטומציה חכמה וניהול שקוף לחוויית פרימיום.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-blue-50 text-blue-600 p-4 rounded-xl w-fit mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-950">{service.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📩 Lead Form Section (The Million Dollar Demo) */}
      <section id="demo-form" className="w-full bg-[#FBFCFE] py-28 px-6 relative">
        {/* רקע דקורטיבי עדין */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-[40px] p-12 md:p-16 shadow-2xl border border-slate-100">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-950">רוצים לראות את הקסם קורה?</h2>
            <p className="text-center text-slate-600 text-lg mb-12 max-w-md mx-auto">
              השאירו פרטים עכשיו, ותקבלו הודעת וואטסאפ אוטומטית וחכמה מהמערכת שלנו תוך <span className="font-bold text-blue-600">3 שניות בדיוק</span>.
            </p>
            <LeadForm />
          </motion.div>
        </div>
      </section>

    </div>
  )
}
