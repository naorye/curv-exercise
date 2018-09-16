import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import btcBackground from '../../assets/btc.jpg';

function TransactionDialogHeader(props) {
    const {
        transactionId, onClose, classes,
    } = props;
    return (
        <CardHeader
            className={ classes.header }
            action={ (
                <IconButton onClick={ onClose }>
                    <CloseIcon className={ classes.closeIcon } />
                </IconButton>
            ) }
            title={ (
                <Fragment>
                    <CardMedia
                        className={ classes.headerBackground }
                        image={ btcBackground }
                        title={ `Transaction ${transactionId} Dialog` }
                    />
                    <Typography variant="title" component="h2" className={ classes.title }>
                        { `Transaction #${transactionId}` }
                    </Typography>
                </Fragment>
            ) }
        />
    );
}

TransactionDialogHeader.propTypes = {
    transactionId: PropTypes.string,
    onClose: PropTypes.func,
    classes: PropTypes.object,
};

TransactionDialogHeader.defaultProps = {
    transactionId: undefined,
    onClose: () => undefined,
    classes: {},
};

export default withStyles(theme => ({
    header: {
        position: 'relative',
        height: 155,
    },
    closeIcon: {
        fill: theme.palette.common.white,
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundSize: 380,
        backgroundColor: '#195e8d',
    },
    title: {
        position: 'absolute',
        bottom: theme.spacing.unit * 3,
        left: theme.spacing.unit * 3,
        color: theme.palette.common.white,
    },
}))(TransactionDialogHeader);
