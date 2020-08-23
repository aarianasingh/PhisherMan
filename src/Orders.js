import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Title from './Title';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Incident from './Incidents';

// Generate Order Data
function createData(id, datetime, client, url, state, rowIndex) {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      console.log(xhr.responseText)
    })
    xhr.open('GET', 'localhost:8000/incidents/')
    xhr.send()
    return { id, datetime, client, url, state, rowIndex };
}

function changeData(i) {
    rows[i].state = !rows[i].state;
}

// mocked data
var rows = [
    createData(0, '16 Mar, 2019', 'RBC', 'http://rBc/phish', 0, 0),
    createData(1, '16 Mar, 2019', 'RBC', 'http://rbC/phishing', 1, 1),
    createData(2, '16 Mar, 2019', 'BMO', 'http://bm0/phish', 0, 2),
    createData(3, '16 Mar, 2019', 'ScotiaBank', 'http://scot1abank/phish', 1, 3),
    createData(4, '15 Mar, 2019', 'RBC', 'http://RBCBank/phish', 1, 4),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    // seeMore: {
    //     marginTop: theme.spacing(3),
    // },
}));

export default function Orders(props) {
    const classes = useStyles();
    return (
        <div>
            <Title>Incidents</Title>
            <React.Fragment>
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
                            <Incident id={row.id} client={row.client} state={row.state} datetime={row.datetime} url={row.url}>
                            </Incident>
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
        </div>
    );
}

/*
<TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell><Button>{row.client}</Button></TableCell>
                                <TableCell><Button>{row.url}</Button></TableCell>
                                <TableCell><Button onClick={() => changeData(row.rowIndex)}>{row.state ? "Active" : "Inactive"}</Button></TableCell>
                                <TableCell>{row.datetime}</TableCell>
                            </TableRow>
*/