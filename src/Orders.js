import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, datetime, client, url, state) {
    return { id, datetime, client, url, state };
}

const rows = [
    createData(0, '16 Mar, 2019', 'RBC', 'http://rBc/phish', 0),
    createData(1, '16 Mar, 2019', 'RBC', 'http://rbC/phishing', 1),
    createData(2, '16 Mar, 2019', 'BMO', 'http://bm0/phish', 0),
    createData(3, '16 Mar, 2019', 'ScotiaBank', 'http://scot1abank/phish', 1),
    createData(4, '15 Mar, 2019', 'RBC', 'http://RBCBank/phish', 1),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Incidents</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Incident ID</TableCell>
                        <TableCell>Client</TableCell>
                        <TableCell>URL</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>Date and Time Created</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.client}</TableCell>
                            <TableCell>{row.url}</TableCell>
                            <TableCell>{row.state ? "Active" : "Inactive"}</TableCell>
                            <TableCell>{row.datetime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/*
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more orders
        </Link>
            </div>
            */ }
        </React.Fragment>
    );
}