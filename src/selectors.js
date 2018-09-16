import { createSelector } from 'reselect';

export const isTransactionDialogOpen = state => Boolean(state.selectedTransactionId);
export const getSelectedTransactionId = state => state.selectedTransactionId;
export const getTransactions = state => state.transactions;
export const getSelectedTransaction = createSelector(
    getTransactions,
    getSelectedTransactionId,
    (transactions, selectedTransactionId) => transactions
        .find(transaction => transaction.id === selectedTransactionId),
);
