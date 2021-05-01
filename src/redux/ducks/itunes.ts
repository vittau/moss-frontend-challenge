import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Feed, ITunesResponse } from '../../model/iTunes';

const ITUNES_TOP100_ALBUMS_ENDPOINT = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

// Action Types

export enum Types {
  ALBUMS_TOP100_FETCH_START = 'iTunes/Albums/Top100/FETCH_START',
  ALBUMS_TOP100_FETCH_SUCCESS = 'iTunes/Albums/Top100/FETCH_SUCCESS',
  ALBUMS_TOP100_FETCH_FAIL = 'iTunes/Albums/Top100/FETCH_FAIL',
}

interface ITunesActions {
  type: Types;
  payload?: ITunesResponse;
}

// Reducer

interface State {
  loading: boolean;
  error: boolean;
  feed: Feed | null;
}

const initialState: State = { loading: false, feed: null, error: false };

export default function reducer(state = initialState, action: ITunesActions): State {
  const { type, payload } = action;
  switch (type) {
    case Types.ALBUMS_TOP100_FETCH_START:
      return { loading: true, feed: null, error: false };
    case Types.ALBUMS_TOP100_FETCH_SUCCESS:
      return { loading: false, feed: payload?.feed || null, error: false };
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
      dispatch({ type: Types.ALBUMS_TOP100_FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: Types.ALBUMS_TOP100_FETCH_FAIL });
    }
  };
}
