import axios from 'axios';
import { DateTime } from 'luxon';
import { ThunkAction } from 'redux-thunk';
import { ITunes } from '../../model/iTunes';
import { Entry, ITunesResponse } from '../../model/iTunesResponse';

const ITUNES_TOP100_ALBUMS_ENDPOINT = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

// Action Types

export enum Types {
  ALBUMS_TOP100_FETCH_START = 'iTunes/Albums/Top100/FETCH_START',
  ALBUMS_TOP100_FETCH_SUCCESS = 'iTunes/Albums/Top100/FETCH_SUCCESS',
  ALBUMS_TOP100_FETCH_FAIL = 'iTunes/Albums/Top100/FETCH_FAIL',
}

interface ITunesActions {
  type: Types;
  payload?: ITunes[];
}

interface State {
  loading: boolean;
  error: boolean;
  feed: ITunes[] | null;
}

// Reducer

const initialState: State = { loading: false, feed: null, error: false };

export default function reducer(state = initialState, action: ITunesActions): State {
  const { type, payload } = action;
  switch (type) {
    case Types.ALBUMS_TOP100_FETCH_START:
      return { loading: true, feed: null, error: false };
    case Types.ALBUMS_TOP100_FETCH_SUCCESS:
      return { loading: false, feed: payload || null, error: false };
    case Types.ALBUMS_TOP100_FETCH_FAIL:
      return { loading: false, feed: null, error: true };
    default:
      return state;
  }
}

// Action Creators

// https://redux.js.org/recipes/usage-with-typescript/#type-checking-redux-thunks
type ITunesThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, ITunesActions>;

export function fetchAlbums(): ITunesThunk {
  return async (dispatch) => {
    dispatch({ type: Types.ALBUMS_TOP100_FETCH_START });
    try {
      const { data } = await axios.get<ITunesResponse>(ITUNES_TOP100_ALBUMS_ENDPOINT);
      // const data = mockAlbums;
      const processed = mapITunesResponseEntriesToITunes(data.feed.entry);

      dispatch({ type: Types.ALBUMS_TOP100_FETCH_SUCCESS, payload: processed });
    } catch (error) {
      dispatch({ type: Types.ALBUMS_TOP100_FETCH_FAIL });
    }
  };
}

const mapITunesResponseEntriesToITunes = (entry: Entry[]): ITunes[] =>
  entry.map((e, index) => {
    const {
      'im:artist': { label: artist },
      'im:name': { label: name },
      'im:image': imageArray,
      'im:price': { label: price },
      'im:releaseDate': { label: releaseDateStr },
      link: {
        attributes: { href: link },
      },
      category: {
        attributes: { label: genre },
      },
    } = e;

    const imageURL = imageArray[imageArray.length - 1].label;

    return {
      rank: index + 1,
      artist,
      name,
      image: imageURL,
      price,
      releaseDate: DateTime.fromISO(releaseDateStr).toLocaleString(),
      genre,
      link,
    };
  });
