// Portal Lumen (ERP/CRM). Cambia aquí la URL y se actualiza en toda la web.
export const LUMEN_URL = 'https://lumen.altairsense.com'

// Evento global para abrir el formulario rápido de contacto desde cualquier botón.
export const openQuickContact = () => window.dispatchEvent(new CustomEvent('as:open-contact'))
