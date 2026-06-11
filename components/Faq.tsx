'use client';

import { useState } from 'react';

type FaqItem = {
  pregunta: string;
  respuesta: string;
};

type Tab = {
  id: string;
  label: string;
  icon: string;
  faqs: FaqItem[];
};

const tabs: Tab[] = [
  {
    id: 'coliving',
    label: 'Coliving',
    icon: '🏠',
    faqs: [
      {
        pregunta: '¿Qué es exactamente el modelo Coliving de Viviendas Virtuo?',
        respuesta:
          'El Coliving de Viviendas Virtuo es un modelo de gestión profesional de viviendas compartidas, donde cada habitación se alquila de forma independiente a inquilinos cuidadosamente seleccionados. Nos encargamos de todo: desde la búsqueda y verificación de perfiles hasta la gestión diaria, garantizando una convivencia ordenada y una rentabilidad estable para el propietario.',
      },
      {
        pregunta: '¿Cuánta rentabilidad puedo esperar con el Coliving?',
        respuesta:
          'El modelo Coliving genera entre un 30% y un 60% más de rentabilidad que el alquiler tradicional de vivienda completa, dependiendo de la ubicación y características del inmueble. Al alquilar por habitaciones, multiplicas los ingresos sin multiplicar los problemas, ya que Virtuo gestiona toda la operativa.',
      },
      {
        pregunta: '¿Qué perfil de inquilinos ocupan las habitaciones?',
        respuesta:
          'Trabajamos principalmente con jóvenes profesionales, estudiantes universitarios y personas en movilidad laboral. Aplicamos un proceso de verificación riguroso: comprobación de solvencia, referencias laborales y evaluación de perfil. El objetivo es garantizar convivencia responsable y pago puntual.',
      },
      {
        pregunta: '¿Qué pasa si un inquilino no paga o hay conflictos de convivencia?',
        respuesta:
          'Contamos con protocolos claros de actuación ante impagos y conflictos. Gestionamos la comunicación, los requerimientos y, si fuera necesario, el proceso de resolución del contrato. Además, al trabajar con contratos individuales por habitación, un impago aislado no compromete los ingresos del resto de la vivienda.',
      },
      {
        pregunta: '¿Necesito tener la vivienda amueblada para empezar?',
        respuesta:
          'No es imprescindible que esté completamente equipada desde el inicio. Nuestro equipo te asesora sobre qué inversión mínima maximiza la rentabilidad. En muchos casos, una adecuación básica y funcional es suficiente para entrar al mercado con competitividad.',
      },
      {
        pregunta: '¿Cuánto tiempo tarda en estar operativa mi vivienda?',
        respuesta:
          'El proceso desde la firma del contrato de gestión hasta la primera ocupación suele ser de 2 a 4 semanas, dependiendo del estado de la vivienda y la demanda de la zona. Nuestro equipo gestiona la publicación, las visitas y la selección de inquilinos de forma ágil para minimizar el tiempo de vacío.',
      },
    ],
  },
  {
    id: 'temporal',
    label: 'Temporal',
    icon: '📅',
    faqs: [
      {
        pregunta: '¿Vacacional o Alquiler Temporal?',
        respuesta:
          'El vacacional exige licencias y altos costes. El modelo temporal es la alternativa inteligente: ofrece rentabilidades superiores sin licencias y con una gestión segura de perfiles corporativos de corta estancia.',
      },
      {
        pregunta: '¿Es legal el alquiler por meses en 2026?',
        respuesta:
          'Totalmente legal. Se regula como "uso distinto del de vivienda", lo que nos permite contratos de 32 días a 11 meses. En Viviendas Virtuo blindamos legalmente la causa de temporalidad para que el contrato sea inatacable.',
      },
      {
        pregunta: '¿Qué necesito para empezar con este modelo?',
        respuesta:
          'En Virtuo implementamos una estructura dual: un contrato de arrendamiento ajustado a la ley y un contrato de gestión de servicios (limpieza, suministros, mantenimiento). Esto nos permite maximizar tu rentabilidad por encima de los índices actuales mientras cumplimos al 100% con la normativa de 2026.',
      },
      {
        pregunta: '¿Quién puede optar por este modelo?',
        respuesta:
          'Cualquier propietario con activos de 4+ habitaciones en las principales capitales de España. Es la solución ideal para rentabilizar tu vivienda sin las ataduras de los contratos de vivienda habitual de 5 o 7 años.',
      },
      {
        pregunta: '¿Qué seguridad tengo frente a impagos o ocupación?',
        respuesta:
          'Máxima seguridad. Al no ser vivienda habitual y trabajar con perfiles profesionales desplazados, el riesgo es mínimo. Aplicamos un filtrado riguroso y un marco legal que garantiza la recuperación de la posesión de tu activo.',
      },
    ],
  },
  {
    id: 'vacacional',
    label: 'Vacacional',
    icon: '🌴',
    faqs: [
      {
        pregunta: '¿En qué consiste exactamente el alquiler vacacional?',
        respuesta:
          'Es una modalidad de arrendamiento para estancias de corta duración (máximo 31 días). Para operar de forma legal, es indispensable cumplir con la normativa de cada Comunidad Autónoma y contar con la licencia turística correspondiente debidamente registrada.',
      },
      {
        pregunta: '¿Cuál es la diferencia con el alquiler temporal?',
        respuesta:
          'El alquiler vacacional se comercializa por días, mientras que el temporal cubre estancias de entre 32 días y 11 meses por motivos específicos (estudios, trabajo, etc.). El modelo vacacional suele ofrecer una rentabilidad por noche superior en zonas de alta demanda turística.',
      },
      {
        pregunta: '¿Qué pasa si mi vivienda no está lista o amueblada?',
        respuesta:
          'En Viviendas Virtuo ofrecemos servicios profesionales de Home Staging. Si tu propiedad necesita adecuarse, nuestro equipo rediseña y equipa el espacio para elevarlo a los estándares premium del mercado vacacional, garantizando la mejor rentabilidad desde el primer día.',
      },
      {
        pregunta: '¿En qué ciudades gestionáis propiedades?',
        respuesta:
          'Gestionamos propiedades en toda España. Nuestra infraestructura operativa nos permite dar servicio en cualquier punto del territorio nacional. Además, si tu zona permite nuevas altas, te asesoramos en todo el proceso administrativo para obtener tu licencia turística.',
      },
      {
        pregunta: '¿Cómo aseguran una alta ocupación en mi piso?',
        respuesta:
          'Utilizamos tecnología avanzada de precios dinámicos y un posicionamiento estratégico en las principales plataformas globales. Combinamos esto con fotografía profesional y una gestión de reseñas activa para que tu vivienda destaque siempre sobre la competencia.',
      },
      {
        pregunta: '¿Qué seguridad ofrecen frente a los huéspedes y la ley?',
        respuesta:
          'Implementamos filtros de seguridad y gestionamos depósitos de garantía. Además, cumplimos con la normativa estatal de seguridad ciudadana, encargándonos del registro de viajeros ante las autoridades competentes (Policía Nacional, Guardia Civil o cuerpos autonómicos) y de la gestión de tasas turísticas locales.',
      },
    ],
  },
];

