import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {

    const router = useRouter();

    useEffect( () => {
        setTimeout( () => {
            router.push("/");
        }, 5000)
    }, [])

    return ( 
       
        <div className="notFound">
            <h1>Oh no! Sorry, something went wrong...</h1>
            <h2>This page was not found 😭 </h2>
            <h3>If you are still reading this please return <Link href="/" >|Home|</Link> </h3>
            <Button variant="outlined" ><Link href="/" >Homepage</Link></Button>
        </div>

     );
}
 
export default NotFound;