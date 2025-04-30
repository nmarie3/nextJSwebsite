import React from 'react'

const Section = ({children, className} : {children: React.ReactNode; className?: string;}) => {
  return (
    <section className={`py-8 md:py-16 ${className}`}>
        {children}

    </section>
  )
}

export default Section
