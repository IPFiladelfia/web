export const Boolean = (value: any) => {
  if (Array.isArray(value)) return !!value.length;
  return !!value;
};
