import { Paper } from "@mui/material";

export default function MyPaper({ children }) {
    return <Paper sx={{ padding: 2, borderRadius: 0 }}>{children}</Paper>;
}
