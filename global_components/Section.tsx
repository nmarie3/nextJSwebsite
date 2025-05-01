import React from 'react'

const Section = ({
  children, 
  className,
  id,
} : {
  children: React.ReactNode; 
  className?: string;
  id?: string;
}) => {
  return (
    <section id={id} className={`py-8 md:py-16 ${className}`}>
        {children}

    </section>
  )
}

export default Section
