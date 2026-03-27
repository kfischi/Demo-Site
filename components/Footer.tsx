import { Layers, Mail, Phone, ChevronLeft } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 px-6 border-t border-slate-900 relative overflow-hidden">
      
      {/* תאורה אחורית עדינה */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* אזור המותג */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 p-2.5 rounded-xl">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Multibrawn
            </span>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed mb-6 text-lg">
            אנחנו לא בונים אתרים, אנחנו בונים מנועי צמיחה. תשתיות דיגיטליות ואוטומציות מתקדמות לעסקים שרוצים לשלוט בשוק שלהם.
          </p>
        </div>

        {/* ערימת הטכנולוגיות (Tech Stack) */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">הארכיטקטורה שלנו</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
              <ChevronLeft className="w-4 h-4" /> Next.js (App Router)
            </li>
            <li className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
              <ChevronLeft className="w-4 h-4" /> n8n Automations
            </li>
            <li className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
              <ChevronLeft className="w-4 h-4" /> WAHA (WhatsApp API)
            </li>
            <li className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
              <ChevronLeft className="w-4 h-4" /> Directus / CRM
            </li>
          </ul>
        </div>

        {/* צור קשר */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">יצירת קשר</h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:kfir.biz@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>kfir.biz@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:0500000000" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-green-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                {/* תחליף למספר הטלפון האמיתי שלך */}
                <span dir="ltr">+972 50-000-0000</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
      
      {/* תחתית הפוטר */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 relative z-10">
        <p>© {currentYear} Multibrawn. כל הזכויות שמורות.</p>
        <p className="mt-2 md:mt-0 font-medium">Built with precision for high performance.</p>
      </div>
    </footer>
  )
}
