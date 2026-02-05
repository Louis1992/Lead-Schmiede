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
        { label: 'FAQ', href: '#faq' }
      ],
      ctaText: 'Kostenlos beraten lassen'
    },

    // Hero - Conversion-optimized
    hero: {
      title: 'Leads, die wirklich kaufen wollen',
      subtitle: '100 verifizierte Entscheider-Kontakte in 48h – ohne Self-Service-Chaos oder Agentur-Verträge.',
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
            'Spezifische Signale: Jobwechsel, Funding, Expansionen'
          ]
        }
      },
      process: {
        title: 'Unser Prozess im Detail',
        steps: [
          {
            number: '01',
            title: 'ICP-Workshop',
            description: 'Wir definieren gemeinsam Ihre idealen Kunden: Branche, Unternehmensgröße, Entscheider-Level, technologische Signale.'
          },
          {
            number: '02',
            title: 'Signal-Filterung',
            description: 'Unsere KI-gestützten Prompts identifizieren Kaufsignale: aktuelle Jobwechsel, Funding-Runden, Expansion in neue Märkte.'
          },
          {
            number: '03',
            title: 'Manuelle Verifizierung',
            description: 'Jeder Kontakt wird auf Aktualität geprüft. Wir verifizieren E-Mail, Jobtitel und Unternehmenszugehörigkeit.'
          },
          {
            number: '04',
            title: 'Wöchentliche Iteration',
            description: 'Wir analysieren gemeinsam Ihre Kampagnen-Ergebnisse und optimieren die Zielgruppen-Definition kontinuierlich.'
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
          title: '100% aktuelle Kontaktdaten',
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
              answer: 'Nach dem Beratungsgespräch liefern wir innerhalb von 3-5 Werktagen. Bei größeren Listen oder komplexen Anforderungen entsprechend länger.'
            },
            {
              question: 'Was passiert, wenn die Leads nicht passen?',
              answer: 'Wir bieten eine kostenlose Iteration: Entsprechen die Leads nicht Ihren Kriterien, justieren wir die Suche nach und liefern Ersatz-Leads.'
            },
            {
              question: 'Kann ich erst testen?',
              answer: 'Ja! Unser Testpaket mit 20 Leads für €39 ist perfekt zum Kennenlernen. Sie können danach jederzeit zum Growth-Paket upgraden.'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Transparente Preise ohne Abo-Zwang',
      subtitle: 'Einmalige Pakete – zahlen Sie nur, was Sie brauchen',
      packages: [
        {
          name: 'Test',
          duration: '20 Leads',
          price: '€39',
          pricePerLead: '€1,95/Lead',
          features: [
            '20 verifizierte B2B-Kontakte',
            'Kurze ICP-Abstimmung',
            'DSGVO-Dokumentation',
            'Excel/CSV-Export',
            'E-Mail-Support'
          ],
          bestFor: 'Zum Testen & Kennenlernen',
          cta: 'Testpaket anfragen',
          highlighted: false
        },
        {
          name: 'Growth',
          duration: '500 Leads',
          price: '€745',
          pricePerLead: '€1,49/Lead',
          savings: '23% günstiger',
          features: [
            '500 verifizierte B2B-Kontakte',
            'Ausführliche ICP-Beratung',
            'DSGVO-Dokumentation',
            'Excel/CSV-Export',
            'Prioritäts-Support',
            '1 Iteration inklusive'
          ],
          bestFor: 'Kampagnen & Skalierung',
          cta: 'Growth-Paket anfragen',
          highlighted: true
        },
        {
          name: 'Scale',
          duration: '1.000 Leads',
          price: '€1.290',
          pricePerLead: '€1,29/Lead',
          savings: '34% günstiger',
          features: [
            '1.000 verifizierte B2B-Kontakte',
            'Premium ICP-Workshop',
            'DSGVO-Dokumentation',
            'Excel/CSV-Export',
            'Dedizierter Ansprechpartner',
            'Wöchentliche Iteration',
            'Signal-basierte Filterung'
          ],
          bestFor: 'Maximale Skalierung',
          cta: 'Scale-Paket anfragen',
          highlighted: false
        }
      ],
      bestForLabel: 'Ideal für:',
      popularBadge: 'Empfohlen',
      paymentNote: 'Einmalige Zahlung per Vorkasse. Keine versteckten Kosten, kein Abo.'
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
        { label: 'FAQ', href: '#faq' }
      ],
      ctaText: 'Get Started'
    },

    // Hero - Conversion-optimized
    hero: {
      title: 'Leads That Actually Want to Buy',
      subtitle: '100 verified decision-maker contacts in 48h – without self-service chaos or agency contracts.',
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
            'Specific signals: job changes, funding, expansions'
          ]
        }
      },
      process: {
        title: 'Our Process in Detail',
        steps: [
          {
            number: '01',
            title: 'ICP Workshop',
            description: 'We define your ideal customers together: industry, company size, decision-maker level, tech signals.'
          },
          {
            number: '02',
            title: 'Signal Filtering',
            description: 'Our AI-powered prompts identify buying signals: recent job changes, funding rounds, expansion into new markets.'
          },
          {
            number: '03',
            title: 'Manual Verification',
            description: 'Every contact is checked for accuracy. We verify email, job title, and company affiliation.'
          },
          {
            number: '04',
            title: 'Weekly Iteration',
            description: 'We analyze your campaign results together and continuously optimize target group definition.'
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
          title: '100% Current Contact Data',
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
              answer: 'After the consultation, we deliver within 3-5 business days. Longer for larger lists or complex requirements.'
            },
            {
              question: 'What if the leads dont fit?',
              answer: 'We offer free iteration: If leads dont match your criteria, we adjust the search and deliver replacement leads.'
            },
            {
              question: 'Can I test first?',
              answer: 'Yes! Our Test package with 20 leads for €39 is perfect for getting started. You can upgrade to the Growth package anytime.'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Transparent Pricing Without Subscriptions',
      subtitle: 'One-time packages – pay only for what you need',
      packages: [
        {
          name: 'Test',
          duration: '20 Leads',
          price: '€39',
          pricePerLead: '€1.95/lead',
          features: [
            '20 verified B2B contacts',
            'Brief ICP alignment',
            'GDPR documentation',
            'Excel/CSV export',
            'Email support'
          ],
          bestFor: 'Testing & Getting Started',
          cta: 'Request Test Package',
          highlighted: false
        },
        {
          name: 'Growth',
          duration: '500 Leads',
          price: '€745',
          pricePerLead: '€1.49/lead',
          savings: '23% cheaper',
          features: [
            '500 verified B2B contacts',
            'Detailed ICP consulting',
            'GDPR documentation',
            'Excel/CSV export',
            'Priority support',
            '1 iteration included'
          ],
          bestFor: 'Campaigns & Scaling',
          cta: 'Request Growth Package',
          highlighted: true
        },
        {
          name: 'Scale',
          duration: '1,000 Leads',
          price: '€1,290',
          pricePerLead: '€1.29/lead',
          savings: '34% cheaper',
          features: [
            '1,000 verified B2B contacts',
            'Premium ICP workshop',
            'GDPR documentation',
            'Excel/CSV export',
            'Dedicated contact person',
            'Weekly iteration',
            'Signal-based filtering'
          ],
          bestFor: 'Maximum Scaling',
          cta: 'Request Scale Package',
          highlighted: false
        }
      ],
      bestForLabel: 'Best for:',
      popularBadge: 'Recommended',
      paymentNote: 'One-time payment upfront. No hidden costs, no subscription.'
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
