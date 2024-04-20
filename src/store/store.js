import sliceReducer from './reducer'
import {configureStore} from '@reduxjs/toolkit'


const saveStateMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('transactions', JSON.stringify(store.getState().transactions.transactions));
    return result;
  };


  
// Create store with middleware.
// const storageData = localStorage.getItem('transactions')
const preloadedState = { transactions: [] }

// const preloadedState = storageData ? JSON.parse(storageData) :   [] 
// const preloadedState = storageData ? JSON.parse(storageData) : { transactions: [] }

export const store = configureStore({
  reducer: { transactions: sliceReducer },
  transactions: preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveStateMiddleware)
});


