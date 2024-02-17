import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';

import favlist from './slices/favlist';
import watchlist from './slices/watchlist';
import { api } from '../api-client';

const reducers = combineReducers({
  favlist,
  watchlist,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favlist', 'api', 'watchlist'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware as Middleware);

    return middlewares;
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
