export const HISTORY_QUERY = `*[ _type == "history" && isActive == true]{
   id,
   title,
   content,
   schools[]->{
     title,
     content
 },
 headerBackgroundColor{
     hex
  },
  headerTextColor{
    hex
  }
}`;
