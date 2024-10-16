"use client";
import { useRef } from "react";
import { useFormState } from "react-dom";

import { Paper, TextField, Stack, Alert } from "@mui/material";

import FormSubmit from "@/app/components/form/FormSubmit";

export default function LoginForm({ mutationAction }) {
    const formRef: React.RefObject<HTMLFormElement> = useRef();
    const resetFormHandler = () => {
        if (formRef && formRef.current) {
            formRef.current.reset();
        }
    };

    const [formState, formAction] = useFormState(mutationAction, {
        username: "",
        password: "",
    });

    return (
        <>
            <form action={formAction} ref={formRef}>
                <Paper sx={{ padding: 2 }}>
                    <Stack spacing={2}>
                        <TextField
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
                        <TextField
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
                </Paper>
            </form>
        </>
    );
}
