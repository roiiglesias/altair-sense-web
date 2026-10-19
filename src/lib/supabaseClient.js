import { createClient } from '@supabase/supabase-js'
import { rebrandText } from './rebrand.js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  console.warn(
    '[Galernai] Faltan VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. ' +
    'Copia .env.example a .env.local (desarrollo) y configúralas también en Vercel (producción).'
  )
}

export const supabase = url && anonKey ? createClient(url, anonKey, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  global: {
    // Reescribe la marca antigua en las respuestas JSON de lectura (GET)
    fetch: async (input, init) => {
      const res = await fetch(input, init)
      const method = (init?.method || 'GET').toUpperCase()
      const type = res.headers.get('content-type') || ''
      if (method !== 'GET' || !type.includes('json')) return res
      const body = rebrandText(await res.text())
      const headers = new Headers(res.headers)
      headers.delete('content-encoding'); headers.delete('content-length')
      return new Response(body, { status: res.status, statusText: res.statusText, headers })
    }
  }
}) : null
