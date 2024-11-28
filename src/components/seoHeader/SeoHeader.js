import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  if (!seo) {
    return null;
  }

  let sameAs = [];
  if (socialMediaLinks) {
    socialMediaLinks
      .filter(
        (media) =>
          !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
      )
      .forEach((media) => {
        sameAs.push(media.link);
      });
  }

  let mail = socialMediaLinks
    ?.find((media) => media.link.startsWith("mailto"))
    ?.link?.substring("mailto:".length);
  let job = experience?.sections?.find((section) => section.experiences)
    ?.experiences?.[0];

  let credentials = [];
  if (certifications?.certifications) {
    certifications.certifications.forEach((certification) => {
      if (certification.certificate_link) {
        credentials.push({
          "@context": "https://schema.org",
          "@type": "EducationalOccupationalCredential",
          url: certification.certificate_link,
          name: certification.title,
          description: certification.subtitle,
        });
      }
    });
  }

  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting?.title,
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData?.phoneSection?.subtitle,
    sameAs: sameAs,
    ...(job && {
      jobTitle: job.title,
      worksFor: {
        "@type": "Organization",
        name: job.company,
      },
    }),
    ...(contactPageData?.addressSection && {
      address: {
        "@type": "PostalAddress",
        addressLocality: contactPageData.addressSection.locality,
        addressRegion: contactPageData.addressSection.region,
        addressCountry: contactPageData.addressSection.country,
        postalCode: contactPageData.addressSection.postalCode,
        streetAddress: contactPageData.addressSection.streetAddress,
      },
    }),
    ...(credentials.length > 0 && { hasCredential: credentials }),
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
