"use client";
import { useRef } from "react";
import { useFormState } from "react-dom";

import {
    TextField,
    Stack,
    Checkbox,
    FormControlLabel,
    Alert,
} from "@mui/material";

import FormSubmit from "@/app/components/form/FormSubmit";
import MyPaper from "../containers/MyPaper";
import MyTextField from "./MyTextField";

export default function RegisterForm({ mutationAction }) {
    const formRef: React.RefObject<HTMLFormElement> = useRef();
    const resetFormHandler = () => {
        if (formRef && formRef.current) {
            formRef.current.reset();
        }
    };

    const [formState, formAction] = useFormState(mutationAction, {});

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
                            required
                            type="password"
                        />
                        <MyTextField
                            id="firstname"
                            label="Firstname"
                            variant="outlined"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            name="firstname"
                            required
                        />
                        <MyTextField
                            id="lastname"
                            label="Lastname"
                            variant="outlined"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            name="lastname"
                            required
                        />
                        <FormControlLabel
                            required
                            control={<Checkbox />}
                            label="Accept terms of service to register."
                            id="terms"
                            name="terms"
                        />
                        {formState.errorMessage && (
                            <Alert severity="error">
                                Error: {formState.errorMessage}
                            </Alert>
                        )}
                        {formState.message && (
                            <Alert severity="success">
                                Success: {formState.message}
                            </Alert>
                        )}
                        <Stack spacing={1} direction={"row-reverse"}>
                            <FormSubmit
                                resetFormHandler={resetFormHandler}
                                submitLabel={"Register"}
                            />
                        </Stack>
                    </Stack>
                </MyPaper>
            </form>
        </>
    );
}
