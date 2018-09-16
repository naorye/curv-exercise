import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import GroupIcon from '@material-ui/icons/Group';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Approval from './approval';
import Approvals from './approvals';

function getDecisionText(approver) {
    switch (approver.decision) {
        case 'pending': return 'Pending decision';
        case 'approved': return `Approved by ${approver.approvedMembers.length} of ${approver.members.length}`;
        case 'rejected': return `Rejected by ${approver.rejectedMembers.join(', ')}`;
        default: return 'Unknown';
    }
}

class GroupApproval extends Component {
    static propTypes = {
        approver: PropTypes.shape({
            name: PropTypes.string.isRequired,
            decision: PropTypes.oneOf([
                'pending',
                'approved',
                'rejected',
            ]),
        }).isRequired,
        classes: PropTypes.object,
    };

    static defaultProps = {
        classes: {},
    };

    state = { isExpanded: false };

    toggle = () => {
        const { isExpanded } = this.state;
        this.setState({ isExpanded: !isExpanded });
    }

    render() {
        const { approver, classes } = this.props;
        const { isExpanded } = this.state;

        return (
            <Fragment>
                <Approval
                    classes={ { root: classes.root } }
                    decision={ approver.decision }
                    decisionText={ getDecisionText(approver) }
                    approverName={ approver.name }
                    renderAvatar={ style => <Avatar style={ style }><GroupIcon /></Avatar> }
                    icon={ isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                    onClick={ this.toggle }
                />
                <Collapse in={ isExpanded } timeout="auto" unmountOnExit>
                    <Approvals
                        approvers={ approver.members }
                        classes={ { item: classes.memberItem } }
                    />
                </Collapse>
            </Fragment>
        );
    }
}

export default withStyles(theme => ({
    root: {},
    memberItem: {
        paddingLeft: theme.spacing.unit * 6,
    },
}))(GroupApproval);
