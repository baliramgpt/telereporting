import React from 'react'
import { Typography } from '@mui/material'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    clearfixTitle: {
        background: '#f0f3f5',
        padding: '8px 16px',
        border: '1px solid #c8ced3',
        borderRadius: '8px 8px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pullRight: {
        float: 'right',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px'
    },
    btn: {
        color: '#000',
        backgroundColor: '#0dcaf0',
        borderColor: '#0dcaf0',
        height: '100%',
    },
    textTitle: {
        lineHeight: '38px',
        paddingLeft: '8px',
        float: 'left',
        color: '#ef971a',
        fontWeight: '600'
    }
}))

const Typo = (props) => {
    const { title } = props
    const classes = useStyles();
    const [refreshTimer, setRefreshTimer] = useState(null)
    const [lastRefreshTime, setLastRefreshTime] = useState(null)

    const handleRefresh = () => {
        setLastRefreshTime(new Date().toLocaleTimeString())
    }

    useEffect(() => {
        if (refreshTimer) {
            const interval = setInterval(() => {
                handleRefresh()
            }, refreshTimer)
            return () => clearInterval(interval)
        }
    }, [refreshTimer])

    return (
        <div className={classes.clearfixTitle}>
            <div className={classes.textTitle}>
                <Typography>
                    {title}
                </Typography>
            </div>
            <div className={classes.pullRight}>
                <Button className={classes.btn}
                    variant="contained"
                    color="secondary"
                    onClick={handleRefresh}
                >
                    <AutorenewIcon />
                </Button>
                <Typography>Last Update: {lastRefreshTime ? lastRefreshTime || '-' : '07:10Am'}</Typography>
            </div>
        </div>
    )
}

export default Typo