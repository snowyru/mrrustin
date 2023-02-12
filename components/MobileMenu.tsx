import cn from 'classnames';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import styles from 'styles/mobile-menu.module.css';
import { motion } from 'framer-motion';
import winghi from './winghi.png';
import Image from 'next/image';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsMenuMounted(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      setIsMenuMounted(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <motion.div className='p-5 m-[-4vw] float-left block overflow-visible bg-red-500 absolute z-50'
          style={{width:"70%", height:"auto"}}
         >
          <motion.div className='rounded-r-full w-[100%] relative p-5 bg-blue-500'
            style={{}}
           ><Image src={winghi} sizes="100vw" fill alt="wing" className=""/>
          </motion.div>
          <motion.div className='rounded-r-full w-[90%] relative p-5 bg-blue-500'
            style={{}}
           ><Image src={winghi} sizes="100vw" fill alt="wing" className=""/>
          </motion.div>
          <motion.div className='rounded-r-full w-[80%] relative p-5 bg-blue-500'
            style={{}}
           ><Image src={winghi} sizes="100vw" fill alt="wing" className=""/>
          </motion.div>
          <motion.div className='rounded-r-full w-[70%] relative p-5 bg-blue-500'
            style={{}}
           ><Image src={winghi} sizes="100vw" fill alt="wing" className=""/>
          </motion.div>
          <motion.div className='rounded-r-full w-[60%] relative p-5 bg-blue-500'
            style={{}}
           ><Image src={winghi} sizes="100vw" fill alt="wing" className=""/>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}