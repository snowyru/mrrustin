import Image from "next/image";

export default function AboutPage(){
    return(
        <>
            <div>
                video
                <video src={'/bgvid.mp4'}
                    loop autoPlay muted
                    style={{position:'absolute', width:'100%', top:'0', left:'0', zIndex:'-1'}}>
                      
                </video>
            </div>
        </>
    )
}