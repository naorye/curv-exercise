import createStore from 'react-waterfall';
import transactionsMock from './mock/transactions';

function parseTransactions(transactions) {
    return transactions.map((transaction) => {
        const { approvers } = transaction;
        approvers
            .filter(approver => approver.type === 'group')
            .forEach((approver) => {
                const { members } = approver;
                const rejectedMembers = members
                    .filter(member => member.decision === 'rejected')
                    .map(member => member.name);

                /* eslint-disable no-param-reassign */
                if (rejectedMembers.length > 0) {
                    approver.decision = 'rejected';
                    approver.rejectedMembers = rejectedMembers;
                } else {
                    const isPending = members.some(member => member.decision === 'pending');
                    if (isPending) {
                        approver.decision = 'pending';
                    } else {
                        const approvedMembers = members
                            .filter(member => member.decision === 'approved')
                            .map(member => member.name);
                        // All decisions should be 'approved' or 'ignored'
                        if (approvedMembers.length >= 2) {
                            approver.decision = 'approved';
                            approver.approvedMembers = approvedMembers;
                        } else {
                            approver.decision = 'pending';
                        }
                    }
                }
                /* eslint-enable no-param-reassign */
            });

        return transaction;
    });
}

const config = {
    initialState: {
        transactions: [],
        selectedTransactionId: undefined,
    },
    actionsCreators: {
        fetchTransactions:
            (state) => {
                const transactions = transactionsMock; // Async fetch here to get transactions
                const parsedTransactions = parseTransactions(transactions);
                return { ...state, transactions: parsedTransactions };
            },

        openTransactionDialog:
            (state, actions, transactionId) => ({
                ...state,
                selectedTransactionId: transactionId,
            }),

        closeTransactionDialog:
            state => ({ ...state, selectedTransactionId: undefined }),
    },
};

export const { Provider, connect, actions } = createStore(config);
