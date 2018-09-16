import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TransactionDialogHeader from './header';
import Approvals from './approvals';

function TransactionDialog(props) {
    const {
        isOpen, transaction, onClose, classes,
    } = props;
    return (
        <Modal
            open={ isOpen }
            onClose={ onClose }
        >
            <Card className={ classes.card }>
                <TransactionDialogHeader
                    transactionId={ transaction.id }
                    onClose={ onClose }
                />

                <CardContent classes={ { root: classes.content } }>
                    <Typography variant="caption" gutterBottom align="left" className={ classes.caption }>
                        Approvers
                    </Typography>
                    <Approvals approvers={ transaction.approvers } />
                </CardContent>
            </Card>
        </Modal>
    );
}

TransactionDialog.propTypes = {
    transaction: PropTypes.object,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    classes: PropTypes.object,
};

TransactionDialog.defaultProps = {
    transaction: { approvers: [] },
    isOpen: false,
    onClose: () => undefined,
    classes: {},
};

export default withStyles(theme => ({
    card: {
        outline: 'none',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        width: 658,
    },
    content: {
        '&, &:last-child': {
            padding: 0,
        },
    },
    caption: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 3,
    },
}))(TransactionDialog);
