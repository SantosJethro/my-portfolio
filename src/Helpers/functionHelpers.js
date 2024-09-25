export const isValueValid = (value, otherInvalids = {}) => {
  return !['', 'null', 'undefined', undefined, null, otherInvalids].includes(value);
};