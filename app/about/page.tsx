'use client'
import Image from "next/image";
import {motion} from "framer-motion";

function Pulse(){

    return(
        <>
            <motion.div style={{width:'10px', height:'10px', borderRadius:'50%', backgroundColor:'red', top:'62%', left:'49.6%', position:'fixed', zIndex:'1'}} 
            animate={{}}
            />
        </>
    )
};
function Surge(){

    return(
        <>
            <motion.div style={{width:300, height:300, borderWidth:'4px', borderRadius:'50%', top:'36%', left:'38%', position:'fixed', zIndex:'0'}} 
            animate={{borderColor:['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,255,255)']}}
            transition={{duration:'10', repeat:Infinity}}
            />
        </>
    )
};

export default function AboutPage(){
    return(
        <>
            <div>
                <Pulse/>
                <Surge/>
                <video src={'/bgvid.mp4'}
                    loop autoPlay muted
                    style={{position:'fixed', width:'100%', top:'0', left:'0', zIndex:'-1'}}>                      
                </video>
            </div>
        </>
    )
};