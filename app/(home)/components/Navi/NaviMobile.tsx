"use client"; //need this to declare this as a client component

import React, { useEffect } from 'react'
import Container from '@/global_components/Container';
import Logo from '../Logo';
import { CgClose } from 'react-icons/cg';
import { CiMenuBurger } from 'react-icons/ci';
import Links from './Links';

const NaviMobile = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    const closeMenu = () => {
        setIsOpen(false);
    };

    //disable scroll when the menu is open on mobile. basically this kinda acts like a seperate pop up of just the nav. if you want it to appear over the profile, then this wouldn't be needed.
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow ="hidden";
        }else {
            document.body.style.overflow="auto";
        }
        //this return is to avoid bugs. the isOpen at the end tells it when to change again
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

  return (
    <Container className="py-2 md:hidden">
        <header className="flex justify-between items-center">
            <Logo/>
            <button onClick={toggleMenu}>
                {isOpen ? <CgClose size="24"/> : <CiMenuBurger size="24"/>}
            </button>
        </header>

        {isOpen && (
            <nav className="flex justify-center absolute w-full h-[calc(100%-48px)] left-0 bg-white z-10 pt-10">
                <Links isVertical onClick={closeMenu}/>
            </nav>
        )}
    </Container>
  )
}

export default NaviMobile
