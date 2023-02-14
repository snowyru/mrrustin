import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';
import MobileMenu from './MobileMenu';
import '../styles/globals.css';
import { motion } from 'framer-motion';

// export let ripple = 'light';
function Ripple({isDark}) {
 
  const darkTransition = {
    dark:{
      backgroundColor:'black',
      opacity: [0,0.8,0],
      scale:[0,0.6,0.8,1]
    },
    light:{
      backgroundColor:'white',
      opacity: [0,0.8,0],
      scale:[0,0.6,0.8,1]
    }
  };

  return (
    <>
      <motion.div className="fixed z-10 overflow-visible rounded-full"
        variants={darkTransition}
        initial={{scale:0, opacity:0, backgroundColor:'purple'}}
        animate={isDark==='dark' ? 'dark' : 'light'}
        transition={{duration:2}}
        style={{width:"150%", height:"300%", top:"-100%", left:"-25%", pointerEvents:"none" }}
        >
        Hello
      </motion.div>
    </>
 )
};

function NavSlots({href,text}){
    const path = usePathname();
    const isActive = path === href;
    return(
        <>
            <NextLink
            href={href}
            className={cn(
                isActive
                ? 'font-semibold text-gray-800 dark:text-gray-200'
                : 'font-normal text-gray-600 dark:text-gray-400',
                'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800'
            )}
            >
            <span className="capsize">{text}</span>
            </NextLink>
        </>
    )
};

export default function Navbar(props){

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    // const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
      title: 'Shahied Rustin – Developer, writer, creator.',
      description: `Front-end developer, JavaScript enthusiast, and course creator.`,
      image: '',
      type: 'website',
      // ...customMeta
    };

    const [dark, setDark] = useState(true);
    const darkBtn = () => {
      setDark(!dark);
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }

    const dayNight = {
      moon:{
        rotate: 360
      },
      sun:{
        rotate: -360
      }
    }

    return(
      <> 
      <Ripple isDark={resolvedTheme} />       
        <div className=" bg-green-200 dark:bg-lime-900">
          <div className="flex flex-col justify-center px-8">
            <div className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-8  text-gray-900 bg-green-200  dark:bg-lime-900 bg-opacity-60 dark:text-gray-100">
              <div className="ml-[-0.60rem]">
                <MobileMenu />
                <NavSlots href="/" text="Home" />
                <NavSlots href="/about" text="About" />
                <NavSlots href="/time" text="Time Machine" />
                <NavSlots href="/guestbook" text="Guestbook" />
                <NavSlots href="/blog" text="Blog" />
              </div>
              <motion.button
                variants={dayNight}
                initial={{rotate:0}}
                animate={dark ? 'moon' : 'sun' }
                transition={{duration: 2, ease: [0, 0.71, 0.2, 1.01]}}
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
                onClick={darkBtn}
              >
                {mounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-800 dark:text-gray-200"
                  >
                    {resolvedTheme === 'dark' ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    )}
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </>
    )
}