import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../assets/logo.png';

function Header(props) {
    const { classes } = props;
    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Toolbar>
                    <img src={ logo } className={ classes.logo } alt="logo" />
                    <Button className={ classes.home } color="inherit">Home</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object,
};

Header.defaultProps = {
    classes: {},
};

export default withStyles({
    logo: {
        height: 32,
    },
    home: {
        marginLeft: 'auto',
    },
})(Header);
