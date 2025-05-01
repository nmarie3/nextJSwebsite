import Container from '@/global_components/Container'
import Logo from '../Logo'
import Links from './Links'
import React from 'react'

const NaviDesktop = () => {
  return (
    <Container className="py-4 hidden md:block">
        <header className="flex justify-between items-center">
            <Logo/>
            <Links/>

        </header>
    </Container>
  )
}

export default NaviDesktop
