"use client";

import Logout from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";

export default function ProfilePageClientComponent({ logoutAction }) {
    return (
        <Button
            variant="contained"
            startIcon={<Logout />}
            onClick={() => logoutAction()}
        >
            Log out
        </Button>
    );
}
