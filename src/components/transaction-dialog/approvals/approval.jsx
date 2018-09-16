import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline';
import { stringToColor } from '../../../utils';

function getDecisionIcon(decision) {
    return {
        pending: ScheduleIcon,
        approved: DoneIcon,
        rejected: BlockIcon,
        ignored: RemoveIcon,
    }[decision];
}

function Approval(props) {
    const {
        decision, decisionText, approverName, renderAvatar, icon, onClick, classes,
    } = props;

    const AvatarBadge = getDecisionIcon(decision);
    return (
        <ListItem button onClick={ onClick } classes={ { root: classes.root } }>
            <div className={ classes.avatarWrapper }>
                { renderAvatar({ backgroundColor: stringToColor(approverName) }) }
                <AvatarBadge className={ classnames(classes.avatarBadge, decision) } />
            </div>
            <ListItemText primary={ approverName } secondary={ decisionText } />
            { icon }
        </ListItem>
    );
}

Approval.propTypes = {
    decision: PropTypes.oneOf([
        'pending',
        'approved',
        'rejected',
        'ignored',
    ]),
    decisionText: PropTypes.string,
    approverName: PropTypes.string,
    renderAvatar: PropTypes.func,
    icon: PropTypes.element,
    onClick: PropTypes.func,
    classes: PropTypes.object,
};

Approval.defaultProps = {
    decision: 'pending',
    decisionText: undefined,
    approverName: 'Someone',
    renderAvatar: () => null,
    icon: null,
    onClick: () => undefined,
    classes: {},
};

export default withStyles(theme => ({
    root: {},
    avatarWrapper: {
        position: 'relative',
        color: theme.palette.common.white,
    },
    avatarBadge: {
        borderRadius: '50%',
        border: `3px solid ${theme.palette.common.white}`,
        position: 'absolute',
        bottom: -5,
        right: -10,
        '&.pending': {
            backgroundColor: '#508ef5',
        },
        '&.approved': {
            backgroundColor: '#53c261',
        },
        '&.rejected': {
            backgroundColor: '#e95249',
        },
        '&.ignored': {
            backgroundColor: '#aaaaaa',
        },
    },
}))(Approval);
