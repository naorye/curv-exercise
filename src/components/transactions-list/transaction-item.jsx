import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import Moment from 'moment';
import TransactionInfo from './transaction-info';

class TransactionItem extends Component {
    onTransactionClick = () => {
        const { transaction, onTransactionClick } = this.props;
        onTransactionClick(transaction.id);
    }

    render() {
        const { transaction, classes } = this.props;
        return (
            <Fragment>
                <Button
                    className={ classes.transactionButton }
                    variant="outlined"
                    color="primary"
                    onClick={ this.onTransactionClick }
                >
                    { `Transaction ${transaction.id}` }
                    <SendIcon className={ classes.sendIcon } />
                </Button>

                <TransactionInfo
                    transaction={ transaction }
                    classes={ { infoIcon: classes.infoIcon } }
                />
            </Fragment>
        );
    }
}

TransactionItem.propTypes = {
    transaction: PropTypes.shape({
        id: PropTypes.string.isRequired,
        createdAt: PropTypes.instanceOf(Moment).isRequired,
        status: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired,
        fiatAmount: PropTypes.number.isRequired,
        fiatCurrency: PropTypes.string.isRequired,
        cryptoAmount: PropTypes.number.isRequired,
        cryptoCurrency: PropTypes.string.isRequired,
    }),
    onTransactionClick: PropTypes.func,
    classes: PropTypes.object,
};

TransactionItem.defaultProps = {
    transaction: [],
    onTransactionClick: () => undefined,
    classes: {},
};

export default withStyles(theme => ({
    transactionButton: {},
    sendIcon: {
        marginLeft: theme.spacing.unit,
    },
    infoIcon: {
        marginLeft: theme.spacing.unit,
    },
}))(TransactionItem);
