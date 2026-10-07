import { Link } from '../lib/router.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { COMPANY } from '../data/legal.js'

// Casilla de consentimiento (RGPD) + información básica en primera capa.
// La casilla NO viene marcada y es obligatoria para poder enviar el formulario.
export default function Consent({ checked, onChange, dark = false }) {
  const { pick } = useLang()
  const txt = dark ? 'text-as-cream/70' : 'text-as-black/70'
  const sub = dark ? 'text-as-cream/45' : 'text-as-black/50'
  const link = dark ? 'text-as-lime underline underline-offset-2' : 'text-as-moss underline underline-offset-2 font-semibold'

  return (
    <div className="space-y-2">
      <label className={`flex items-start gap-2.5 text-xs leading-relaxed cursor-pointer ${txt}`}>
        <input
          type="checkbox"
          name="consent"
          required
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#4C7A3E] cursor-pointer"
        />
        <span>
          {pick('He leído y acepto la ', 'I have read and accept the ')}
          <Link to="/privacidad" className={link}>{pick('Política de Privacidad', 'Privacy Policy')}</Link>
          {pick(' y consiento que Altair Sense trate mis datos para atender mi solicitud.*', ' and consent to Altair Sense processing my data to handle my request.*')}
        </span>
      </label>
      <p className={`text-[11px] leading-snug ${sub}`}>
        <strong>{pick('Información básica: ', 'Basic information: ')}</strong>
        {pick(
          `Responsable: ${COMPANY.name}. Finalidad: atender tu consulta y gestionar la relación comercial que solicites. Base jurídica: tu consentimiento. Destinatarios: proveedores de alojamiento y correo que actúan como encargados del tratamiento; no cedemos datos a terceros salvo obligación legal. Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad en ${COMPANY.email}. Más información en la `,
          `Controller: ${COMPANY.name}. Purpose: handle your enquiry and manage the commercial relationship you request. Legal basis: your consent. Recipients: hosting and email providers acting as processors; we do not disclose data to third parties except where legally required. Rights: access, rectification, erasure, objection, restriction and portability at ${COMPANY.email}. More information in the `
        )}
        <Link to="/privacidad" className={link}>{pick('Política de Privacidad', 'Privacy Policy')}</Link>.
      </p>
    </div>
  )
}
