const isNonEmpty = value => value !== '';
const isNumber = value => !Number.isNaN(value);
const isValidLength = (value, size) => value.length === size;
const isPositiveNumber = number => number > 0 && Number.isInteger(number);
const isDuplicate = (value, items) => {
  if (items.length == 0) return false;
  return items.find(name => value === name);
};

const hasSpace = value => removeSpace(value).length !== value.length;
const removeSpace = text => text.replace(/ /gi, '');

export const isValidCrew = name => {
  if (!isNonEmpty(name)) return alert(ERROR_MSG.enterCharge);

  return true;
};
