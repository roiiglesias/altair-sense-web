// Datos y textos legales (Aviso legal, Privacidad, Cookies) en ES y EN.
// Se usan tanto en las páginas de React como en el prerender (scripts/prerender.mjs).
// Para cambiar un dato de la empresa, editar SOLO este bloque.

export const COMPANY = {
  name: 'Altair Sense, S.L.',
  brand: 'Altair Sense',
  cif: 'B93967750',
  address: 'Calle Los Prados 166, Edificio Impulsa, 33203 Gijón, Asturias, España',
  email: 'info@altairsense.com',
  site: 'www.altairsense.com',
  // Datos del Registro Mercantil (art. 10 LSSI). Rellenar cuando se tengan; si queda
  // vacío, la línea no se muestra. Ejemplo: 'Inscrita en el Registro Mercantil de Asturias, Tomo X, Folio Y, Hoja AS-Z'
  registro: ''
}

export const LEGAL_UPDATED = { es: '7 de octubre de 2026', en: '7 October 2026' }

// Versión del texto de consentimiento: se guarda con cada mensaje (prueba del consentimiento)
export const CONSENT_VERSION = 'priv-v1-2026-10'

export const LEGAL_SLUGS = ['/aviso-legal', '/privacidad', '/cookies']

export function legalPage(kind, pick) {
  const C = COMPANY
  const L = pick
  const reg = C.registro ? [C.registro] : []

  if (kind === 'aviso-legal') {
    return {
      title: L('Aviso legal', 'Legal notice'),
      description: L('Aviso legal de Altair Sense, S.L.: titular del sitio web, condiciones de uso, propiedad intelectual, responsabilidad y legislación aplicable.',
        'Legal notice of Altair Sense, S.L.: website owner, terms of use, intellectual property, liability and applicable law.'),
      sections: [
        {
          h: L('1. Titular del sitio web', '1. Website owner'),
          p: [L('En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este sitio web es:',
            'In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of this website is:')],
          ul: [
            L(`Denominación social: ${C.name}`, `Company name: ${C.name}`),
            L(`CIF: ${C.cif}`, `Tax ID (CIF): ${C.cif}`),
            L(`Domicilio social: ${C.address}`, `Registered office: ${C.address}`),
            L(`Correo electrónico de contacto: ${C.email}`, `Contact email: ${C.email}`),
            L(`Sitio web: ${C.site}`, `Website: ${C.site}`),
            ...reg.map((r) => L(`Datos registrales: ${r}`, `Registry details: ${r}`)),
            L('Actividad: soluciones de digital signage, retail media, retail analytics y retail tech; instalación, mantenimiento y servicios técnicos; plataforma de gestión Lumen.',
              'Activity: digital signage, retail media, retail analytics and retail tech solutions; installation, maintenance and technical services; the Lumen management platform.')
          ]
        },
        {
          h: L('2. Objeto y aceptación', '2. Purpose and acceptance'),
          p: [L('Este aviso regula el acceso y el uso del sitio web. Navegar por él implica aceptar las condiciones aquí recogidas. Si no estás de acuerdo con ellas, te pedimos que no lo utilices.',
            'This notice governs access to and use of the website. Browsing it implies acceptance of these conditions. If you do not agree, please do not use it.')]
        },
        {
          h: L('3. Condiciones de uso', '3. Terms of use'),
          p: [L('El usuario se compromete a hacer un uso adecuado y lícito del sitio web y de sus contenidos, conforme a la ley, la buena fe y el orden público. En particular, se compromete a no:',
            'The user agrees to make appropriate and lawful use of the website and its content, in accordance with the law, good faith and public order. In particular, the user agrees not to:')],
          ul: [
            L('realizar actividades ilícitas o contrarias a los derechos de terceros;', 'carry out unlawful activities or activities contrary to third-party rights;'),
            L('introducir virus o programas que puedan dañar el sitio web, sus sistemas o a otros usuarios;', 'introduce viruses or programs that may damage the website, its systems or other users;'),
            L('intentar acceder sin autorización a áreas restringidas, incluida la plataforma Lumen, o vulnerar sus medidas de seguridad;', 'attempt unauthorised access to restricted areas, including the Lumen platform, or bypass its security measures;'),
            L('enviar mensajes masivos o no solicitados a través de los formularios, ni facilitar datos falsos o de terceros sin su autorización.', 'send mass or unsolicited messages through the forms, or provide false data or third-party data without authorisation.')
          ]
        },
        {
          h: L('4. Propiedad intelectual e industrial', '4. Intellectual and industrial property'),
          p: [
            L(`Los textos, imágenes, diseños, logotipos, marcas, software, estructura y demás contenidos de este sitio web son titularidad de ${C.name} o de sus licenciantes, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o parcial, sin autorización previa y por escrito.`,
              `The texts, images, designs, logos, trademarks, software, structure and other content of this website are owned by ${C.name} or its licensors and are protected by intellectual and industrial property law. Reproduction, distribution, public communication or modification, in whole or in part, is prohibited without prior written authorisation.`),
            L('Las marcas y logotipos de terceros (partners tecnológicos y clientes) pertenecen a sus respectivos titulares y se muestran únicamente para identificar la relación comercial o tecnológica, sin que ello implique cesión de derecho alguno.',
              'Third-party trademarks and logos (technology partners and clients) belong to their respective owners and are shown only to identify the commercial or technological relationship, without implying any transfer of rights.')
          ]
        },
        {
          h: L('5. Contenidos y responsabilidad', '5. Content and liability'),
          p: [
            L(`${C.brand} procura que la información publicada sea exacta y esté actualizada, pero no garantiza la ausencia de errores ni su disponibilidad ininterrumpida, y puede modificar o retirar contenidos sin previo aviso. Los contenidos tienen carácter informativo y no constituyen una oferta contractual vinculante; las condiciones de cada proyecto se fijan en la propuesta o contrato correspondiente.`,
              `${C.brand} strives to keep the published information accurate and up to date, but does not guarantee the absence of errors or uninterrupted availability, and may modify or withdraw content without notice. The content is informational and does not constitute a binding contractual offer; the terms of each project are set out in the corresponding proposal or contract.`),
            L(`${C.name} no se hace responsable de los daños derivados de un uso indebido del sitio web, de interrupciones del servicio ajenas a su control ni del contenido de sitios web de terceros a los que se pueda acceder mediante enlaces.`,
              `${C.name} is not liable for damage arising from misuse of the website, from service interruptions beyond its control, or for the content of third-party websites that can be accessed through links.`)
          ]
        },
        {
          h: L('6. Enlaces', '6. Links'),
          p: [L('Este sitio puede contener enlaces a páginas de terceros (por ejemplo, redes sociales o mapas). No controlamos su contenido ni sus políticas de privacidad y cookies, por lo que recomendamos revisarlas. Para enlazar a esta web desde otra es necesario que el enlace sea veraz, no cause confusión sobre su titularidad y no se utilice en contextos ilícitos o lesivos.',
            'This site may contain links to third-party pages (for example, social networks or maps). We do not control their content or their privacy and cookie policies, so we recommend reviewing them. Links to this website from another site must be truthful, must not cause confusion about its ownership and must not be used in unlawful or harmful contexts.')]
        },
        {
          h: L('7. Protección de datos', '7. Data protection'),
          p: [L('El tratamiento de datos personales se rige por nuestra Política de Privacidad, y el uso de tecnologías de almacenamiento en el dispositivo por nuestra Política de Cookies, ambas disponibles en este sitio web.',
            'The processing of personal data is governed by our Privacy Policy, and the use of device storage technologies by our Cookie Policy, both available on this website.')]
        },
        {
          h: L('8. Legislación aplicable y jurisdicción', '8. Applicable law and jurisdiction'),
          p: [L('Este aviso se rige por la legislación española. Para cualquier controversia, y salvo que la normativa aplicable imponga otro fuero (por ejemplo, el del domicilio del consumidor), las partes se someten a los juzgados y tribunales de Gijón (Asturias).',
            'This notice is governed by Spanish law. For any dispute, and unless applicable regulations impose a different forum (for example, the consumer\'s place of residence), the parties submit to the courts of Gijón (Asturias, Spain).')]
        },
        {
          h: L('9. Contacto', '9. Contact'),
          p: [L(`Para cualquier consulta sobre este aviso puedes escribirnos a ${C.email}.`, `For any questions about this notice, write to us at ${C.email}.`)]
        }
      ]
    }
  }

  if (kind === 'privacidad') {
    return {
      title: L('Política de privacidad', 'Privacy policy'),
      description: L('Política de privacidad de Altair Sense, S.L.: quién trata tus datos, para qué, con qué base legal, durante cuánto tiempo, a quién se comunican y cómo ejercer tus derechos.',
        'Privacy policy of Altair Sense, S.L.: who processes your data, for what purpose, on what legal basis, for how long, to whom it is disclosed and how to exercise your rights.'),
      sections: [
        {
          h: L('1. Responsable del tratamiento', '1. Data controller'),
          ul: [
            L(`Identidad: ${C.name} (CIF ${C.cif})`, `Identity: ${C.name} (Tax ID ${C.cif})`),
            L(`Domicilio: ${C.address}`, `Address: ${C.address}`),
            L(`Correo electrónico: ${C.email}`, `Email: ${C.email}`),
            L('No hemos designado un delegado de protección de datos por no estar obligados a ello; cualquier consulta sobre privacidad puede dirigirse al correo anterior.',
              'We have not appointed a data protection officer as we are not required to; any privacy enquiry can be sent to the email above.')
          ],
          p: [L('Tratamos tus datos conforme al Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 (LOPDGDD) y la Ley 34/2002 (LSSI-CE).',
            'We process your data in accordance with Regulation (EU) 2016/679 (GDPR), Spanish Organic Law 3/2018 (LOPDGDD) and Law 34/2002 (LSSI-CE).')]
        },
        {
          h: L('2. Qué datos tratamos y de dónde proceden', '2. What data we process and where it comes from'),
          p: [L('Tratamos únicamente los datos que nos facilitas tú al usar los formularios de contacto o al escribirnos, y los datos técnicos mínimos de la visita:',
            'We only process the data you provide through the contact forms or by writing to us, and minimal technical data about your visit:')],
          ul: [
            L('Datos identificativos y de contacto: nombre, correo electrónico y, si los indicas, empresa, teléfono y sector.', 'Identification and contact data: name, email and, if you provide them, company, phone and sector.'),
            L('Contenido de tu mensaje y los datos de cualificación que decidas indicar (número de ubicaciones y plazo del proyecto).', 'The content of your message and any qualification details you choose to provide (number of locations and project timeline).'),
            L('Datos de origen de la visita que se envían junto al formulario: idioma, página desde la que escribes, sitio de referencia y parámetros de campaña (por ejemplo, utm_source) si existen. Estos datos no se guardan en tu dispositivo: solo se adjuntan si envías el formulario.',
              'Visit origin data sent along with the form: language, the page you write from, referring site and campaign parameters (for example, utm_source) if any. This data is not stored on your device: it is only attached if you submit the form.'),
            L('Datos técnicos de conexión (como la dirección IP) que registran de forma automática los servidores de alojamiento por motivos de seguridad y funcionamiento.', 'Technical connection data (such as the IP address) automatically logged by the hosting servers for security and operational reasons.')
          ],
          // Nota de alcance
          note: L('Esta web se dirige a profesionales y empresas. No está dirigida a menores de 18 años; si crees que un menor nos ha facilitado datos, escríbenos y los eliminaremos.',
            'This website is aimed at professionals and companies. It is not directed at persons under 18; if you believe a minor has provided us with data, write to us and we will delete it.')
        },
        {
          h: L('3. Finalidades y base jurídica', '3. Purposes and legal basis'),
          table: {
            head: [L('Finalidad', 'Purpose'), L('Base jurídica', 'Legal basis')],
            rows: [
              [L('Atender tu consulta o solicitud (diagnóstico, información sobre soluciones o servicios, contacto comercial) y responderte.', 'Handle your enquiry or request (diagnosis, information about solutions or services, sales contact) and reply to you.'),
                L('Tu consentimiento (art. 6.1.a RGPD), que prestas al marcar la casilla y enviar el formulario, y, cuando la solicitud sea previa a un contrato, la aplicación de medidas precontractuales a petición tuya (art. 6.1.b).', 'Your consent (Art. 6(1)(a) GDPR), given by ticking the box and submitting the form and, where the request precedes a contract, pre-contractual measures taken at your request (Art. 6(1)(b)).')],
              [L('Priorizar y gestionar adecuadamente las solicitudes recibidas usando los datos de origen y de cualificación que nos envías con el formulario.', 'Prioritise and manage the requests received using the origin and qualification data you send with the form.'),
                L('Interés legítimo en organizar la atención comercial de forma eficiente (art. 6.1.f RGPD), sin impacto desproporcionado para ti.', 'Legitimate interest in organising sales handling efficiently (Art. 6(1)(f) GDPR), without disproportionate impact on you.')],
              [L('Seguridad del sitio web y prevención de abusos (por ejemplo, envíos masivos).', 'Website security and abuse prevention (for example, mass submissions).'),
                L('Interés legítimo (art. 6.1.f RGPD).', 'Legitimate interest (Art. 6(1)(f) GDPR).')],
              [L('Cumplimiento de obligaciones legales y atención de posibles reclamaciones.', 'Compliance with legal obligations and handling of possible claims.'),
                L('Obligación legal (art. 6.1.c RGPD) e interés legítimo (art. 6.1.f).', 'Legal obligation (Art. 6(1)(c) GDPR) and legitimate interest (Art. 6(1)(f)).')]
            ]
          },
          p2: [
            L('No utilizamos tus datos para enviarte comunicaciones comerciales ni boletines salvo que nos lo pidas expresamente o nos des un consentimiento específico y separado. No tomamos decisiones automatizadas ni elaboramos perfiles con efectos jurídicos sobre ti.',
              'We do not use your data to send you commercial communications or newsletters unless you expressly ask us or give separate, specific consent. We do not take automated decisions or build profiles with legal effects on you.'),
            L('Facilitar tus datos es voluntario, pero los campos marcados con asterisco son necesarios para poder atender tu solicitud.', 'Providing your data is voluntary, but the fields marked with an asterisk are necessary to handle your request.')
          ]
        },
        {
          h: L('4. Cuánto tiempo conservamos tus datos', '4. How long we keep your data'),
          ul: [
            L('Consultas sin relación posterior: hasta 12 meses desde la última comunicación con nosotros, salvo que solicites antes su supresión.', 'Enquiries with no follow-up relationship: up to 12 months from our last communication, unless you request deletion sooner.'),
            L('Si se inicia una relación comercial o contractual: durante su vigencia y, después, bloqueados durante los plazos de prescripción legales aplicables (por ejemplo, mercantiles y fiscales).', 'If a commercial or contractual relationship starts: for its duration and, afterwards, blocked for the applicable legal limitation periods (for example, commercial and tax).'),
            L('Datos técnicos de conexión: el tiempo que establezca cada proveedor de alojamiento para sus registros de seguridad.', 'Technical connection data: the period set by each hosting provider for its security logs.')
          ],
          p2: [L('Transcurridos esos plazos, los datos se suprimen o se anonimizan.', 'Once these periods have elapsed, the data is deleted or anonymised.')]
        },
        {
          h: L('5. Destinatarios y encargados del tratamiento', '5. Recipients and processors'),
          p: [
            L('No vendemos ni cedemos tus datos a terceros para sus propios fines. Para prestar el servicio recurrimos a proveedores que actúan como encargados del tratamiento bajo contrato (art. 28 RGPD) y solo siguen nuestras instrucciones:',
              'We do not sell or disclose your data to third parties for their own purposes. To provide the service we use providers acting as processors under contract (Art. 28 GDPR) who only follow our instructions:')
          ],
          ul: [
            L('Alojamiento y entrega del sitio web: Vercel Inc.', 'Website hosting and delivery: Vercel Inc.'),
            L('Base de datos donde se almacenan los mensajes del formulario: Supabase Inc.', 'Database where form messages are stored: Supabase Inc.'),
            L('Envío del aviso por correo electrónico cuando recibimos un mensaje: Resend (Plus Five Five, Inc.).', 'Sending the email notification when we receive a message: Resend (Plus Five Five, Inc.).'),
            L('Servicios de correo electrónico y herramientas de oficina de la empresa, desde los que gestionamos y respondemos tu consulta.', 'Company email and office tools services, from which we manage and answer your enquiry.')
          ],
          note: L('También podremos comunicar datos a administraciones públicas, jueces y tribunales cuando exista una obligación legal.', 'We may also disclose data to public authorities, judges and courts where there is a legal obligation.')
        },
        {
          h: L('6. Transferencias internacionales', '6. International transfers'),
          p: [L('Algunos de los proveedores anteriores pueden tratar datos fuera del Espacio Económico Europeo, en particular en Estados Unidos. En tal caso, la transferencia se ampara en las garantías previstas por el RGPD: la decisión de adecuación del Marco de Privacidad de Datos UE-EE. UU. cuando el proveedor esté certificado, o las cláusulas contractuales tipo de la Comisión Europea junto con medidas complementarias. Puedes solicitarnos información sobre estas garantías en info@altairsense.com.',
            'Some of the providers above may process data outside the European Economic Area, in particular in the United States. In that case, the transfer relies on the safeguards provided by the GDPR: the adequacy decision of the EU-US Data Privacy Framework where the provider is certified, or the European Commission\'s standard contractual clauses together with supplementary measures. You can request information about these safeguards at info@altairsense.com.')]
        },
        {
          h: L('7. Tus derechos', '7. Your rights'),
          p: [L('Puedes ejercer en cualquier momento los siguientes derechos:', 'You can exercise the following rights at any time:')],
          ul: [
            L('Acceso: saber qué datos tuyos tratamos.', 'Access: know what data of yours we process.'),
            L('Rectificación: corregir datos inexactos o incompletos.', 'Rectification: correct inaccurate or incomplete data.'),
            L('Supresión: pedir que eliminemos tus datos.', 'Erasure: ask us to delete your data.'),
            L('Oposición: oponerte al tratamiento basado en interés legítimo.', 'Objection: object to processing based on legitimate interest.'),
            L('Limitación: pedir que suspendamos temporalmente el tratamiento.', 'Restriction: ask us to temporarily suspend processing.'),
            L('Portabilidad: recibir tus datos en un formato estructurado.', 'Portability: receive your data in a structured format.'),
            L('Retirar el consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.', 'Withdraw consent at any time, without affecting the lawfulness of prior processing.')
          ],
          p2: [
            L(`Para ejercerlos, escribe a ${C.email} indicando el derecho que quieres ejercer y acreditando tu identidad (copia de un documento identificativo si hay dudas razonables). Responderemos en el plazo máximo de un mes.`,
              `To exercise them, write to ${C.email} stating the right you wish to exercise and proving your identity (a copy of an identity document if there are reasonable doubts). We will reply within one month at most.`),
            L('Si consideras que no hemos tratado tus datos conforme a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
              'If you believe we have not processed your data in accordance with the regulations, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).')
          ]
        },
        {
          h: L('8. Seguridad', '8. Security'),
          p: [L('Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración: comunicaciones cifradas (HTTPS), acceso restringido a la base de datos y proveedores con compromisos de seguridad y confidencialidad.',
            'We apply reasonable technical and organisational measures to protect your data against unauthorised access, loss or alteration: encrypted communications (HTTPS), restricted database access and providers with security and confidentiality commitments.')]
        },
        {
          h: L('9. Plataforma Lumen y otros tratamientos', '9. Lumen platform and other processing'),
          p: [L('El tratamiento de datos que se realiza dentro de la plataforma Lumen (clientes, colaboradores y usuarios autorizados) se rige por el contrato correspondiente y su documentación de protección de datos, y no por esta política, que se refiere al sitio web público.',
            'Processing carried out within the Lumen platform (clients, collaborators and authorised users) is governed by the corresponding contract and its data protection documentation, and not by this policy, which refers to the public website.')]
        },
        {
          h: L('10. Cambios en esta política', '10. Changes to this policy'),
          p: [L(`Podemos actualizar esta política para reflejar cambios legales o en nuestros servicios. La versión vigente es la publicada en esta página, con fecha de última actualización ${LEGAL_UPDATED.es}.`,
            `We may update this policy to reflect legal changes or changes to our services. The current version is the one published on this page, last updated ${LEGAL_UPDATED.en}.`)]
        }
      ]
    }
  }

  // cookies
  return {
    title: L('Política de cookies', 'Cookie policy'),
    description: L('Política de cookies de Altair Sense: este sitio web no instala cookies ni tecnologías de almacenamiento en tu dispositivo con fines de analítica o publicidad.',
      'Altair Sense cookie policy: this website does not install cookies or storage technologies on your device for analytics or advertising purposes.'),
    sections: [
      {
        h: L('1. Qué son las cookies', '1. What cookies are'),
        p: [L('Las cookies y tecnologías similares (como el almacenamiento local del navegador) son pequeños archivos o datos que un sitio web guarda en tu dispositivo para recordar información. Su uso está regulado por el artículo 22.2 de la LSSI-CE: las que no son estrictamente necesarias requieren tu consentimiento previo.',
          'Cookies and similar technologies (such as browser local storage) are small files or data that a website stores on your device to remember information. Their use is regulated by Article 22(2) of the LSSI-CE: those that are not strictly necessary require your prior consent.')]
      },
      {
        h: L('2. Qué utiliza este sitio web', '2. What this website uses'),
        p: [
          L(`A fecha de la última actualización (${LEGAL_UPDATED.es}), este sitio web (${C.site}) no instala cookies propias ni de terceros, ni utiliza almacenamiento local o de sesión del navegador, para analítica, publicidad, personalización ni ninguna otra finalidad. Por eso no mostramos un banner de cookies.`,
            `As of the latest update (${LEGAL_UPDATED.en}), this website (${C.site}) does not install first- or third-party cookies, nor use browser local or session storage, for analytics, advertising, personalisation or any other purpose. That is why we do not show a cookie banner.`),
          L('El idioma se determina por la dirección de la página (español en la raíz y /en/ para inglés). Las tipografías se sirven desde nuestro propio dominio, sin conectar con servicios de terceros. Los datos de origen de la visita (como parámetros de campaña) solo se mantienen en la memoria de la página mientras navegas y se adjuntan, si envías un formulario, tal como explica la Política de Privacidad.',
            'The language is determined by the page address (Spanish at the root and /en/ for English). Fonts are served from our own domain, without connecting to third-party services. Visit origin data (such as campaign parameters) is only kept in the page memory while you browse and is attached, if you submit a form, as explained in the Privacy Policy.')
        ]
      },
      {
        h: L('3. Enlaces y servicios de terceros', '3. Third-party links and services'),
        p: [L('Este sitio contiene enlaces a páginas externas (por ejemplo, LinkedIn o Google Maps) y a la plataforma Lumen. Esos sitios pueden usar sus propias cookies una vez que accedes a ellos; te recomendamos consultar sus políticas. La plataforma Lumen puede utilizar tecnologías de sesión estrictamente necesarias para identificarte tras iniciar sesión, que están exentas de consentimiento.',
          'This site contains links to external pages (for example, LinkedIn or Google Maps) and to the Lumen platform. Those sites may use their own cookies once you access them; we recommend reviewing their policies. The Lumen platform may use strictly necessary session technologies to identify you after login, which are exempt from consent.')]
      },
      {
        h: L('4. Si esto cambia', '4. If this changes'),
        p: [L('Si en el futuro activamos herramientas de analítica, publicidad o contenido incrustado de terceros que requieran cookies no exentas, lo haremos únicamente tras mostrar un aviso que permita aceptar o rechazar con la misma facilidad, no cargaremos esas tecnologías hasta que aceptes, y actualizaremos esta política indicando su finalidad, titular y duración.',
          'If in the future we enable analytics, advertising or embedded third-party content that require non-exempt cookies, we will do so only after showing a notice that allows accepting or rejecting with equal ease, we will not load those technologies until you accept, and we will update this policy stating their purpose, owner and duration.')]
      },
      {
        h: L('5. Cómo gestionar o borrar datos del navegador', '5. How to manage or delete browser data'),
        p: [L('Puedes bloquear o eliminar cookies y datos de sitios en cualquier momento desde los ajustes de tu navegador (Chrome, Firefox, Safari, Edge…).',
          'You can block or delete cookies and site data at any time from your browser settings (Chrome, Firefox, Safari, Edge…).')]
      },
      {
        h: L('6. Contacto', '6. Contact'),
        p: [L(`Para cualquier duda sobre esta política, escríbenos a ${C.email}. Responsable: ${C.name}, CIF ${C.cif}, ${C.address}.`,
          `For any questions about this policy, write to ${C.email}. Controller: ${C.name}, Tax ID ${C.cif}, ${C.address}.`)]
      }
    ]
  }
}
