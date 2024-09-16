import TestingHeader from "@/app/components/TestingHeader";

export default function TestingLayout(props: React.PropsWithChildren) {
    return (
        <>
            <TestingHeader />
            {props.children}
        </>
    );
}
