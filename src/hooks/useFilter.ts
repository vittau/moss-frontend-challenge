import { ChangeEvent, useState } from 'react';
import { ITunes } from '../model/iTunes';
import { toSearchableText } from '../utils/string';

type UseFilterReturnType = [ITunes[], (event: ChangeEvent<HTMLInputElement>) => void];

/**
 * Receives ITunes data and returns the filtered data and a filtering handler function for inputs
 * @param data Original ITunes data
 * @returns Filtered data and the filtering handler function
 */
export const useFilter = (data: ITunes[]): UseFilterReturnType => {
  // Holds the currently filtered data
  const [currentFilteredData, setCurrentFilteredData] = useState(data);

  // Handler function for the filtering input
  const filterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = toSearchableText(event.target.value ?? '');

    // Filters albums by album, artist or genre
    const filterFunction = (album: ITunes) => {
      const { name, artist, genre } = album;
      const searchableTerms = [toSearchableText(name), toSearchableText(artist), toSearchableText(genre)];
      return searchableTerms.find((term) => term.includes(searchTerm));
    };

    if (searchTerm.length > 0) {
      setCurrentFilteredData(data.filter(filterFunction));
    } else {
      setCurrentFilteredData(data);
    }
  };

  return [currentFilteredData, filterHandler];
};
