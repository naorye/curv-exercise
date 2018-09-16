import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Approval from './approval';

function getDecisionText(approver) {
    switch (approver.decision) {
        case 'pending': return 'Pending decision';
        case 'approved': return `Approved ${approver.decidedAt.fromNow()}`;
        case 'rejected': return `Rejected ${approver.decidedAt.fromNow()}`;
        case 'ignored': return `Ignored ${approver.decidedAt.fromNow()}`;
        default: return 'Unknown';
    }
}

function UserApproval(props) {
    const { approver, classes } = props;

    return (
        <Approval
            classes={ { root: classes.root } }
            decision={ approver.decision }
            decisionText={ getDecisionText(approver) }
            approverName={ approver.name }
            renderAvatar={ style => <Avatar style={ style }>{ approver.name[0] }</Avatar> }
        />
    );
}

UserApproval.propTypes = {
    approver: PropTypes.shape({
        name: PropTypes.string.isRequired,
        decision: PropTypes.oneOf([
            'pending',
            'approved',
            'rejected',
            'ignored',
        ]),
    }).isRequired,
    classes: PropTypes.object,
};

UserApproval.defaultProps = {
    classes: {},
};

export default UserApproval;
