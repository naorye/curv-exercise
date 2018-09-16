import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import TransactionItem from './transaction-item';

class TransactionsList extends Component {
    componentDidMount() {
        const { fetchTransactions } = this.props;
        fetchTransactions();
    }

    render() {
        const { transactions, openTransactionDialog, classes } = this.props;
        return (
            <List className={ classes.list }>
                {
                    transactions.map(transaction => (
                        <ListItem key={ transaction.id } dense>
                            <TransactionItem
                                transaction={ transaction }
                                onTransactionClick={ openTransactionDialog }
                                classes={ {
                                    transactionButton: classes.transactionButton,
                                    sendIcon: classes.sendIcon,
                                } }
                            />
                        </ListItem>
                    ))
                }
            </List>
        );
    }
}

TransactionsList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object),
    fetchTransactions: PropTypes.func,
    openTransactionDialog: PropTypes.func,
    classes: PropTypes.object,
};

TransactionsList.defaultProps = {
    transactions: [],
    fetchTransactions: () => undefined,
    openTransactionDialog: () => undefined,
    classes: {},
};

export default withStyles(({
    list: {
        width: 310,
    },
    transactionButton: {
        flexGrow: 1,
    },
    sendIcon: {
        marginLeft: 'auto',
    },
}))(TransactionsList);
