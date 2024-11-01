import MainHeader from "@/app/components/headers/MainHeader";

export default async function TestingLayout(props: React.PropsWithChildren) {
    return (
        <>
            <MainHeader testing={true} />
            {props.children}
        </>
    );
}
