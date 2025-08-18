export const MENU_QUERY = `*[_type == "section"] | order(order asc){
  "label": menu,
  "href": id
}`;
