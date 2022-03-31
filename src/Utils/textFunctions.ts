export const limitText = (text: string, charCount: number) => {
  if (charCount > text.length || charCount <= 5) return text;
  const limiter = charCount - 3;
  const limitedText = text.substring(0, limiter);
  if (limitedText.endsWith('.')) return limitedText.concat('..');
  return limitedText.concat('...');
};
