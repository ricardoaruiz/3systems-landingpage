export const MENU_QUERY = `[
  *[_type == "history" && isActive == true]{
    "label": menu,
    "href": id,
    "order": order
  },
  *[_type == "section" && isActive == true]{
    "label": menu,
    "href": id,
    "order": order
  },
  *[_type == "contact" && isActive == true]{
    "label": menu,
    "href": id,
    "order": order
  }
]`;
