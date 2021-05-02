import _ from 'lodash';

export const toSearchableText = (text: string) => {
  const trimmed = _.trim(text);
  const deburred = _.deburr(trimmed);
  const lowerCase = _.toLower(deburred);
  return lowerCase;
};
