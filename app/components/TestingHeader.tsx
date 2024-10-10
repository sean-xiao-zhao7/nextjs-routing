import Link from "next/link";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function TestingHeader() {
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
                        <Link href="/testing/caching">Caching Testing</Link>
                    </li>
                    <li>
                        <Link href="/testing/mutation">Mutation Testing</Link>
                    </li>
                    <li>
                        <Link href="/testing/database">
                            Database management
                        </Link>
                    </li>
                    <li>
                        <Link href="/archive" className="avatar">
                            <AccountCircleIcon
                                sx={{ color: "white", fontSize: "2.5rem" }}
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