export default function Faq() {
  const [activeTab, setActiveTab] = useState<string>('coliving');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setOpenIndex(null);
  };

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Cabecera */}
        <div className="faq-header">
          <span className="faq-eyebrow">Preguntas frecuentes</span>
          <h2 className="faq-title">Todo lo que necesitas saber</h2>
          <p className="faq-subtitle">
            Resolvemos las dudas más comunes sobre cada uno de nuestros modelos de gestión.
          </p>
        </div>

        {/* Tabs */}
        <div className="faq-tabs" role="tablist" aria-label="Modalidades de alquiler">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              className={`faq-tab ${activeTab === tab.id ? 'faq-tab--active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              <span className="faq-tab-icon" aria-hidden="true">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Acordeón */}
        <div
          role="tabpanel"
          id={`panel-${currentTab.id}`}
          aria-labelledby={`tab-${currentTab.id}`}
          className="faq-panel"
        >
          {currentTab.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${currentTab.id}-${i}`}
                  id={`question-${currentTab.id}-${i}`}
                >
                  <span>{faq.pregunta}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`answer-${currentTab.id}-${i}`}
                  role="region"
                  aria-labelledby={`question-${currentTab.id}-${i}`}
                  className="faq-answer"
                  hidden={!isOpen}
                >
                  <p>{faq.respuesta}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA inferior */}
        <div className="faq-cta">
          <p>¿Tienes una pregunta específica que no aparece aquí?</p>
          <a href="#contacto" className="faq-cta-btn">
            Habla con un asesor
          </a>
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 80px 0;
          background: #f8f9fc;
        }

        .faq-container {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .faq-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1a4a8a;
          margin-bottom: 12px;
        }

        .faq-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #0f2d5e;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .faq-subtitle {
          font-size: 1.0625rem;
          color: #5a6a80;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .faq-tabs {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 40px;
          background: #fff;
          padding: 6px;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(15, 45, 94, 0.06);
        }

        .faq-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 10px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 0.9375rem;
          font-weight: 500;
          color: #5a6a80;
          transition: all 200ms ease;
          white-space: nowrap;
        }

        .faq-tab:hover {
          background: #f0f4fa;
          color: #1a4a8a;
        }

        .faq-tab--active {
          background: #1a4a8a;
          color: #fff;
          box-shadow: 0 2px 8px rgba(26, 74, 138, 0.25);
        }

        .faq-tab--active:hover {
          background: #0f2d5e;
          color: #fff;
        }

        .faq-tab-icon {
          font-size: 1rem;
          line-height: 1;
        }

        .faq-panel {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }

        .faq-item:hover {
          border-color: #c7d7ee;
        }

        .faq-item--open {
          border-color: #1a4a8a;
          box-shadow: 0 2px 12px rgba(26, 74, 138, 0.08);
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-size: 0.9375rem;
          font-weight: 600;
          color: #0f2d5e;
          line-height: 1.4;
          transition: color 200ms ease;
        }

        .faq-question:hover {
          color: #1a4a8a;
        }

        .faq-item--open .faq-question {
          color: #1a4a8a;
        }

        .faq-chevron {
          flex-shrink: 0;
          color: #9ab0cc;
          transition: transform 250ms ease;
        }

        .faq-item--open .faq-chevron {
          transform: rotate(180deg);
          color: #1a4a8a;
        }

        .faq-answer {
          padding: 0 24px 20px;
          border-top: 1px solid #f0f4fa;
        }

        .faq-answer p {
          font-size: 0.9375rem;
          color: #4a5a6e;
          line-height: 1.7;
          padding-top: 16px;
        }

        .faq-cta {
          text-align: center;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid #e2e8f0;
        }

        .faq-cta p {
          font-size: 0.9375rem;
          color: #5a6a80;
          margin-bottom: 16px;
        }

        .faq-cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 12px 28px;
          background: #1a4a8a;
          color: #fff;
          border-radius: 8px;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 200ms ease, transform 200ms ease;
        }

        .faq-cta-btn:hover {
          background: #0f2d5e;
          transform: translateY(-1px);
        }

        @media (max-width: 600px) {
          .faq-section {
            padding: 60px 0;
          }

          .faq-tabs {
            gap: 4px;
            padding: 4px;
          }

          .faq-tab {
            padding: 9px 16px;
            font-size: 0.875rem;
          }

          .faq-question {
            padding: 16px 18px;
            font-size: 0.875rem;
          }

          .faq-answer {
            padding: 0 18px 16px;
          }

          .faq-answer p {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
}
