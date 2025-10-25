const SchemaMarkup = () => {
  const siteUrl = (import.meta as any)?.env?.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://ipmtti.co.ke');

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IPMTTI",
    "url": siteUrl
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }
    ]
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "IPMTTI Training Programs",
    "description": "Technical and vocational courses offered by IPMTTI",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "Heavy Plant Operation Training",
        "description": "Comprehensive training in operating heavy machinery including excavators, bulldozers, cranes, and more.",
        "provider": {
          "@type": "Organization",
          "name": "IPMTTI"
        },
        "courseMode": "onsite",
        "timeRequired": "P3M",
        "occupationalCategory": "Heavy Equipment Operator",
        "educationalCredentialAwarded": "Certificate in Heavy Plant Operation"
      },
      {
        "@type": "Course",
        "name": "Automotive Mechanics",
        "description": "Professional training in automotive repair, maintenance, and diagnostics.",
        "provider": {
          "@type": "Organization",
          "name": "IPMTTI"
        },
        "courseMode": "onsite",
        "timeRequired": "P6M",
        "occupationalCategory": "Automotive Technician",
        "educationalCredentialAwarded": "Certificate in Automotive Mechanics"
      },
      {
        "@type": "Course",
        "name": "ICT & Computing",
        "description": "Essential computer skills and technology training for the digital workplace.",
        "provider": {
          "@type": "Organization",
          "name": "IPMTTI"
        },
        "courseMode": "onsite",
        "timeRequired": "P4M",
        "occupationalCategory": "Computer Technician",
        "educationalCredentialAwarded": "Certificate in ICT"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What courses does IPMTTI offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IPMTTI offers comprehensive technical training in Heavy Plant Operation, Automotive Mechanics, ICT & Computing, Welding, Plumbing, and Electrical Systems."
        }
      },
      {
        "@type": "Question",
        "name": "How long are the courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Course duration varies from 3-12 months depending on the program. Short courses like driving take 3 months, while comprehensive programs can take up to 12 months."
        }
      },
      {
        "@type": "Question",
        "name": "Are IPMTTI certificates recognized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, IPMTTI is accredited by NITA (National Industrial Training Authority) and the Ministry of Education. Our certificates are recognized industry-wide in Kenya and East Africa."
        }
      },
      {
        "@type": "Question",
        "name": "What is the job placement rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IPMTTI has a 98% job placement rate. We have strong industry partnerships and provide job placement support to all graduates."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;