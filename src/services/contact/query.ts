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
  contactName,
  "contactEmailImage": contactEmailImage.asset->{
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
  contactEmail,
  "contactPhoneImage": contactPhoneImage.asset->{
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
  contactPhone,
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
