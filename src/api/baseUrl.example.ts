/* remove the .example of this file */
export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === 'production') return 'your web API url';
  if ('some way to test'.concat('') === 'something') return 'your local API url';
  return '';
};
