import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, TextField, } from '@material-ui/core'
import { DialogActions, DialogContentText } from '@mui/material'
import Controls from '../../control/Controls'

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

const AddNoteDialog = (props) => {
    const { index, showAddCommentModal, handleCloseAddCommentModal, onSaveComment } = props;
    const [comment, setComment] = useState('')

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handleSaveComment = () => {
        onSaveComment(index, comment);
        setComment('')
        handleCloseAddCommentModal();
    }
    const classes = useStyles();

    return (
        <Dialog open={showAddCommentModal} onClose={handleCloseAddCommentModal} maxWidth="md" classes={{ paper: classes.dialogContainer }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        Add Comment
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <TextField
                    autoFocus
                    margin='dense'
                    label='comment'
                    fullWidth
                    value={comment}
                    onChange={handleCommentChange}
                />
            </DialogContent>
            <DialogActions>
                <Controls.Button
                    text="Close"
                    variant="outlined"
                    onClick={handleCloseAddCommentModal}>Close</Controls.Button>
                <Controls.Button
                    onClick={handleSaveComment}
                    variant="outlined"
                    text="Save"
                    color="primary"
                >Save</Controls.Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddNoteDialog