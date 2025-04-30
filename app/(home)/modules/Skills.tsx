import React from 'react'
import Image from 'next/image'
import Section from '../components/Section'
import Container from '../components/Container'

const Skills = () => {
    const skills = [
        {
            imageSrc: "/images/js.png",
            name: "Javascript",
        },
        {
            imageSrc: "/images/ts.png",
            name: "Typescript",
        },
        {
            imageSrc: "/images/react.png",
            name: "React",
        },
        {
            imageSrc: "/images/next.png",
            name: "NextJS",
        },
        {
            imageSrc: "/images/chisatogun.png",
            name: "Trigger Happy",
        },
    ]

  return (
    <Section>
        <Container className="lg:max-w-6xl">
            <h2 className="mb-8 md:mb-12 text-center text-green-500">Skills</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                {skills.map(skill => (
                    <div key={skill.name} className="flex flex-col items-center gap-2">
                        <Image 
                            src={skill.imageSrc} 
                            width={84} height={84}
                            alt={skill.name}
                        />
                        <p className="text-bold text-xl text-neutral-700 text-center">
                            {skill.name}
                        </p>
                    </div>   
                ))}
            </div>
        </Container>
    </Section>
  )
}

export default Skills
