export default function ImagePage({ params }) {
    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${params.slug}`} alt={params.slug} />
        </div>
    );
}
