import { createSlice } from '@reduxjs/toolkit';



const storageData =  {transactions: []}

const initialState = {
    transactions: storageData
}

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers : {
        setTransaction: (state, action) => {
          if (!state.transactions?.length) {
            return {
              transactions: [action.payload]
            };
          }
          return {transactions: [...state.transactions, action.payload]}

          },
        removeTransaction: (state, action) => {
          const newTransactions = state.transactions.filter((tx)=>{ return tx.id !== parseFloat(action.payload) } )
          if (newTransactions.length) {
            return {transactions: [...newTransactions]}

          } else {
            return {transactions: []}
          }
        },
        setTransactionFromLocalStorage: (state, action) => {
          return {transactions: action.payload}
        }
    }
})

export const { setTransaction, removeTransaction, setTransactionFromLocalStorage } = expenseSlice.actions; 
export default expenseSlice.reducer;
