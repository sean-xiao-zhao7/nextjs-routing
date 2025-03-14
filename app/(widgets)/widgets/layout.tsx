import WidgetsHeader from "@/app/components/headers/WidgetsHeader";

export default async function WidgetsLayout(props: React.PropsWithChildren) {
    return (
        <>
            <WidgetsHeader />
            {props.children}
        </>
    );
}
