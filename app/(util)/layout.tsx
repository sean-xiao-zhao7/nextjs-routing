import Link from "next/link";

export default function UtilLayout(props: React.PropsWithChildren) {
    return (
        <>
            <ul>
                <li>
                    <Link href="/database">Database</Link>
                </li>
            </ul>
            {props.children}
        </>
    );
}
