export const insertSpaceAt = (string, position) => {
  return string.slice(0, position) + " " + string.slice(position);
}
