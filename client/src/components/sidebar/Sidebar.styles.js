import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& ul': {
            listStyle: "none",
            margin: "0",
            padding: "0",
        },
        '& li': {
            display: "flex",
            alignItems: "center",
            padding: "5px",
            cursor: "pointer",
            '&:hover': {
                backgroundColor: "#ece8ff",
            }
        },
        '& span': {
            fontSize: "13px",
            fontWeight: "600",
            color: "rgb(40, 40, 40)",
            marginLeft: "10px",
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    hide: {
        display: 'none',
    },
    sidebar: {
        flex: 1,
        borderRight: "0.5px solid rgb(230, 227, 227)",
        minHeight: "100vh",
        backgroundColor: "white",
    },
    top: {
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#2c4869",
    },
    hr: {
        height: "0",
        border: "0.5px solid rgb(230, 227, 227)",
    },
    center: {
        paddingLeft: "10px",
    },
    title: {
        fontSize: "10px",
        fontWeight: "bold",
        color: "rgb(40, 40, 40)",
        marginTop: "15px",
        marginBottom: "5px",
    },
    icon: {
        fontSize: "18px",
        color: "#6034ff",
    },
    bottom: {
        display: "flex",
        alignItems: "center",
        margin: "10px",
    },
    colorOption: {
        width: "20px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid #7451f8",
        cursor: "pointer",
        margin: "5px",
    },

}))

export default useStyles;