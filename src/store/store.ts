import { PersistPartial } from "redux-persist/es/persistReducer";
import { UserState } from "./../models";
import { createStore, applyMiddleware, Store } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["tweets"],
};

const middlewares = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<UserState & PersistPartial, any> = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
