import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import GroupApproval from './group-approval';
import UserApproval from './user-approval';

const approvalFactory = type => ({
    group: GroupApproval,
    user: UserApproval,
})[type];

function Approvals(props) {
    const { approvers, classes } = props;

    return (
        <List disablePadding>
            {
                approvers.map((approver) => {
                    const CustomApproval = approvalFactory(approver.type);
                    return (
                        <CustomApproval
                            classes={ { root: classes.item } }
                            key={ approver.id }
                            approver={ approver }
                        />
                    );
                })
            }
        </List>
    );
}

Approvals.propTypes = {
    approvers: PropTypes.arrayOf(PropTypes.object),
    classes: PropTypes.object,
};

Approvals.defaultProps = {
    approvers: [],
    classes: {},
};

export default withStyles(({
    item: {},
}))(Approvals);
