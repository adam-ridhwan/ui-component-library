export function convertToTitleCase(input: string): string {
  const words = input.split('-');
  const titleCasedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return titleCasedWords.join(' ');
}
