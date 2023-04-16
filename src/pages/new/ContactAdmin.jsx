import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useState } from 'react'
import { Grid, TextField } from '@mui/material'
import Controls from '../../control/Controls'
import Typo from '../../control/Typo'

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    tcontainer: {
        padding: '4px'
    },
    container: {
        marginTop: '50px',
        padding: '30px 0px',
        background: '#ffffff',
        marginBottom: '10px',
        borderWidth: '0px 1px 1px',
        borderTopStyle: 'initial',
        borderRightStyle: 'solid',
        borderBottomStyle: 'solid',
        borderLeftStyle: 'solid',
        borderTopStyle: 'initial',
        borderRightColor: '#eeeeee',
        borderBlockColor: '#eeeeee',
        borderLeftColor: '#eeeeee',
        borderImage: 'initial'
    },
    contactForm: {
        padding: '30px 0px',
        background: '#ffffff',
        marginBottom: '10px',
        borderWidth: '0px 1px 1px',
        borderTopStyle: 'initial',
        borderRightStyle: 'solid',
        borderBottomStyle: 'solid',
        borderLeftStyle: 'solid',
        borderTopStyle: 'initial',
        borderRightColor: '#eeeeee',
        borderBlockColor: '#eeeeee',
        borderLeftColor: '#eeeeee',
        borderImage: 'initial'

    },
}))

const ContactAdmin = (props) => {
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`title,${title} message: ${message}`);
        const formData = {
            title: title,
            message: message,
        }
        const existingData = JSON.parse(localStorage.getItem('contactFormData')) || []
        localStorage.setItem('contactFormData', JSON.stringify([...existingData, formData]));
        setTitle('')
        setMessage('')
    }

    return (
        <>
            <Typo
                title='Contact Admin'
            />
            <Grid container alignItems="center" justifyContent="center" className={classes.container}>
                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <Grid item xs={12} sm={8} md={8}>
                        <TextField id='title' label='Title' value={title} onChange={handleTitleChange} className={classes.title} />
                        <TextField id='message' label='Message' value={message} multiline rows={4} onChange={handleMessageChange} margin="normal" className={classes.message} />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Button
                            onClick={handleSubmit}
                            variant="contained"
                            text="send"
                            color="primary"
                            type="submit"
                        >send</Controls.Button>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}

export default ContactAdmin