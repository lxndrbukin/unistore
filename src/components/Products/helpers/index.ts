export const urlCategory = (pathname: string): string => {
  const pathArr = pathname.split('/');
  pathArr.shift();
  if (pathArr.length > 1) return pathArr[pathArr.length - 1];
  return '';
};
