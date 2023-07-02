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
    datatable: {
        height: "600px",
        padding: "20px",
    },
    container: {
        padding: "30px 0px",
        background: "rgb(255, 255, 255)",
        marginBottom: "10px",
        borderWidth: "0px 1px 1px",
        borderTopStyle: "initial",
        borderRightStyle: "solid",
        borderBottomStyle: "solid",
        borderLeftStyle: "solid",
        borderTopColor: "initial",
        borderRightColor: "rgb(238, 238, 238)",
        borderBottomColor: "rgb(238, 238, 238)",
        borderLeftColor: "rgb(238, 238, 238)",
        borderImage: "initial",

    },
    contactForm: {
        marginLeft: "15%",
    },
    message: {
        width: "355px",
    },
    title: {
        width: "355px",
    },
    btn: {
        marginLeft: "20%",
    }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`title,${title} message: ${message}`);

        const payload = {
            title: title,
            message: message,
        };
        console.log(payload);

        const existingData = JSON.parse(localStorage.getItem('contactFormData')) || []
        localStorage.setItem('contactFormData', JSON.stringify([...existingData, payload]));
        try {
            const response = await fetch('https://api.example.com/contactadmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Form data sent successfully!');
                // Reset the form fields
                setTitle('');
                setMessage('');
            } else {
                console.log('Failed to send form data.');
                // Handle the error condition
            }
        } catch (error) {
            console.log('An error occurred:', error);
            // Handle the error condition
        }
    }

    return (
        <div className={classes.datatable}>
            <Typo
                title='Contact Admin'
            />
            <Grid container alignItems="center" justifyContent="center" className={classes.container}>
                <form noValidate autoComplete='off' onSubmit={handleSubmit} className={classes.contactForm}>
                    <Grid item xs={12} sm={8} md={8}>
                        <TextField id='title' label='Title' value={title} onChange={handleTitleChange} className={classes.title} />
                        <TextField id='message' label='Message' value={message} multiline rows={4} onChange={handleMessageChange} margin="normal" className={classes.message} />
                    </Grid>
                    <Grid item xs={12} className={classes.btn}>
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
        </div>
    )
}

export default ContactAdmin