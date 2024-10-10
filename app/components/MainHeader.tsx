import Link from "next/link";

import Avatar from "@mui/material/Avatar";
import LoginIcon from "@mui/icons-material/Login";

export default function MainHeader() {
    return (
        <header id="main-header">
            <nav>
                <ul>
                    <li>
                        <Link href="/">MAIN HOME</Link>
                    </li>
                    <li>
                        <Link href="/news">NEWS HOME</Link>
                    </li>
                    <li>
                        <Link href="/testing">TESTING HOME</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <Link href="/news">ALL NEWS</Link>
                    </li>
                    <li>
                        <Link href="/archive">OLD NEWS</Link>
                    </li>
                    <li>
                        <Link href="/archive" className="avatar">
                            <Avatar>
                                <LoginIcon />
                            </Avatar>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
