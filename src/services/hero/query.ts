export const HERO_QUERY = `*[_type == "hero"]{
  title,
  description,
  "logo": logo.asset->{
    url,
    title,
    altText
  },
  "backgroundImage": backgroundImage.asset->{
    url,
    title,
    altText
  }
}`;
