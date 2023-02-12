'use client'
import '../styles/globals.css';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from './profilePic.png';

export default function HomePage() {

    return (
        <Suspense fallback={null}>
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:bg-black dark:border-gray-700 mx-auto transistion-all pb-16 p-5 md:p-0 ">
                <div className="flex flex-col-reverse sm:flex-row items-start">
                    <div className="flex flex-col pr-8 sm:text-left">
                    <h1 className="font-bold pt-5 decoration-lime-500 underline decoration-2 underline-offset-4 text-3xl md:text-5xl tracking-tight transistion-all mb-1 text-black dark:text-white">
                        Shahied Rustin (This website is still in development)
                    </h1>
                    <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                        Tech enthusiast :{' '}
                        <span className="font-semibold">Mr Rustin</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-16">
                        Hi I'm Shahied, electronic⚡ / computer💻 engineer student at <a className="text-blue-700  dark:text-blue-300" target="_blank" href="https://www.cput.ac.za" >CPUT🎓</a>. Currently, a full stack web developer and IT specialist. Nice to meet you 🤝
                    </p>
                    </div>
                    <div className="w-[200px] sm:inset-0 inset-x-1/3 sm:w-[176px] relative mb-8 sm:mb-0 mr-auto pt-5">
                    <Image
                        alt="Shahied Rustin"
                        height={176}
                        width={176}
                        src={profilePic}
                        sizes="30vw"
                        priority
                        className="rounded-full filter grayscale"
                    />
                    </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-16">
                        "Shahied, A thriving web developer and accomplished IT manager, possesses a passion for technology and a dedication to helping others. Shahied brings a wealth of knowledge and expertise to the table, delivering innovative solutions that drive success for both individuals and organizations alike. Whether working with clients or leading a team, Shahied approaches every task with professionalism, determination, and a drive to succeed." - ChatGPT
                    </p>
                <h3 className="font-bold decoration-lime-500 underline decoration-2 underline-offset-4 text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
                    Featured Projects
                </h3>
                <div className="flex gap-6 flex-col md:flex-row">

                </div>
                <Link
                    href="/blog"
                    className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-colors h-6"
                >
                    <>
                    {'Read all posts'}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 ml-1"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                        />
                    </svg>
                    </>
                </Link>

                <h3 className="font-bold decoration-lime-500 underline decoration-2 underline-offset-4 text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
                    My Socials
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Check out my YouTube Channel ▶️
                </p>
                {/* <iframe width="686" height="386" src="https://www.youtube.com/embed/bfresXpwGw8" title="Noordhoek beach" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                </div>
        </Suspense>
    );
}