import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import factReducer from "./fact-reducer";
import postReducer from "./post-reducer";

const persistFactStoreConfig = {
  key: "fact",
  storage,
};

const rootReducer = combineReducers({
  fact: persistReducer(persistFactStoreConfig, factReducer),
  post: postReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
