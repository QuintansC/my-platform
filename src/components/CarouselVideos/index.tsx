import Slider from "../Slider/page"

interface CarouselVideosInterface {
    titulo: string
    subtitulo: string
    videos: Array<{}>
}

const CarouselVideos = ({titulo, subtitulo, videos}: CarouselVideosInterface) => {
  
    return (
        <>
            <div className="p-5 m-5 bg-neutral-900 rounded-lg flex flex-col">
                <h2>{titulo}</h2>
                <span>{subtitulo}</span> 
                    
                <Slider>          
                    {videos.map((e, i)=>{
                        return(
                            <video className="m-3" key={i} controls>
                                <source src="../../../public/videos/novo.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        )
                    })}
                </Slider>  

            </div>
        </>
    )
}

export default CarouselVideos