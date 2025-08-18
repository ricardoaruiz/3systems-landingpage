export const SECTIONS_QUERY = `*[_type == "section"]{
  id,
  "slug": tite,
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
      url
    },
    description
  }
}`;
