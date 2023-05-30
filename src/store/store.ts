import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer/rootReducer";
import createFilter from "redux-persist-transform-filter";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const devTools =
  process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

const loginFilter = createFilter("login", ["isLoggedIn", "user"]);
const signupFilter = createFilter("signup", ["user"]);
const persistConfig = {
  key: "sftAuth",
  storage,
  whitelist: ["login", "signup"],
  transforms: [loginFilter, signupFilter],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);
export { store, persistor };
export type AppDispatch = typeof store.dispatch;
