export const SECTIONS_QUERY = `*[_type == "section" && isActive == true] | order(order asc){
  id,
  "slug": slug.current,
  subject,
  description,
  color {
      hex
  },
  textColor {
      hex
  },
  "cards": cards[]->{
    "slug": title,
    subject,
    description,
    hideBorderMobile,
    hideBorderDesktop
  },
  "sideContent": sideContent->{
    "image": image.asset->{
      url,
      title,
      altText
    },
    description
  }
}`;
