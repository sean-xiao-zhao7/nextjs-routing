"use client";

// react
import { useActionState, useState } from "react";
import { useFormState } from "react-dom";

// mui
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

// custom
import FormSubmit from "@/app/components/form/FormSubmit";
import MyPaper from "../containers/MyPaper";
import MyTextField from "./MyTextField";

export default function LoginForm({ mutationAction }) {
    // control username/password because hide password logic requires it
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // password hide
    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    // useFormState
    const [formState, formAction] = useActionState(mutationAction, {
        errorMessage: null,
        message: null,
    });

    // reset form
    const resetFormHandler = () => {
        setUsername("");
        setPassword("");
    };

    return (
        <form action={formAction}>
            <MyPaper
                sx={{
                    padding: 6,
                    paddingBottom: 5,
                    marginRight: "20%",
                    marginLeft: "20%",
                }}
            >
                <Stack spacing={2}>
                    <MyTextField
                        id="username"
                        label="Username"
                        name="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        variant="outlined"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                    {/* endAdornment requires OutlinedInput instead of TextField */}
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="password" shrink>
                            Password *
                        </InputLabel>
                        <OutlinedInput
                            id="password"
                            name="password"
                            label="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            notched
                            type={showPassword ? "text" : "password"}
                            sx={{ borderRadius: 0 }}
                        />
                    </FormControl>
                    {formState.errorMessage && (
                        <Alert severity="error">
                            Error: {formState.errorMessage}
                        </Alert>
                    )}
                    {formState.message && (
                        <Alert severity="success">{formState.message}</Alert>
                    )}
                    <Stack spacing={1} direction={"row-reverse"}>
                        <FormSubmit
                            resetFormHandler={resetFormHandler}
                            submitLabel={"Login"}
                        />
                    </Stack>
                </Stack>
            </MyPaper>
        </form>
    );
}
