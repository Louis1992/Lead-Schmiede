// Translation strings for Lead-Schmiede website

export type Language = 'de' | 'en';

export const translations = {
  de: {
    // Header
    header: {
      menuItems: [
        { label: 'Was wir tun', href: '#what-we-do' },
        { label: 'So funktioniert es', href: '#how-it-works' },
        { label: 'Preise', href: '#pricing' },
        { label: 'Kundenstimmen', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' }
      ],
      ctaText: 'Kostenlos beraten lassen'
    },

    // Hero - Conversion-optimized
    hero: {
      title: 'Sparen Sie sich die nervige Leadlisten-Erstellung',
      subtitle: 'Echte Menschen + smarte KI recherchieren Ihre B2B-Leads. Verifiziert, aufbereitet, in 48h geliefert.',
      cta: 'Kostenloses Erstgespräch',
      ctaSubtext: 'Unverbindlich • 15 Min • Sofort Klarheit',
      trustBadges: [
        '95% Verifizierungsquote',
        'DSGVO-konform',
        'Made in Germany'
      ],
      reviews: [
        {
          logo: '',
          text: '"Endlich eine Lösung zwischen teuren Self-Service-Tools und unerschwinglichen Agenturen. Die Qualität der Leads hat unsere Erwartungen übertroffen."',
          attribution: '— Startup-Gründer, SaaS',
          personImage: ''
        },
        {
          logo: '',
          text: '"Die ICP-Beratung war Gold wert. Lead-Schmiede hat verstanden, wen wir wirklich erreichen wollen – und genau diese Kontakte geliefert."',
          attribution: '— Sales Manager, IT-Beratung',
          personImage: ''
        },
        {
          logo: '',
          text: '"Schnell, unkompliziert und DSGVO-konform. Genau das, was ich als Selbstständiger gebraucht habe."',
          attribution: '— Freelance Berater',
          personImage: ''
        }
      ],
      mobileReviews: [
        {
          logo: '',
          text: '"Endlich eine bezahlbare Lösung für qualifizierte B2B-Leads."',
          attribution: '— Startup-Gründer',
          personImage: ''
        },
        {
          logo: '',
          text: '"Die ICP-Beratung war Gold wert. Genau die richtigen Kontakte."',
          attribution: '— Sales Manager',
          personImage: ''
        },
        {
          logo: '',
          text: '"Schnell, unkompliziert und DSGVO-konform."',
          attribution: '— Freelance Berater',
          personImage: ''
        }
      ]
    },

    // What We Do Section - Service Explanation
    whatWeDo: {
      title: 'Was wir tun',
      subtitle: 'Der Unterschied zwischen Self-Service-Tools und echtem Lead-Service',
      comparison: {
        selfService: {
          title: 'Self-Service-Tools',
          subtitle: 'Apollo, Cognism, LinkedIn Sales Navigator',
          problems: [
            'Sie investieren Stunden ins Filtern und Suchen',
            'Generische Filter passen nie genau zu Ihrem ICP',
            'Keine Überprüfung der Datenaktualität',
            'Sie zahlen für Features, die Sie nicht brauchen',
            'Kein persönlicher Ansprechpartner'
          ]
        },
        leadSchmiede: {
          title: 'Lead-Schmiede',
          subtitle: 'Maßgeschneiderte Lead-Recherche',
          benefits: [
            'Wöchentliche Evaluation Ihrer Kampagnen-Performance',
            'Experten-KI-Prompts für Signal-Filterung',
            'Manuelle Verifizierung jedes einzelnen Kontakts',
            'Persönliche ICP-Beratung und Iteration',
            'Spezifische Signale: Jobwechsel, Funding, Expansionen',
            'Datenaufbereitung exakt nach Ihren Wünschen'
          ]
        }
      },
      process: {
        title: 'Unser Prozess: Mensch + KI',
        steps: [
          {
            number: '01',
            title: 'Persönlicher ICP-Workshop',
            description: 'Ein echter Mensch definiert mit Ihnen Ihre idealen Kunden: Branche, Unternehmensgröße, Entscheider-Level, technologische Signale.'
          },
          {
            number: '02',
            title: 'KI-gestützte Signal-Filterung',
            description: 'Smarte KI identifiziert Kaufsignale: aktuelle Jobwechsel, Funding-Runden, Expansion in neue Märkte – überwacht von unserem Team.'
          },
          {
            number: '03',
            title: 'Manuelle Verifizierung',
            description: 'Echte Menschen prüfen jeden Kontakt auf Aktualität. Wir verifizieren E-Mail, Jobtitel und Unternehmenszugehörigkeit persönlich.'
          },
          {
            number: '04',
            title: 'Wöchentliche Iteration',
            description: 'Ihr persönlicher Ansprechpartner analysiert Ihre Kampagnen-Ergebnisse und optimiert die Zielgruppen-Definition kontinuierlich.'
          }
        ]
      }
    },

    // Problem Section - Pain Agitation
    problem: {
      title: 'Kennen Sie das?',
      painPoints: [
        {
          icon: 'wallet',
          text: 'Apollo, Cognism, LinkedIn Sales Navigator... hunderte Euro pro Monat für Tools, die Sie selbst bedienen müssen'
        },
        {
          icon: 'clock',
          text: 'Stunden verbrannt mit Filtern, die nie genau zu Ihrer Zielgruppe passen'
        },
        {
          icon: 'alert',
          text: 'Am Ende: Eine Liste mit 30% veralteten oder falschen Kontakten'
        }
      ],
      solution: 'Es gibt einen besseren Weg.',
      solutionSubtext: 'Wir übernehmen die komplette Recherche – Sie bekommen nur verifizierte Kontakte, die wirklich zu Ihnen passen.'
    },

    // Benefits Section - Outcome focused
    benefits: {
      title: 'Was Sie bekommen',
      items: [
        {
          icon: 'target',
          title: 'Ihr Wunschkunde, kristallklar definiert',
          description: 'Persönliche ICP-Beratung statt anonymer Filter. Wir verstehen, wen Sie wirklich erreichen wollen.'
        },
        {
          icon: 'verified',
          title: 'Aktuelle Kontaktdaten',
          description: 'Jeder Kontakt wird manuell verifiziert. Keine Bounces, keine veralteten Jobtitel.'
        },
        {
          icon: 'shield',
          title: 'Rechtssicher dokumentiert',
          description: 'DSGVO-konforme Datenherkunft. Sie bekommen die komplette Dokumentation für Ihre Unterlagen.'
        }
      ]
    },

    // Trust Section
    trust: {
      title: 'Warum Unternehmen auf Lead-Schmiede setzen',
      stats: [
        { label: 'Gelieferte Leads' },
        { label: 'Zufriedene Kunden' },
        { label: 'Verifizierungsquote' }
      ],
      badge: {
        topRated: 'DSGVO-konform',
        verifiedBy: 'Made in Germany',
        tooltip: 'Alle Daten werden nach deutschen Datenschutzstandards verarbeitet und geliefert.'
      }
    },

    // How It Works
    howItWorks: {
      title: 'So funktioniert es',
      subtitle: 'In 5 Schritten zu Ihren Wunschkunden',
      steps: [
        {
          number: '01',
          title: 'Kostenloses Erstgespräch',
          description: 'Wir analysieren gemeinsam Ihr Ideal Customer Profile (ICP) und verstehen genau, wen Sie erreichen wollen.'
        },
        {
          number: '02',
          title: 'ICP-Definition',
          description: 'Basierend auf Ihrem Input definieren wir Branche, Unternehmensgröße, Jobtitel und weitere Kriterien.'
        },
        {
          number: '03',
          title: 'Recherche & Kuratierung',
          description: 'Wir durchsuchen Premium-Datenbanken und kuratieren Ihre Liste manuell mit KI-Unterstützung.'
        },
        {
          number: '04',
          title: 'Verifizierung',
          description: 'Jeder Kontakt wird auf Aktualität und Erreichbarkeit geprüft – inklusive DSGVO-Dokumentation.'
        },
        {
          number: '05',
          title: 'Lieferung & Iteration',
          description: 'Sie erhalten Ihre Lead-Liste und können bei Bedarf kostenlos nachjustieren lassen.'
        }
      ]
    },

    // USP Section
    usp: {
      title: 'Warum Lead-Schmiede?',
      items: [
        {
          icon: 'users',
          title: 'Persönliche ICP-Beratung',
          description: 'Kein anonymes Self-Service-Tool – wir beraten Sie persönlich bei der Definition Ihrer Zielgruppe.'
        },
        {
          icon: 'target',
          title: 'Maßgeschneiderte Recherche',
          description: 'Keine Massenware: Jede Liste wird individuell für Sie zusammengestellt.'
        },
        {
          icon: 'refresh',
          title: 'Iterativer Prozess',
          description: 'Passt die Zielgruppe nicht? Wir justieren kostenlos nach – Ihr Risiko ist minimal.'
        },
        {
          icon: 'shield',
          title: '100% DSGVO-konform',
          description: 'Deutsche Datenschutzstandards, vollständige Dokumentation, rechtssicher.'
        },
        {
          icon: 'check',
          title: 'Verifizierte Daten',
          description: 'Menschliche Qualitätskontrolle für maximale Datenaktualität.'
        },
        {
          icon: 'brain',
          title: 'KI-gestützte Analyse',
          description: 'Modernste Technologie findet die besten Matches für Ihr Angebot.'
        }
      ]
    },

    // Guarantee Section
    guarantee: {
      title: 'Unsere Garantie',
      items: [
        {
          title: '100% DSGVO-konform',
          subtitle: 'Deutsche Datenschutzstandards, vollständige Dokumentation aller Datenquellen'
        },
        {
          title: 'Verifizierte Kontakte',
          subtitle: 'Jeder Lead wird auf Aktualität geprüft – keine veralteten Daten'
        },
        {
          title: 'Kostenlose Iteration',
          subtitle: 'Passt die Zielgruppe nicht? Wir justieren kostenlos nach'
        },
        {
          title: 'Zufriedenheitsgarantie',
          subtitle: 'Entsprechen die Leads nicht Ihren Kriterien, erhalten Sie Ersatz-Leads'
        }
      ]
    },

    // FAQ Section
    faq: {
      title: 'Häufig gestellte Fragen',
      categories: [
        {
          title: 'Über unseren Service',
          items: [
            {
              question: 'Was genau bekomme ich?',
              answer: 'Sie erhalten eine Excel/CSV-Liste mit verifizierten B2B-Kontakten inkl. Name, Jobtitel, Unternehmen, E-Mail und optional Telefonnummer. Dazu die komplette DSGVO-Dokumentation.'
            },
            {
              question: 'Wie unterscheidet sich Lead-Schmiede von Self-Service-Tools wie Apollo oder Cognism?',
              answer: 'Self-Service-Tools erfordern Zeit und Expertise. Wir übernehmen die komplette Recherche für Sie – inklusive persönlicher Beratung zur Zielgruppen-Definition. Sie sparen Zeit und bekommen bessere Ergebnisse.'
            },
            {
              question: 'Für wen ist der Service geeignet?',
              answer: 'Ideal für Startups, KMU und Selbstständige mit 1-50 Mitarbeitern, die qualifizierte B2B-Leads benötigen, aber weder Zeit für Self-Service noch Budget für Full-Service-Agenturen haben.'
            }
          ]
        },
        {
          title: 'DSGVO & Rechtliches',
          items: [
            {
              question: 'Sind die Leads DSGVO-konform?',
              answer: 'Ja. Alle Daten stammen aus rechtmäßigen Quellen und werden nach deutschen Datenschutzstandards verarbeitet. Sie erhalten die vollständige Dokumentation zur Datenherkunft.'
            },
            {
              question: 'Was darf ich mit den Leads machen?',
              answer: 'Postalische Werbung ist ohne Einwilligung erlaubt. Für E-Mail- oder Telefonwerbung benötigen Sie vorab eine Einwilligung (Opt-In). Wir beraten Sie gerne zu den rechtlichen Möglichkeiten.'
            },
            {
              question: 'Wer ist für den Datenschutz verantwortlich?',
              answer: 'Mit Übergabe der Daten sind Sie als Käufer für die DSGVO-konforme Nutzung verantwortlich. Wir liefern Ihnen alle notwendigen Dokumentationen.'
            }
          ]
        },
        {
          title: 'Prozess & Lieferung',
          items: [
            {
              question: 'Wie lange dauert die Lieferung?',
              answer: 'Nach dem Beratungsgespräch liefern wir innerhalb von spätestens 3 Werktagen – meistens sogar schneller. Bei größeren Listen oder sehr komplexen Anforderungen entsprechend länger.'
            },
            {
              question: 'Was passiert, wenn die Leads nicht passen?',
              answer: 'Wir bieten eine kostenlose Iteration: Entsprechen die Leads nicht Ihren Kriterien, justieren wir die Suche nach und liefern Ersatz-Leads.'
            },
            {
              question: 'Kann ich erst testen?',
              answer: 'Ja! Mit unserem Starter-Paket (100 Leads für €249) können Sie unsere Qualität direkt erleben. Unsere Qualitätsgarantie schützt Sie: Ungültige Leads ersetzen wir 1:1.'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Transparente Preise',
      subtitle: 'Wählen Sie das passende Modell für Ihre Lead-Generierung',
      oneTimeLabel: 'Einmalig',
      monthlyLabel: 'Monatlich',
      monthlySavingsBadge: 'Recurring',
      perMonthLabel: 'Monat',
      commitmentLabels: {
        threeMonths: '3 Monate',
        sixMonths: '6 Monate',
        twelveMonths: '12 Monate'
      },
      commitmentBadges: {
        threeMonths: '',
        sixMonths: '',
        twelveMonths: 'Beste Ersparnis'
      },
      packages: [
        {
          name: 'Starter',
          duration: '100 Leads',
          price: '€249',
          pricePerLead: '€2,49/Lead',
          features: [
            '100 verifizierte B2B-Kontakte',
            'ICP-Kurzberatung (15 Min)',
            'DSGVO-Dokumentation',
            'Excel/CSV-Export',
            'E-Mail-Support (48h)'
          ],
          bestFor: 'Erste Kampagne starten',
          cta: 'Jetzt starten',
          highlighted: false
        },
        {
          name: 'Growth',
          duration: '500 Leads',
          price: '€999',
          pricePerLead: '€2,00/Lead',
          savings: 'Sie sparen 246 €',
          features: [
            '500 verifizierte B2B-Kontakte',
            'Ausführliche ICP-Beratung (45 Min)',
            'DSGVO-Dokumentation',
            'Excel/CSV + CRM-Format',
            'Prioritäts-Support (24h)',
            '1 Iteration inklusive',
            'Signal-Filterung (Jobwechsel, Funding)'
          ],
          bestFor: 'Skalierung & Wachstum',
          cta: 'Beratung sichern',
          highlighted: true
        },
        {
          name: 'Scale',
          duration: '1.000 Leads',
          price: '€1.499',
          pricePerLead: '€1,50/Lead',
          savings: 'Sie sparen 991 €',
          features: [
            '1.000 verifizierte B2B-Kontakte',
            'Premium ICP-Workshop (90 Min)',
            'DSGVO-Dokumentation',
            'Alle Export-Formate + API',
            'Dedizierter Ansprechpartner (4h)',
            'Wöchentliche Iteration',
            'Volle Signal-Filterung'
          ],
          bestFor: 'Maximale Skalierung',
          cta: 'Premium-Beratung buchen',
          highlighted: false
        }
      ],
      enterprise: {
        title: 'Ab 2.500 Leads?',
        description: 'Individuelle Konditionen für große Vertriebsteams – mit dediziertem Account Manager, API-Integration und SLA.',
        cta: 'Gespräch vereinbaren'
      },
      monthlyPackages: [
        {
          name: 'Starter',
          duration: '500 Leads/Monat',
          pricing: {
            threeMonths: { price: '€899', pricePerLead: '€1,80/Lead', savings: '10% gespart' },
            sixMonths: { price: '€799', pricePerLead: '€1,60/Lead', savings: '20% gespart' },
            twelveMonths: { price: '€699', pricePerLead: '€1,40/Lead', savings: '30% gespart' }
          },
          features: [
            '500 Leads jeden Monat',
            'Monatliche ICP-Optimierung',
            'DSGVO-Dokumentation',
            'Ungenutzte Leads übertragbar',
            'Prioritäts-Support (24h)',
            '1 Iteration/Monat inklusive'
          ],
          bestFor: 'Kontinuierlicher Pipeline-Aufbau',
          cta: 'Jetzt starten',
          highlighted: false
        },
        {
          name: 'Growth',
          duration: '1.000 Leads/Monat',
          pricing: {
            threeMonths: { price: '€1.349', pricePerLead: '€1,35/Lead', savings: '10% gespart' },
            sixMonths: { price: '€1.199', pricePerLead: '€1,20/Lead', savings: '20% gespart' },
            twelveMonths: { price: '€1.049', pricePerLead: '€1,05/Lead', savings: '30% gespart' }
          },
          features: [
            '1.000 Leads jeden Monat',
            'Wöchentliche Optimierung',
            'DSGVO-Dokumentation',
            'Ungenutzte Leads übertragbar',
            'Dedizierter Ansprechpartner',
            'Kampagnen-Analyse',
            'Signal-Filterung'
          ],
          bestFor: 'Wachsende Sales-Teams',
          cta: 'Beratung sichern',
          highlighted: true
        },
        {
          name: 'Scale',
          duration: '2.000 Leads/Monat',
          pricing: {
            threeMonths: { price: '€1.999', pricePerLead: '€1,00/Lead', savings: '10% gespart' },
            sixMonths: { price: '€1.799', pricePerLead: '€0,90/Lead', savings: '20% gespart' },
            twelveMonths: { price: '€1.599', pricePerLead: '€0,80/Lead', savings: '30% gespart' }
          },
          features: [
            '2.000 Leads jeden Monat',
            'Tägliche Optimierung',
            'DSGVO-Dokumentation',
            'Ungenutzte Leads übertragbar',
            'Premium Account Manager',
            'Wöchentliche Strategy Calls',
            'Volle Signal-Filterung + API'
          ],
          bestFor: 'Enterprise Sales-Teams',
          cta: 'Premium-Beratung buchen',
          highlighted: false
        }
      ],
      bestForLabel: 'Ideal für:',
      popularBadge: 'Beliebteste',
      guaranteeText: 'Qualitätsgarantie: Ungültige Leads ersetzen wir 1:1',
      paymentNote: 'Einmalig = Vorkasse • Monatlich = 3, 6 oder 12 Monate Laufzeit'
    },

    // Contact Section
    contact: {
      title: 'Bereit für qualifizierte B2B-Leads?',
      subtitle: 'Lassen Sie uns herausfinden, ob wir zueinander passen.',
      formTitle: 'Kostenloses Erstgespräch buchen',
      nameLabel: 'Name*',
      nameRequired: 'Name ist erforderlich',
      companyLabel: 'Unternehmen*',
      companyRequired: 'Unternehmen ist erforderlich',
      emailLabel: 'E-Mail*',
      emailRequired: 'E-Mail ist erforderlich',
      phoneLabel: 'Telefon',
      leadsNeededLabel: 'Wie viele Leads benötigen Sie ungefähr?',
      submitButton: 'Kostenlos & unverbindlich anfragen',
      responseTime: 'Antwort innerhalb von 24 Stunden',
      directContactTitle: 'Direkter Kontakt',
      officeHoursLabel: 'Bürozeiten',
      officeHours: 'Mo-Fr 9:00-18:00 Uhr',
      linkedInValue: 'Mit uns verbinden'
    },

    // Footer
    footer: {
      copyright: '© {year} Lead-Schmiede',
      tagline: 'Maßgeschneiderte B2B Lead-Listen mit ICP-Beratung',
      legal: [
        { label: 'Impressum', href: '/impressum' },
        { label: 'AGB', href: '/agb' },
        { label: 'Datenschutz', href: '/datenschutz' }
      ]
    },

    // Language switcher
    language: {
      de: 'DE',
      en: 'EN'
    }
  },

  en: {
    // Header
    header: {
      menuItems: [
        { label: 'What We Do', href: '#what-we-do' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' }
      ],
      ctaText: 'Get Started'
    },

    // Hero - Conversion-optimized
    hero: {
      title: 'Skip the Tedious Lead List Building',
      subtitle: 'Real humans + smart AI research your B2B leads. Verified, formatted, delivered in 48h.',
      cta: 'Free Consultation',
      ctaSubtext: 'No commitment • 15 min • Instant clarity',
      trustBadges: [
        '95% Verification Rate',
        'GDPR Compliant',
        'Made in Germany'
      ],
      reviews: [
        {
          logo: '',
          text: '"Finally a solution between expensive self-service tools and unaffordable agencies. The lead quality exceeded our expectations."',
          attribution: '— Startup Founder, SaaS',
          personImage: ''
        },
        {
          logo: '',
          text: '"The ICP consulting was invaluable. Lead-Schmiede understood exactly who we wanted to reach – and delivered those contacts."',
          attribution: '— Sales Manager, IT Consulting',
          personImage: ''
        },
        {
          logo: '',
          text: '"Fast, straightforward, and GDPR-compliant. Exactly what I needed as a freelancer."',
          attribution: '— Freelance Consultant',
          personImage: ''
        }
      ],
      mobileReviews: [
        {
          logo: '',
          text: '"Finally an affordable solution for qualified B2B leads."',
          attribution: '— Startup Founder',
          personImage: ''
        },
        {
          logo: '',
          text: '"The ICP consulting was invaluable. Exactly the right contacts."',
          attribution: '— Sales Manager',
          personImage: ''
        },
        {
          logo: '',
          text: '"Fast, straightforward, and GDPR-compliant."',
          attribution: '— Freelance Consultant',
          personImage: ''
        }
      ]
    },

    // What We Do Section - Service Explanation
    whatWeDo: {
      title: 'What We Do',
      subtitle: 'The difference between self-service tools and real lead service',
      comparison: {
        selfService: {
          title: 'Self-Service Tools',
          subtitle: 'Apollo, Cognism, LinkedIn Sales Navigator',
          problems: [
            'You spend hours filtering and searching',
            'Generic filters never match your ICP exactly',
            'No verification of data accuracy',
            'You pay for features you don\'t need',
            'No personal contact person'
          ]
        },
        leadSchmiede: {
          title: 'Lead-Schmiede',
          subtitle: 'Custom Lead Research',
          benefits: [
            'Weekly evaluation of your campaign performance',
            'Expert AI prompts for signal filtering',
            'Manual verification of each individual contact',
            'Personal ICP consulting and iteration',
            'Specific signals: job changes, funding, expansions',
            'Data formatting exactly as you need it'
          ]
        }
      },
      process: {
        title: 'Our Process: Human + AI',
        steps: [
          {
            number: '01',
            title: 'Personal ICP Workshop',
            description: 'A real person defines your ideal customers with you: industry, company size, decision-maker level, tech signals.'
          },
          {
            number: '02',
            title: 'AI-Powered Signal Filtering',
            description: 'Smart AI identifies buying signals: recent job changes, funding rounds, market expansion – supervised by our team.'
          },
          {
            number: '03',
            title: 'Manual Verification',
            description: 'Real humans check every contact for accuracy. We personally verify email, job title, and company affiliation.'
          },
          {
            number: '04',
            title: 'Weekly Iteration',
            description: 'Your personal contact analyzes your campaign results and continuously optimizes target group definition.'
          }
        ]
      }
    },

    // Problem Section - Pain Agitation
    problem: {
      title: 'Sound Familiar?',
      painPoints: [
        {
          icon: 'wallet',
          text: 'Apollo, Cognism, LinkedIn Sales Navigator... hundreds of euros per month for tools you have to operate yourself'
        },
        {
          icon: 'clock',
          text: 'Hours wasted on filters that never quite match your target audience'
        },
        {
          icon: 'alert',
          text: 'In the end: A list with 30% outdated or incorrect contacts'
        }
      ],
      solution: 'There is a better way.',
      solutionSubtext: 'We handle the complete research – you only get verified contacts that actually match your needs.'
    },

    // Benefits Section - Outcome focused
    benefits: {
      title: 'What You Get',
      items: [
        {
          icon: 'target',
          title: 'Your Ideal Customer, Crystal Clear',
          description: 'Personal ICP consulting instead of anonymous filters. We understand who you really want to reach.'
        },
        {
          icon: 'verified',
          title: 'Current Contact Data',
          description: 'Every contact is manually verified. No bounces, no outdated job titles.'
        },
        {
          icon: 'shield',
          title: 'Legally Documented',
          description: 'GDPR-compliant data sources. You receive complete documentation for your records.'
        }
      ]
    },

    // Trust Section
    trust: {
      title: 'Why Companies Choose Lead-Schmiede',
      stats: [
        { label: 'Leads Delivered' },
        { label: 'Happy Customers' },
        { label: 'Verification Rate' }
      ],
      badge: {
        topRated: 'GDPR Compliant',
        verifiedBy: 'Made in Germany',
        tooltip: 'All data is processed and delivered according to German data protection standards.'
      }
    },

    // How It Works
    howItWorks: {
      title: 'How It Works',
      subtitle: '5 Steps to Your Ideal Customers'
    },

    // Guarantee Section
    guarantee: {
      title: 'Our Guarantee',
      items: [
        {
          title: '100% GDPR Compliant',
          subtitle: 'German data protection standards, complete documentation'
        },
        {
          title: 'Verified Contacts',
          subtitle: 'Every lead is checked for accuracy – no outdated data'
        },
        {
          title: 'Free Iteration',
          subtitle: 'Leads not a fit? We adjust and deliver replacements for free'
        },
        {
          title: 'Satisfaction Guarantee',
          subtitle: 'If leads dont match your criteria, you get replacement leads'
        }
      ]
    },

    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      categories: [
        {
          title: 'About Our Service',
          items: [
            {
              question: 'What exactly do I get?',
              answer: 'You receive an Excel/CSV list with verified B2B contacts including name, job title, company, email and optionally phone number. Plus complete GDPR documentation.'
            },
            {
              question: 'How does Lead-Schmiede differ from self-service tools?',
              answer: 'Self-service tools require time and expertise. We handle the entire research for you – including personal consulting for target group definition.'
            },
            {
              question: 'Who is this service for?',
              answer: 'Ideal for startups, SMBs and freelancers with 1-50 employees who need qualified B2B leads but lack time for self-service or budget for full-service agencies.'
            }
          ]
        },
        {
          title: 'GDPR & Legal',
          items: [
            {
              question: 'Are the leads GDPR compliant?',
              answer: 'Yes. All data comes from legitimate sources and is processed according to German data protection standards.'
            },
            {
              question: 'What can I do with the leads?',
              answer: 'Postal advertising is allowed without consent. For email or phone marketing, you need prior consent (opt-in).'
            },
            {
              question: 'Who is responsible for data protection?',
              answer: 'Upon data transfer, you as the buyer are responsible for GDPR-compliant use. We provide all necessary documentation.'
            }
          ]
        },
        {
          title: 'Process & Delivery',
          items: [
            {
              question: 'How long does delivery take?',
              answer: 'After the consultation, we deliver within 3 business days at most – usually even faster. Longer for larger lists or very complex requirements.'
            },
            {
              question: 'What if the leads dont fit?',
              answer: 'We offer free iteration: If leads dont match your criteria, we adjust the search and deliver replacement leads.'
            },
            {
              question: 'Can I test first?',
              answer: 'Yes! With our Starter package (100 leads for €249) you can experience our quality directly. Our quality guarantee protects you: invalid leads are replaced 1:1.'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Transparent Pricing',
      subtitle: 'Choose the right model for your lead generation',
      oneTimeLabel: 'One-Time',
      monthlyLabel: 'Monthly',
      monthlySavingsBadge: 'Recurring',
      perMonthLabel: 'month',
      commitmentLabels: {
        threeMonths: '3 Months',
        sixMonths: '6 Months',
        twelveMonths: '12 Months'
      },
      commitmentBadges: {
        threeMonths: '',
        sixMonths: '',
        twelveMonths: 'Best savings'
      },
      packages: [
        {
          name: 'Starter',
          duration: '100 Leads',
          price: '€249',
          pricePerLead: '€2.49/lead',
          features: [
            '100 verified B2B contacts',
            'ICP brief consultation (15 min)',
            'GDPR documentation',
            'Excel/CSV export',
            'Email support (48h)'
          ],
          bestFor: 'First campaign launch',
          cta: 'Get Started',
          highlighted: false
        },
        {
          name: 'Growth',
          duration: '500 Leads',
          price: '€999',
          pricePerLead: '€2.00/lead',
          savings: 'Save €246',
          features: [
            '500 verified B2B contacts',
            'Detailed ICP consulting (45 min)',
            'GDPR documentation',
            'Excel/CSV + CRM format',
            'Priority support (24h)',
            '1 iteration included',
            'Signal filtering (job changes, funding)'
          ],
          bestFor: 'Scaling & Growth',
          cta: 'Book Consultation',
          highlighted: true
        },
        {
          name: 'Scale',
          duration: '1,000 Leads',
          price: '€1,499',
          pricePerLead: '€1.50/lead',
          savings: 'Save €991',
          features: [
            '1,000 verified B2B contacts',
            'Premium ICP workshop (90 min)',
            'GDPR documentation',
            'All export formats + API',
            'Dedicated contact (4h response)',
            'Weekly iteration',
            'Full signal filtering'
          ],
          bestFor: 'Maximum scaling',
          cta: 'Book Premium',
          highlighted: false
        }
      ],
      enterprise: {
        title: '2,500+ Leads?',
        description: 'Custom pricing for large sales teams – with dedicated Account Manager, API integration and SLA.',
        cta: 'Schedule Call'
      },
      monthlyPackages: [
        {
          name: 'Starter',
          duration: '500 Leads/month',
          pricing: {
            threeMonths: { price: '€899', pricePerLead: '€1.80/lead', savings: '10% saved' },
            sixMonths: { price: '€799', pricePerLead: '€1.60/lead', savings: '20% saved' },
            twelveMonths: { price: '€699', pricePerLead: '€1.40/lead', savings: '30% saved' }
          },
          features: [
            '500 leads every month',
            'Monthly ICP optimization',
            'GDPR documentation',
            'Unused leads roll over',
            'Priority support (24h)',
            '1 iteration/month included'
          ],
          bestFor: 'Continuous pipeline building',
          cta: 'Get Started',
          highlighted: false
        },
        {
          name: 'Growth',
          duration: '1,000 Leads/month',
          pricing: {
            threeMonths: { price: '€1,349', pricePerLead: '€1.35/lead', savings: '10% saved' },
            sixMonths: { price: '€1,199', pricePerLead: '€1.20/lead', savings: '20% saved' },
            twelveMonths: { price: '€1,049', pricePerLead: '€1.05/lead', savings: '30% saved' }
          },
          features: [
            '1,000 leads every month',
            'Weekly optimization',
            'GDPR documentation',
            'Unused leads roll over',
            'Dedicated contact person',
            'Campaign analysis',
            'Signal filtering'
          ],
          bestFor: 'Growing sales teams',
          cta: 'Book Consultation',
          highlighted: true
        },
        {
          name: 'Scale',
          duration: '2,000 Leads/month',
          pricing: {
            threeMonths: { price: '€1,999', pricePerLead: '€1.00/lead', savings: '10% saved' },
            sixMonths: { price: '€1,799', pricePerLead: '€0.90/lead', savings: '20% saved' },
            twelveMonths: { price: '€1,599', pricePerLead: '€0.80/lead', savings: '30% saved' }
          },
          features: [
            '2,000 leads every month',
            'Daily optimization',
            'GDPR documentation',
            'Unused leads roll over',
            'Premium Account Manager',
            'Weekly strategy calls',
            'Full signal filtering + API'
          ],
          bestFor: 'Enterprise sales teams',
          cta: 'Book Premium',
          highlighted: false
        }
      ],
      bestForLabel: 'Best for:',
      popularBadge: 'Most Popular',
      guaranteeText: 'Quality guarantee: Invalid leads replaced 1:1',
      paymentNote: 'One-time = Prepaid • Monthly = 3, 6 or 12 month commitment'
    },

    // Contact Section
    contact: {
      title: 'Ready for Qualified B2B Leads?',
      subtitle: 'Lets find out if were a good fit.',
      formTitle: 'Book Your Free Consultation',
      nameLabel: 'Name*',
      nameRequired: 'Name is required',
      companyLabel: 'Company*',
      companyRequired: 'Company is required',
      emailLabel: 'Email*',
      emailRequired: 'Email is required',
      phoneLabel: 'Phone',
      leadsNeededLabel: 'Approximately how many leads do you need?',
      submitButton: 'Request Free Consultation',
      responseTime: 'Response within 24 hours',
      directContactTitle: 'Direct Contact',
      officeHoursLabel: 'Office Hours',
      officeHours: 'Mon-Fri 9:00-18:00 CET',
      linkedInValue: 'Connect with us'
    },

    // Footer
    footer: {
      copyright: '© {year} Lead-Schmiede',
      tagline: 'Custom B2B Lead Lists with ICP Consulting',
      legal: [
        { label: 'Imprint', href: '/impressum' },
        { label: 'Terms', href: '/agb' },
        { label: 'Privacy', href: '/datenschutz' }
      ]
    },

    // Language switcher
    language: {
      de: 'DE',
      en: 'EN'
    }
  }
};

export function getTranslations(lang: Language) {
  return translations[lang];
}
