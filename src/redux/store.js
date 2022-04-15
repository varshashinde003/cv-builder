import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import reducers from "./reducers";

const persistConfig = {
  key: "builder",
  storage,
  whitelist: ["resume"],
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const persistedReducer = persistReducer(persistConfig, reducers);

const configureStore = () => {
  let store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);
  return { store, persistor };
};
export default configureStore;
