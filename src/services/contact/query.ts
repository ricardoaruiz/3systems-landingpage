export const CONTACT_QUERY = `*[_type == "contact"]{
  id,
  disclamer,
  disclamerBackgroundColor{
    hex
  },       
  disclamerTextColor {
    hex
  },    
  "leftImage": leftImage.asset->{
    url,
    title,
    altText,
    metadata {
      dimensions {
        width,
        height
      }
    }
  },
  contactCompanyName,
  contactCompanyNameLinkedinHref,
  contactName,
  contactNameLinkedinHref,
  contactEmail,
  contactEmailHref,
  contactPhone,
  contactPhoneHref,
  "rightImage": rightImage.asset->{
    url,
    title,
    altText,
    metadata {
      dimensions {
        width,
        height
      }
    }
  },
}`;
