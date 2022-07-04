import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import createSagaMiddleware from 'redux-saga';
import auth from "./auth";
import { all } from 'redux-saga/effects';
import core from './core';

export const rootReducer = combineReducers<any>({
  auth: auth.reducer,
  core: core.reducer
});

export function* rootSaga () {
  yield all([
    ...auth.saga,
  ]);
}

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: [],
    // stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };
   const sagaMiddleware = createSagaMiddleware({
    onError: () => {
      // Pass. Error will be catch in done.catch
    },
  });
  const middleware = [
    sagaMiddleware,
  ];

const pReducer = persistReducer(persistConfig, rootReducer);
const configureStore = (initialState: any) => {
    const store = createStore(
        pReducer, 
        initialState,
        applyMiddleware(...middleware),
        );
        sagaMiddleware
        .run(rootSaga);
    const persistor = persistStore(store);
    return { persistor, store };
}
export default configureStore;