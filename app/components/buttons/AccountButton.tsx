import Link from "next/link";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AccountButton({ link }) {
    return (
        <Link href={link} className="avatar">
            <AccountCircleIcon sx={{ color: "white", fontSize: "2.5rem" }} />
        </Link>
    );
}
