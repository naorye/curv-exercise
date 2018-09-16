import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect, actions } from '../store';
import * as selectors from '../selectors';
import Header from './header';
import TransactionsList from './transactions-list';
import TransactionDialog from './transaction-dialog';

function App(props) {
    const { transactions, isTransactionDialogOpen, selectedTransaction } = props;
    return (
        <Fragment>
            <Header />
            <main>
                <TransactionsList
                    transactions={ transactions }
                    fetchTransactions={ actions.fetchTransactions }
                    openTransactionDialog={ actions.openTransactionDialog }
                />
            </main>
            <TransactionDialog
                isOpen={ isTransactionDialogOpen }
                transaction={ selectedTransaction }
                onClose={ actions.closeTransactionDialog }
            />
        </Fragment>
    );
}

App.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object),
    isTransactionDialogOpen: PropTypes.bool,
    selectedTransaction: PropTypes.object,
};

App.defaultProps = {
    transactions: [],
    isTransactionDialogOpen: false,
    selectedTransaction: undefined,
};

export default connect(state => ({
    isTransactionDialogOpen: selectors.isTransactionDialogOpen(state),
    transactions: selectors.getTransactions(state),
    selectedTransaction: selectors.getSelectedTransaction(state),
}))(App);
