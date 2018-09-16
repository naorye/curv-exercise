import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import Moment from 'moment';

class TransactionInfo extends Component {
    state = {
        anchor: undefined,
    };

    openInfo = (event) => {
        this.setState({
            anchor: event.currentTarget,
        });
    };

    closeInfo = () => {
        this.setState({
            anchor: undefined,
        });
    };

    render() {
        const { transaction, classes } = this.props;
        const { anchor } = this.state;

        return (
            <Fragment>
                <InfoIcon
                    className={ classes.infoIcon }
                    onMouseEnter={ this.openInfo }
                    onMouseLeave={ this.closeInfo }
                />
                <Popover
                    className={ classes.popover }
                    open={ Boolean(anchor) }
                    anchorEl={ anchor }
                    anchorOrigin={ {
                        vertical: 'top',
                        horizontal: 'right',
                    } }
                    transformOrigin={ {
                        vertical: 'top',
                        horizontal: 'left',
                    } }
                >
                    <dl className={ classes.properties }>
                        <dt>Created At</dt>
                        <dd>{ transaction.createdAt.toString() }</dd>

                        <dt>Status</dt>
                        <dd>{ transaction.status }</dd>

                        <dt>Note</dt>
                        <dd>{ transaction.note }</dd>

                        <dt>Fiat Amount</dt>
                        <dd>{ `${transaction.fiatAmount} ${transaction.fiatCurrency}` }</dd>

                        <dt>Crypto Amount</dt>
                        <dd>{ `${transaction.cryptoAmount} ${transaction.cryptoCurrency}` }</dd>
                    </dl>
                </Popover>
            </Fragment>
        );
    }
}

TransactionInfo.propTypes = {
    transaction: PropTypes.shape({
        createdAt: PropTypes.instanceOf(Moment).isRequired,
        status: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired,
        fiatAmount: PropTypes.number.isRequired,
        fiatCurrency: PropTypes.string.isRequired,
        cryptoAmount: PropTypes.number.isRequired,
        cryptoCurrency: PropTypes.string.isRequired,
    }).isRequired,
    classes: PropTypes.object,
};

TransactionInfo.defaultProps = {
    classes: {},
};

export default withStyles(theme => ({
    infoIcon: {
        cursor: 'pointer',
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        fill: theme.palette.action.selected,
        '&:hover': {
            fill: theme.palette.action.active,
        },
    },
    popover: {
        pointerEvents: 'none',
        transform: `translateX(${theme.spacing.unit}px)`,
    },
    properties: {
        padding: '0 20px',
        '& dt': {
            padding: 5,
            fontWeight: 'bold',
            '&:not(first-child)': {
                marginTop: 15,
            },
        },
        '& dd': {

        },
    },
}))(TransactionInfo);
