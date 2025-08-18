export const CALL_TO_ACTION_QUERY = `*[_type == "callToAction"]{
  id,
  mainText,
  "mainImage": mainImage.asset->{
    url,
    title,
    altText
  },
  "backgroundImage": backgroundImage.asset->{
    url,
    title,
    altText
  },     
  color {
    hex
  },    
  textColor {
    hex
  }
}`;
