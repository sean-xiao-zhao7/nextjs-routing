export default function NewsDetailsPage({ params }: { params: any }) {
    const id = params.id;
    return (
        <>
            <h1>News {id}</h1>
        </>
    );
}
