export const convertToURL = (string: string) => {
  return '/' + string.toLowerCase().replace(' ', '-');
};
