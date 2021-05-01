import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

// https://react-redux.js.org/using-react-redux/usage-with-typescript

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
