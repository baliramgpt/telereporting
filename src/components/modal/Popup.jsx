import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core'
import Controls from '../../control/Controls'
import { GridCloseIcon } from '@mui/x-data-grid'

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

const Popup = (props) => {
    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogContainer }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.DeleteButton
                        color="secondary"
                        onClick={() => { setOpenPopup(false) }}>
                        <GridCloseIcon />
                    </Controls.DeleteButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup