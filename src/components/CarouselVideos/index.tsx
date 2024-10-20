interface CarouselVideosInterface {
    titulo: string
    subtitulo: string
}

const CarouselVideos = ({titulo, subtitulo}: CarouselVideosInterface) => {
    return (
        <div className="p-5 m-5 bg-neutral-900 rounded-lg">
            <h2>{titulo}</h2>
            <span>{subtitulo}</span>
            <div>
                <video width="320" height="240" controls>
                    <source src="../../../public/videos/novo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default CarouselVideos