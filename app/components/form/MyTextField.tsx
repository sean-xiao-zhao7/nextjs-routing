import { TextField } from "@mui/material";

export default function MyTextField(props) {
    return (
        <TextField
            {...props}
            sx={{
                ".MuiInputBase-root": {
                    borderRadius: "0",
                },
            }}
        />
    );
}
