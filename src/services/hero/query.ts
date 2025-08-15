export const HERO_QUERY = `*[_type == "hero"]{
  title,
  description,
  "logo": logo.asset->{
    url,
  }
}`;
