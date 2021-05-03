import _ from 'lodash';

export const toSearchableText = (text: string) => {
  const trimmed = _.trim(text);
  const deburred = _.deburr(trimmed);
  const lowerCase = _.toLower(deburred);
  return lowerCase;
};

export const nth = (n: number) => ['st', 'nd', 'rd'][(((((n < 0 ? -n : n) + 90) % 100) - 10) % 10) - 1] || 'th';
