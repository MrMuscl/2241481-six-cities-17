import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { createAPI } from '../services/services';

const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

export default store;
export {api};
