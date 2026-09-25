export default function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()                     // Trim spaces after non-words are removed
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "");   // Remove leading/trailing hyphens
}


/*export default function slugify(
  value: string,
) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}*/