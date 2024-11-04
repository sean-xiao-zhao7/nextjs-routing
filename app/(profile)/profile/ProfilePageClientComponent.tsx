"use client";

import Logout from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";

export default function ProfilePageClientComponent({ user, logoutAction }) {
    return (
        <>
            <h2>{user.username}</h2>
            <p>
                {user.firstname} {user.lastname}
            </p>
            <Button
                variant="contained"
                startIcon={<Logout />}
                onClick={() => logoutAction()}
            >
                Log out
            </Button>
        </>
    );
}
