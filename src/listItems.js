import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Done from '@material-ui/icons/DoneOutline';
import Pending from '@material-ui/icons/ErrorOutline';


export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Done />
            </ListItemIcon>
            <ListItemText primary="Completed Reports" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Pending />
            </ListItemIcon>
            <ListItemText primary="Pending Reports" />
        </ListItem>
    </div>
);

{/* 
export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);

*/}