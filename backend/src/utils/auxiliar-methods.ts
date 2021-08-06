export function createSlug(name: string) {
  return name.toLowerCase().replace(/ /g, "-");
}
