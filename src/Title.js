import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

export default function Title(props) {
    return (
        <Typography component="h2" align="left" variant="h2" color= "#081C3D" gutterBottom>
            {props.children}
        </Typography>
    );
}

Title.propTypes = {
    children: PropTypes.node,
};