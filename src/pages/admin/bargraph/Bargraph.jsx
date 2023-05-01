import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    paper: {
        padding: "10px",
        marginTop: "10px",
    },
}));

const Bargraph = ({ data }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="totalPatients" fill="#338ebe" />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default Bargraph;