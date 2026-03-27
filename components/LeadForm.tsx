// components/LeadForm.tsx
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Loader2, SendHorizontal } from 'lucide-react'

// סכמת וולידציה (Validation Schema) עם Zod - מאבטח את הדאטה שלך
const formSchema = z.object({
  name: z.string().min(2, { message: 'שם מלא חייב להכיל לפחות 2 אותיות' }),
  phone: z.string().regex(/^05\d-?\d{7}$/, { message: 'מספר טלפון ישראלי לא תקין (למשל 0501234567)' }),
})

type FormData = z.infer<typeof formSchema>

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      // כאן אתה שם את ה-Webhook של ה-n8n שלך ב-Coolify
      await fetch('https://n8n.your-coolify-server.com/webhook/new-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus('success')
    } catch (error) {
      console.error('Error sending lead to n8n:', error)
      setStatus('error')
    }
  }

  return (
    <div className="relative">
      
      {/* 🟢 אנימציית הצלחה/שגיאה */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
            <h3 className="text-3xl font-bold mb-2">משוגר! 🚀</h3>
            <p className="text-lg text-slate-600">עכשיו תציצו בטלפון שלכם. הודעת וואטסאפ חמה ממתינה לכם.</p>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center">
            <AlertCircle className="w-20 h-20 text-red-500 mb-6" />
            <h3 className="text-3xl font-bold mb-2">אופס, משהו השתבש.</h3>
            <p className="text-lg text-slate-600">לא הצלחנו להתחבר ל-n8n. נסו שוב או פנו אלינו בוואטסאפ.</p>
            <button onClick={() => setStatus('idle')} className="mt-6 text-blue-600 font-semibold">נסו שוב</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📝 הטופס */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 relative z-10">
        <div className="relative">
          <input 
            {...register('name')}
            type="text" 
            placeholder="שם מלא שלכם" 
            className={`w-full px-6 py-4 rounded-xl border ${errors.name ? 'border-red-300 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 text-right text-lg transition-all`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1.5 flex items-center gap-1.5 justify-end"><AlertCircle className="w-4 h-4" /> {errors.name.message}</p>}
        </div>

        <div className="relative">
          <input 
            {...register('phone')}
            type="tel" 
            placeholder="מספר טלפון (לשליחת הוואטסאפ)" 
            className={`w-full px-6 py-4 rounded-xl border ${errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 text-right text-lg transition-all`}
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1.5 flex items-center gap-1.5 justify-end"><AlertCircle className="w-4 h-4" /> {errors.phone.message}</p>}
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="group w-full bg-slate-950 text-white font-bold py-5 rounded-xl hover:bg-slate-800 transition disabled:bg-slate-400 flex items-center justify-center gap-3 text-xl shadow-lg shadow-slate-900/10"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              מפעיל את ה-n8n...
            </>
          ) : (
            <>
              תראו לי איך זה עובד 🚀
              <SendHorizontal className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
