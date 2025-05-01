import Container from '@/global_components/Container'
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-4 bg-neutral-100 text-neutral-800">
        <Container>
            <p className="text-xs font-semibold text-neutral-800 text-center">
                &copy; {new Date().getFullYear()} Wasabi Noriko
            </p>
        </Container>
    </footer>
  )
}

export default Footer
