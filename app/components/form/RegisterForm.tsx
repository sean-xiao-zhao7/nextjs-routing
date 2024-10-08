"use client";
import { useRef } from "react";
import { useFormState } from "react-dom";

import {
    Paper,
    TextField,
    Stack,
    Checkbox,
    FormControlLabel,
} from "@mui/material";

import FormSubmit from "@/app/components/form/FormSubmit";

export default function RegisterForm({ mutationAction }) {
    const formRef: React.RefObject<HTMLFormElement> = useRef();
    const resetFormHandler = () => {
        if (formRef && formRef.current) {
            formRef.current.reset();
        }
    };

    const [formState, formAction] = useFormState(mutationAction, {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
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
                        />
                        <TextField
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
                        <TextField
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
                        {formState.errors && (
                            <ul className="form-errors">
                                {formState.errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        )}
                        <Stack spacing={1} direction={"row-reverse"}>
                            <FormSubmit
                                resetFormHandler={resetFormHandler}
                                submitLabel={"Register"}
                            />
                        </Stack>
                    </Stack>
                </Paper>
            </form>
        </>
    );
}
