import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core'
import Controls from '../../control/Controls'
import { DialogActions, DialogContentText } from '@mui/material'


const useStyles = makeStyles(theme => ({
    dialogContainer: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

const ConfirmDialog = (props) => {

    const { title, showDeleteDialog, handleDeleteConfirm, handleDeleteCancel } = props;
    const classes = useStyles();

    return (
        <Dialog open={showDeleteDialog} maxWidth="md" classes={{ paper: classes.dialogContainer }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <DialogContentText>
                    Are you sure want to delete this record ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Controls.Button
                    text="Cancel"
                    variant="outlined"
                    onClick={handleDeleteCancel}>Cancel</Controls.Button>
                <Controls.Button
                    onClick={handleDeleteConfirm}
                    variant="outlined"
                    text="Delete"
                    color="primary"
                >Delete</Controls.Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog