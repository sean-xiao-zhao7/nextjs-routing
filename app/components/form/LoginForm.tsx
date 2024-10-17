"use client";

// react
import { useRef, useState } from "react";
import { useFormState } from "react-dom";

// MUI material
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";

// custom components
import FormSubmit from "@/app/components/form/FormSubmit";
import MyPaper from "../containers/MyPaper";
import MyTextField from "./MyTextField";

export default function LoginForm({ mutationAction }) {
    const formRef: React.RefObject<HTMLFormElement> = useRef();
    // const [showPassword, setShowPassword] = useState(false);

    const resetFormHandler = () => {
        if (formRef && formRef.current) {
            formRef.current.reset();
        }
    };

    const [formState, formAction] = useFormState(mutationAction, {
        username: "",
        password: "",
    });

    // const handleClickShowPassword = () => setShowPassword((show) => !show);
    // const handleMouseDownPassword = (
    //     event: React.MouseEvent<HTMLButtonElement>
    // ) => {
    //     event.preventDefault();
    // };
    // const handleMouseUpPassword = (
    //     event: React.MouseEvent<HTMLButtonElement>
    // ) => {
    //     event.preventDefault();
    // };

    return (
        <>
            <form action={formAction} ref={formRef}>
                <MyPaper>
                    <Stack spacing={2}>
                        <MyTextField
                            id="username"
                            label="Username"
                            variant="outlined"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            name="username"
                            required
                        />
                        <MyTextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            name="password"
                            type="password"
                            required
                        />
                        {/* <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                required
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
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
                                label="Password"                            
                            />
                        </FormControl> */}
                        {formState.errorMessage && (
                            <Alert severity="error">
                                Error: {formState.errorMessage}
                            </Alert>
                        )}
                        {formState.message && (
                            <Alert severity="success">
                                {formState.message}
                            </Alert>
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
        </>
    );
}
