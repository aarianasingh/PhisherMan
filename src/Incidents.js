import React, { useEffect, useState, useContext } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Title from './Title';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Incidents(props) {

    const [incident, setIncident] = useState(
        {
            client: props.client,
            state: props.state,
            url: props.url
        }
    );

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const classes = useStyles();

    function changeState() {
        var newIncident = Object.assign({}, incident, {});
        newIncident.state = !newIncident.state;
        setIncident(newIncident);
    }

    function storeVal(e, e2) {
        console.log(e2)
        var element = document.getElementById(e2).innerHTML = e.target.value;
    }

    return (
        <TableRow key={props.id}>
            <TableCell id="incident_id">{props.id}</TableCell>
            <TableCell>
                <Button id={props.id} onClick={handleClickOpen}>{incident.client}</Button>
                <div>
                    <Dialog id="diaglog-client" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Change client</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="client"
                                label="Client"
                                fullWidth
                                onChange={(e) => { storeVal(e, props.id) }}
                            />
                        </DialogContent>
                    </Dialog>
                </div>

            </TableCell>
            <TableCell><Button id="client-url" >{incident.url}</Button></TableCell>
            <TableCell><Button onClick={changeState}>{incident.state ? "Active" : "Inactive"}</Button></TableCell>
            <TableCell>{props.datetime}</TableCell>
        </TableRow>

    );
}