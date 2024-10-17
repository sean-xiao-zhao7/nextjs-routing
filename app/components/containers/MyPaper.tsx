import { Paper } from "@mui/material";

export default function MyPaper(props) {
    return (
        <Paper
            sx={{ ...{ padding: 2, borderRadius: 0 }, ...props.sx }}
            {...props}
        >
            {props.children}
        </Paper>
    );
}
