import { Paper } from "@mui/material";

export default function MyPaper(props) {
    const styles = { ...{ padding: 2, borderRadius: 0 }, ...props.sx };
    console.log(styles);
    return (
        <Paper {...props} sx={styles}>
            {props.children}
        </Paper>
    );
}
